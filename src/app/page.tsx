import FeaturesPage from "@/components/FeatureSection";
import HowItWorksPage from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import CardWrapper from "@/components/HeroPage";
import AdvantagesPage from "@/components/AdvantagesSection";
import TestimonialsPage from "@/components/Testimonials";
import CtaPage from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CardWrapper />
      <FeaturesPage />
      <AdvantagesPage />
      <HowItWorksPage />
      <CtaPage />
      <Footer />
    </div>
  );
};

export default Home;
