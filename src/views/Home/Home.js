import { Section1 } from './components/Section1';
import { Section3 } from './components/section3';
import { Section2 } from './components/Section2';
import { Section5 } from './components/Section5';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';



export function Home() {
  return (<>
    <div className="text-zinc-100" >
      <Header />
      <Section1 />
      <Section2 />
      <Section5 />
      <Footer />
    </div >
  </>)
}
