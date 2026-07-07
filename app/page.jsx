import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import PricingCalculator from '@/components/PricingCalculator';
import Memberships from '@/components/Memberships';
import BeforeAfter from '@/components/BeforeAfter';
import PortalPreview from '@/components/PortalPreview';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import ServiceArea from '@/components/ServiceArea';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export default function HomePage() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <PricingCalculator />
      <Memberships />
      <BeforeAfter />
      <PortalPreview />
      <WhyUs />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
