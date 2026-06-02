export const LICENSED_STATES = [
  'Texas',
  'Alabama',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Louisiana',
  'Maryland',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Montana',
  'Nebraska',
  'New Jersey',
  'New Mexico',
  'North Carolina',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'South Carolina',
  'Tennessee',
  'Virginia',
  'Washington',
  'Wisconsin',
  'Puerto Rico',
] as const;

export const PENDING_STATES = ['Utah'] as const;

export const FIPS_TO_STATE: Record<string, string> = {
  '01': 'Alabama',
  '02': 'Alaska',
  '04': 'Arizona',
  '05': 'Arkansas',
  '06': 'California',
  '08': 'Colorado',
  '09': 'Connecticut',
  '10': 'Delaware',
  '11': 'District of Columbia',
  '12': 'Florida',
  '13': 'Georgia',
  '15': 'Hawaii',
  '16': 'Idaho',
  '17': 'Illinois',
  '18': 'Indiana',
  '19': 'Iowa',
  '20': 'Kansas',
  '21': 'Kentucky',
  '22': 'Louisiana',
  '23': 'Maine',
  '24': 'Maryland',
  '25': 'Massachusetts',
  '26': 'Michigan',
  '27': 'Minnesota',
  '28': 'Mississippi',
  '29': 'Missouri',
  '30': 'Montana',
  '31': 'Nebraska',
  '32': 'Nevada',
  '33': 'New Hampshire',
  '34': 'New Jersey',
  '35': 'New Mexico',
  '36': 'New York',
  '37': 'North Carolina',
  '38': 'North Dakota',
  '39': 'Ohio',
  '40': 'Oklahoma',
  '41': 'Oregon',
  '42': 'Pennsylvania',
  '44': 'Rhode Island',
  '45': 'South Carolina',
  '46': 'South Dakota',
  '47': 'Tennessee',
  '48': 'Texas',
  '49': 'Utah',
  '50': 'Vermont',
  '51': 'Virginia',
  '53': 'Washington',
  '54': 'West Virginia',
  '55': 'Wisconsin',
  '56': 'Wyoming',
};

export type StateStatus = 'licensed' | 'pending' | 'unlicensed';

const licensedSet = new Set<string>(LICENSED_STATES);
const pendingSet = new Set<string>(PENDING_STATES);

export function getStateStatus(name: string): StateStatus {
  if (licensedSet.has(name)) return 'licensed';
  if (pendingSet.has(name)) return 'pending';
  return 'unlicensed';
}

export function getStateStatusLabel(status: StateStatus): string {
  switch (status) {
    case 'licensed':
      return 'Licensed';
    case 'pending':
      return 'Pending';
    default:
      return 'Not yet licensed';
  }
}
