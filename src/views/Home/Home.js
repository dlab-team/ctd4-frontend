import { Section1 } from './components/Section1';
import { Section3 } from './components/section3';
import { Section2 } from './components/Section2';
import { Section5 } from './components/section5';
import { Footer } from '../../components/Footer';

export function Home() {
  return (<>
    <div className="text-zinc-100" >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Footer />
    </div >
  </>)
}
