import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { TargetAudienceSection } from '@/components/sections/target-audience';
import { PricingSection } from '@/components/sections/pricing';
import { InstructorSection } from '@/components/sections/instructor';
import { FAQSection } from '@/components/sections/faq';
import { CTASection, Footer } from '@/components/sections/cta-footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <PricingSection />
      <InstructorSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
