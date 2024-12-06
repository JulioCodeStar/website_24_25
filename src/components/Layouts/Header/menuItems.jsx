import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useGetMenuItemsQuery } from "@/store/services/menuItems/menuApi";

// Para determinar si el menu es un enlace o un dropdown
function isMenuLink(item) {
  return item.url !== undefined;
}

export default function MenuItems() {

  const { data , error, isLoadin, isFetching } = useGetMenuItemsQuery(null);

  if (error) {
    console.log('Error Details:', error);
    
    if ('status' in error) {
      // Es un error relacionado con la red o la respuesta del servidor
      console.log('Status Code:', error.status);
      if (error.data) {
        console.log('Error Data:', error.data);
      }
    } else {
      // Error genérico (e.g., un throw en la baseQuery)
      console.log('Generic Error:', error.message);
    }
  
    return <div>Error: {error.message || 'An error occurred'}</div>;
  }
  

  if (isLoadin || isFetching) return <div>Loading...</div>;
  
  const menuItems = data.data.MainMenuItems;

  return (
    <div className="hidden lg:flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              {isMenuLink(item) ? (
                <Link href={item.url} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-[18px]`}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <>
                  <NavigationMenuTrigger className="text-[18px]">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-full flex-wrap gap-8 p-6 bg-white rounded-lg shadow-md lg:w-[800px]">
                      {item.sections.map((section) => (
                        <div
                          key={section.id}
                          className="flex-1 min-w-[200px] p-2 border-r-2 last:border-r-0"
                        >
                          <Link href={section.slug}>
                            <h4 className="mb-4 text-lg font-semibold text-gray-800">
                              {section.heading}
                            </h4>
                          </Link>
                          <ul className="space-y-4">
                            {section.links.map((link) => (
                              <li key={link.id}>
                                <Link
                                  href={link.url}
                                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
                                >
                                  <span className="text-xl">🔗</span>
                                  <span>{link.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}