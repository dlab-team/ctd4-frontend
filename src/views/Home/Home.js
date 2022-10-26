import { Section1 } from './components/Section1';
import { Section3 } from './components/section3';
import { Section2 } from './components/Section2';
import { Section5 } from './components/Section5';
import { Footer } from '../../components/Footer';
import { NewSection1 } from './components/NewSection1';
import { Header } from '../../components/Header';
import { NewHeader } from '../../components/NewHeader';
import { NewSection2 } from './components/NewSection2';

export function Home() {
  return (<>
    <div className="text-zinc-100" >
      <NewHeader />
      <NewSection1 />
      <NewSection2 />

      <Section5 />
      <Footer />
    </div >
  </>)
}
