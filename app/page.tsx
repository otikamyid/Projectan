import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Services } from '@/components/services';
import { Benefits } from '@/components/benefits';
import { Industries } from '@/components/industries';
import { TrustedBy } from '@/components/trusted-by';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';
import { CTA } from '@/components/cta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <Benefits />
      <Industries />
      <TrustedBy />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
