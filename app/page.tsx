import Navbar from '@/components/navbar';
import { Hero } from '@/components/Home';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}