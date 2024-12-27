'use client'
import { 
  HeaderSection, 
  InfoSection, 
  ProcesosSection, 
  ProductsSection,
  TeamSection,
  FaqServicesSection,
  Subscription
} from "@/components/services";
import { usePathname } from 'next/navigation'

export default function Servicio() {

  const pathname = usePathname();
  if (pathname.includes('protesis-de-pierna')) {
    console.log("Protesis de pierna");
    
  } else {
    console.log("Funciona la logica");
  }
  

  return (
    <>
      <HeaderSection />
      <InfoSection />
      <ProcesosSection />
      <ProductsSection />
      <TeamSection />
      <FaqServicesSection />
      <Subscription />        
    </>
  );
}
