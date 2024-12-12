import { useGetMenuItemsQuery } from "@/store/services/menuItems/menuApi";
import { useMediaQuery } from './useMedia'

export function useMenuItem() {
    const isLg = useMediaQuery("(min-width: 1024px)");
    const { data, error, isLoading, isFetching } = useGetMenuItemsQuery(null, {
        skip: false,
        refetchOnMountOrArgChange: false,
    });

    const menuItems = data?.data?.MainMenuItems || [];
    return { menuItems, error, isLoading, isFetching, isLg };
}