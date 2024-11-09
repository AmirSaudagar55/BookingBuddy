import Stats from './components/Stats';
import Features from './components/Features';
import HeroSection from './components/Home';
import Layout from './layouts/Layout';
import Testimonials from './components/Testimonials';
import CallToAction from './components/GetStartedSection';
import Blog from './components/Blog';

const Index = () => {
  return (
    <Layout title="Welcome to Astrolus.">
      <main className="space-y-40 mb-40">
        <HeroSection />
        <Features />
        <Stats />
        <Testimonials />
        <CallToAction />
        <Blog />
      </main>
    </Layout>
  );
};

export default Index;
