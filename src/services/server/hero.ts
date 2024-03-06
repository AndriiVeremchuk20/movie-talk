import Hero from "@/src/types/hero";
import client from "./client"

export const getHeros = async () => {
	const res = await client.get<Hero[]>("/hero");
	console.log(res);

	return res.data;
}

