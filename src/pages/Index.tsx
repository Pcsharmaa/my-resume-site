import Header from '@/components/resume/Header';
import Hero from '@/components/resume/Hero';
import Skills from '@/components/resume/Skills';
import Experience from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import Contact from '@/components/resume/Contact';
import Footer from '@/components/resume/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
