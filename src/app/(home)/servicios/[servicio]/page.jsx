import { 
  HeaderSection, 
  InfoSection, 
  ProcesosSection, 
  ProductsSection,
  MarcasSection,
  TeamSection,
  FaqServicesSection,
  Subscription
} from "@/components/services";

export default function Servicio() {
  return (
    <>
      <HeaderSection />
      <InfoSection />
      <ProcesosSection />
      <ProductsSection />
      {/* <MarcasSection /> */}
      <TeamSection />
      <FaqServicesSection />
      <Subscription />        
    </>
  );
}
