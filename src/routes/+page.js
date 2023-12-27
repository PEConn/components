import { csvToArr } from "$lib";

export const prerender = true;

export async function load({ fetch, params }) {
    const response = await fetch('CRIMPS.csv');
	const contents = await response.text();

	return {
		components: csvToArr(contents, ",")
	};
};
