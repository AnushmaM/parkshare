import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { HowItWorks } from '@/components/landing/how-it-works';
import { ForDrivers } from '@/components/landing/for-drivers';
import { ForOwners } from '@/components/landing/for-owners';
import { TrustSection } from '@/components/landing/trust-section';
import { CTASection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ForDrivers />
      <ForOwners />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  );
}
