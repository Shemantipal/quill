import { HeroLandingPage } from '../components/home/CTA';
import { CardCanvasRevealEffect } from '../components/home/CardCanvas';
import { TypewriterLandingPage } from '../components/home/Landing';
import { Navbar } from '../components/navbar';

const LandingPage = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <TypewriterLandingPage />
      <HeroLandingPage />
      <CardCanvasRevealEffect />
    </div>
  );
};

export default LandingPage;
