import { useGetInicioQueryQuery } from "@/store/services/Inicio";

export function DataInicio() {
    const { data, error, isLoading, isFetching } = useGetInicioQueryQuery(null, {
        skip: false,
        refetchOnMountOrArgChange: false,
    });

    const inicio = data?.data?.InicioDynamic || [];
    return { inicio, error, isLoading, isFetching };
}