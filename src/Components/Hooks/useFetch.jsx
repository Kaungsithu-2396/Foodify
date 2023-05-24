import axios from "axios";
import { useQuery } from "@tanstack/react-query";
export default function useFetch(item, type) {
    const onError = (err) => {
        return <h1>{err}</h1>;
    };
    const fetchData = () => {
        return axios
            .get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
                    import.meta.env.VITE_REACT_APP_API_KEY
                }&${type}=${item}`
            )
            .then((res) => res.data);
    };
    const { data, isLoading, isError } = useQuery({
        queryKey: [item],
        queryFn: () => fetchData(),
        onError,
        select: (data) => {
            return data.results;
        },
        staleTime: 50000,
    });
    return { data, isLoading, isError };
}
