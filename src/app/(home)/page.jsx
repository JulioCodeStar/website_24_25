import { 
  HeroSection,
  AboutSection, 
  BlogSection, 
  ChooseSection, 
  FaqsSection, 
  ServicesSection, 
  TeamSection, 
  TestimonialsSection 
} from "@/components/home";
import { HeaderHome } from "@/components/Layouts";


export default function Home() {
  return (
    <>
      {/* <HeaderHome /> */}
      <HeroSection />
      <AboutSection />
      <ServicesSection /> 
      <ChooseSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqsSection /> 
      <BlogSection />
    </>
  );
}
