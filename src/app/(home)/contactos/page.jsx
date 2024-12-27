import { ContactSection, FormContactSection, MapsSection } from "@/components/contactos";
import configAxios from "@/api/config/config-axios";

async function fetchContactos() {
  try {
    const res = await configAxios.get("contact?populate[ContactDynamic][populate]=*");
    return res.data.data.ContactDynamic;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
}

export default async function Contactos() {

  const contactos = await fetchContactos();

  const renderSection = (section) => {
    switch (section.__component) {
      case "component-contact.contact-section":
        return (
          <>
            <ContactSection key={section.id} data={section} />
            <FormContactSection />
          </>
        );
      case "component-contact.sede-section":
        return <MapsSection data={section} />;
    }
  }

  return (
    <>
      {contactos.map((section) => renderSection(section))}
    </>
  );
}
