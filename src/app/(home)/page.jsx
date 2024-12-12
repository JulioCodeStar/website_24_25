import configAxios from "@/api/config/config-axios";
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

async function fetchInicio() {
  try {
    const res = await configAxios.get("inicio?populate[InicioDynamic][populate]=*");
    return res.data.data.InicioDynamic;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Home() {
  const inicio = await fetchInicio();
  
  
  const renderSection = (section) => {
    switch (section.__component) {
      case "component-home.header-section":
        return <HeroSection data={section} />;
      case "component-home.about-section":
        return <AboutSection data={section} />;
      case "component-home.our-services-section":
        return <ServicesSection data={section} />;
      case "component-home.choose-section":
        return <ChooseSection data={section} />;
      // case "component-home.our-team-section":
      //   return <TeamSection key={section.id} data={section} />;
      // case "component-home.testomonios-section":
      //   return <TestimonialsSection key={section.id} data={section} />;
      // case "component-home.faqs-section":
      //   return <FaqsSection key={section.id} data={section} />;
      default:
        return null;
    }
  };
  
  return (
    <>
      {inicio.map((section) => renderSection(section))}
      {/* <HeroSection />
      <AboutSection />
      <ServicesSection /> 
      <ChooseSection /> */}
      <TeamSection />
      <TestimonialsSection />
      <FaqsSection /> 
      <BlogSection />
    </>
  );
}


