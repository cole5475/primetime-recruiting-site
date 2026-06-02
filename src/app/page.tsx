import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Math from '@/components/Math';
import MpireU from '@/components/MpireU';
import Nav from '@/components/Nav';
import Offer from '@/components/Offer';
import Pitch from '@/components/Pitch';
import RevealInit from '@/components/RevealInit';
import Stack from '@/components/Stack';
import StraightTalk from '@/components/StraightTalk';

export default function HomePage() {
  return (
    <>
      <RevealInit />
      <Nav />
      <main>
        <Hero />
        <Pitch />
        <Math />
        <Offer />
        <Stack />
        <MpireU />
        <StraightTalk />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
