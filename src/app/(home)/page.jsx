import { 
  AboutSection, 
  BlogSection, 
  ChooseSection, 
  HeroSection, 
  ServicesSection, 
  TestimonialsSection 
} from "@/components/home";
import { HeaderHome } from "@/components/Layouts";


export default function Home() {
  return (
    <>
      <HeaderHome />
      <AboutSection />
      <ServicesSection /> 
      <ChooseSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
