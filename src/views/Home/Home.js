import { Section1 } from './components/Section1';
import { Section3 } from './components/Section3';
import { Section2 } from './components/Section2';
import { Section4 } from './components/Section4';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';



export function Home() {
  return (
    <>
      <div className="text-zinc-100">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </>
  );
}
