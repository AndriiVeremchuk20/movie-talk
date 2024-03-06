import {useQuery} from "@tanstack/react-query"
import {getHeros} from "../services/server/hero";

export const useHeros = () => {
	const {data, error, isPending} = useQuery({queryFn: getHeros, queryKey: ["heros"]});
	return {data, error, isPending};
}
