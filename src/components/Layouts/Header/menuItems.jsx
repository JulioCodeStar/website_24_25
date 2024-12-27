import Link from "next/link";
import { ChevronDown } from "lucide-react";

const menuData = {
  id: 2,
  documentId: "ag71p4zky139sj29umlg683b",
  createdAt: "2024-12-07T03:50:35.303Z",
  updatedAt: "2024-12-07T03:50:35.303Z",
  publishedAt: "2024-12-07T03:50:37.520Z",
  MainMenuItems: [
    {
      __component: "menu.menu-link",
      id: 5,
      title: "Inicio",
      url: "/",
    },
    {
      __component: "menu.menu-link",
      id: 6,
      title: "Nosotros",
      url: "/nosotros",
    },
    {
      __component: "menu.dropdown",
      id: 2,
      title: "Servicios",
      sections: [
        {
          id: 3,
          documentId: "qe5iwp072dcf948h7p6v2bxg",
          heading: "Prótesis de pierna",
          slug: "/servicios/protesis-de-pierna",
          description: null,
          links: [
            {
              id: 4,
              name: "Prótesis Transfemoral",
              url: "/servicios/protesis-de-pierna/protesis-transfemoral",
              description: "Prótesis por encima de la rodilla",
            },
            {
              id: 5,
              name: "Prótesis Transtibial",
              url: "/servicios/protesis-de-pierna/protesis-transtibial",
              description: "Prótesis por debajo de la rodilla",
            },
          ],
        },
        {
          id: 5,
          documentId: "w0h2xmjuimjc4o9xjqe3juc2",
          heading: "Prótesis Biónicas",
          slug: "/servicios/protesis-bionicas",
          description: null,
          links: [
            {
              id: 7,
              name: "Mano Parcial Biónica",
              url: "/servicios/protesis-bionicas/protesis-bionica-de-mano-parcial/",
              description: null,
            },
          ],
        },
        {
          id: 7,
          documentId: "ig8gyrsxd14vo34amxzje7gk",
          heading: "Prótesis Estéticas",
          slug: "/servicios/protesis-esteticas",
          description: null,
          links: [
            {
              id: 11,
              name: "Mano Completa Estética",
              url: "/servicios/protesis-esteticas/mano-completa-estetica",
              description: null,
            },
            {
              id: 12,
              name: "Falange Total",
              url: "/servicios/protesis-esteticas/falange-total",
              description: null,
            },
            {
              id: 13,
              name: "Prótesis de Oído",
              url: "/servicios/protesis-esteticas/protesis-de-oido",
              description: null,
            },
          ],
        },
      ],
    },
    {
      __component: "menu.menu-link",
      id: 7,
      title: "Blog",
      url: "/blog",
    },
    {
      __component: "menu.menu-link",
      id: 8,
      title: "Contactos",
      url: "/contactos",
    },
  ],
};


// Para determinar si el menu es un enlace o un dropdown
function isMenuLink(item) {
  return item.url !== undefined;
}

export default function MenuItems() {
  
  const menuItems = menuData.MainMenuItems;

  return (
    <nav className="hidden lg:flex items-center gap-4">
      <ul className="flex items-center gap-4 justify-center text-lg">
        {menuItems.map((item) => (
          <li key={item.id} className="relative group px-3 py-2 cursor-pointer">
            {isMenuLink(item) ? (
              <Link href={item.url} className="hover:opacity-50 cursor-pointer">
                {item.title}
              </Link>
            ) : (
              <>
                <div className="relative group px-3 py-2">
                  <button className="flex items-center gap-x-2 hover:opacity-50 cursor-default">
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-0 -left-72 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[760px]">
                    <div className="relative top-6 p-6 bg-white rounded-xl transform shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full ">
                      <div className="grid grid-cols-3 gap-8">
                        {/* Resources Column */}
                        {item.sections.map((section) => (
                          <div key={section.id}>
                            <Link href={section.slug}>
                              <h3 className="text-sm font-semibold text-blue-700 mb-4 uppercase">
                                {section.heading}
                              </h3>
                            </Link>
                            <ul className="space-y-4">
                              {section.links.map((link) => (
                                <li key={link.id}>
                                  <Link
                                    href={link.url}
                                    className="flex items-center gap-2 text-sm hover:text-device-900"
                                  >
                                    <span className="p-1 bg-purple-100 rounded">
                                      📝
                                    </span>
                                    <div>
                                      <div className="font-medium">
                                        {link.name}
                                      </div>
                                      <div className="text-gray-500 text-xs">
                                        {link?.description}
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
