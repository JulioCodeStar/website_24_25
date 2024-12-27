import { SomosSection, HabilitySEction, MissionVisionSection, ValoresSection } from "@/components/about/_components";
import configAxios from "@/api/config/config-axios";

async function fetchNosotros() {
  try {
    const res = await configAxios.get("about?populate[AboutDynamic][populate]=*");    
    return res.data.data.AboutDynamic;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function Nosotros() {

  const nosotros = await fetchNosotros();

  const renderSection = (section) => {
    switch (section.__component) {
      case "component-about.kyp-section":
        return <SomosSection key={section.id} data={section} />;
      case "component-about.hability-section":
        return <HabilitySEction data={section} />;
      case "component-about.mision-and-vision":
        return <MissionVisionSection data={section} />;
      case "component-about.valores-section":
        return <ValoresSection data={section} />;
      default:
        return null;
    }
  }

  return (
    <>
        {nosotros.map((section) => renderSection(section))}
    </>
  )
}
