import { Landing1 } from '../components/Landing1';
import Landing3 from '../components/Landing3';
import { LandingPage2 } from '../components/LandingPage2';
import { Landing4 } from '../components/Landing4';
import { Landing5 } from '../components/Landing5';
import { Footer } from '../components/Footer';


export function LandingPage() {
  return (
    <>
      <div className="text-zinc-100"></div>
      <Landing1 />
      <LandingPage2 />
      <Landing3 />
      <Landing4 />
      <Landing5 />
      <Footer />
      
    </>
  );
}
