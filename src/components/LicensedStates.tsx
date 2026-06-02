'use client';

import { geoAlbersUsa, geoPath } from 'd3-geo';
import { useMemo, useState } from 'react';
import { feature, merge } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import statesTopo from 'us-atlas/states-10m.json';
import countiesTopo from 'us-atlas/counties-10m.json';
import {
  FIPS_TO_STATE,
  LICENSED_STATES,
  getStateStatus,
  getStateStatusLabel,
  type StateStatus,
} from './licensedStatesData';

const MAP_WIDTH = 960;
const MAP_HEIGHT = 600;

type StatePath = {
  name: string;
  d: string;
  status: StateStatus;
};

type TooltipState = {
  name: string;
  status: StateStatus;
  x: number;
  y: number;
};

function getStateNameFromFips(id: string): string | null {
  const padded = id.padStart(2, '0');
  return FIPS_TO_STATE[padded] ?? null;
}

function buildStatePaths(): StatePath[] {
  const projection = geoAlbersUsa()
    .scale(1280)
    .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]);
  const pathGenerator = geoPath(projection);

  const statesCollection = feature(
    statesTopo as unknown as Topology,
    (statesTopo as unknown as Topology).objects.states as GeometryCollection
  ) as FeatureCollection;

  const paths: StatePath[] = statesCollection.features
    .map((stateFeature) => {
      const fips = String(stateFeature.id ?? '');
      const name = getStateNameFromFips(fips);
      if (!name) return null;

      const d = pathGenerator(stateFeature as Feature<Geometry>);
      if (!d) return null;

      return {
        name,
        d,
        status: getStateStatus(name),
      };
    })
    .filter((entry): entry is StatePath => entry !== null);

  const countiesTopology = countiesTopo as unknown as Topology;
  const countyObjects = countiesTopology.objects.counties as GeometryCollection;
  const prGeometries = Object.values(countyObjects.geometries).filter((geometry) =>
    String(geometry.id ?? '').startsWith('72')
  );

  if (prGeometries.length > 0) {
    const puertoRicoGeometry = merge(
      countiesTopology,
      prGeometries as Parameters<typeof merge>[1]
    );
    const puertoRicoFeature: Feature<Geometry> = {
      type: 'Feature',
      properties: {},
      geometry: puertoRicoGeometry as Geometry,
    };
    const prPath = pathGenerator(puertoRicoFeature);
    if (prPath) {
      paths.push({
        name: 'Puerto Rico',
        d: prPath,
        status: getStateStatus('Puerto Rico'),
      });
    }
  }

  return paths.sort((a, b) => a.name.localeCompare(b.name));
}

const STATE_PATHS = buildStatePaths();

function splitIntoColumns(items: readonly string[], columnCount: number): string[][] {
  const columns: string[][] = Array.from({ length: columnCount }, () => []);
  const perColumn = Math.ceil(items.length / columnCount);

  items.forEach((item, index) => {
    const columnIndex = Math.min(Math.floor(index / perColumn), columnCount - 1);
    columns[columnIndex].push(item);
  });

  return columns;
}

const monoTextStyle = {
  fontFamily: 'var(--font-ibm-mono)',
  fontSize: '13px',
} as const;

export default function LicensedStates() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [listExpanded, setListExpanded] = useState(false);

  const paths = useMemo(() => STATE_PATHS, []);

  const licensedColumns = useMemo(() => {
    const sorted = [...LICENSED_STATES].sort((a, b) => a.localeCompare(b));
    return splitIntoColumns(sorted, 3);
  }, []);

  const handlePointerMove = (
    event: React.PointerEvent<SVGPathElement>,
    name: string,
    status: StateStatus
  ) => {
    const container = event.currentTarget.ownerSVGElement?.closest('.states-map-wrap');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    setHoveredName(name);
    setTooltip({
      name,
      status,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const clearHover = () => {
    setHoveredName(null);
    setTooltip(null);
  };

  return (
    <section id="states" className="section section-states">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Licensed States</p>
          <h2>Where we close.</h2>
          <p className="lede">
            Licensed in 34 states and growing. Utah pending. We&apos;re working toward full national
            coverage — if your state isn&apos;t listed yet, ask on the call.
          </p>
        </div>

        <div className="states-map-wrap reveal">
          <svg
            className="states-map-svg"
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            role="img"
            aria-label="Interactive map of United States licensing status"
          >
            <g className="states-map-layer">
              {paths.map((state) => (
                <path
                  key={state.name}
                  d={state.d}
                  data-state={state.name}
                  className={`states-path states-path--${state.status}${
                    hoveredName === state.name ? ' states-path--hover' : ''
                  }`}
                  onPointerMove={(event) => handlePointerMove(event, state.name, state.status)}
                  onPointerEnter={(event) => handlePointerMove(event, state.name, state.status)}
                  onPointerLeave={clearHover}
                />
              ))}
            </g>
          </svg>

          {tooltip && (
            <div
              className="states-map-tooltip"
              style={{
                left: tooltip.x,
                top: tooltip.y,
              }}
              role="status"
            >
              <strong>{tooltip.name}</strong>
              <span>{getStateStatusLabel(tooltip.status)}</span>
            </div>
          )}
        </div>

        <ul className="states-legend reveal">
          <li className="states-legend-item">
            <span className="states-legend-dot states-legend-dot--licensed" aria-hidden="true" />
            Licensed (34)
          </li>
          <li className="states-legend-item">
            <span className="states-legend-dot states-legend-dot--pending" aria-hidden="true" />
            Pending (1) — Utah
          </li>
          <li className="states-legend-item">
            <span className="states-legend-dot states-legend-dot--unlicensed" aria-hidden="true" />
            Not yet licensed
          </li>
        </ul>

        <button
          type="button"
          aria-expanded={listExpanded}
          onClick={() => setListExpanded((open) => !open)}
          style={{
            display: 'block',
            margin: '20px auto 0',
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: 'var(--gold)',
            ...monoTextStyle,
          }}
        >
          {listExpanded ? 'Hide list ↑' : 'View all licensed states ↓'}
        </button>

        <div
          style={{
            maxHeight: listExpanded ? '520px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease',
          }}
        >
          <div style={{ paddingTop: listExpanded ? '20px' : '0' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '8px 24px',
              }}
            >
              {licensedColumns.map((column, columnIndex) => (
                <ul
                  key={`licensed-col-${columnIndex}`}
                  style={{ listStyle: 'none', margin: 0, padding: 0 }}
                >
                  {column.map((state) => (
                    <li
                      key={state}
                      style={{
                        ...monoTextStyle,
                        color: 'var(--text)',
                        marginBottom: '6px',
                      }}
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <p
              style={{
                ...monoTextStyle,
                color: '#4a6080',
                textAlign: 'center',
                margin: '20px 0 0',
              }}
            >
              Utah <span style={{ color: '#4a6080' }}>(Pending)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
