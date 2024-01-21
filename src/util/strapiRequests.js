import axios from "axios";

const strapiRequest = async (slug) => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${slug}`
		);
		return response.data.data;
	} catch (err) {
		console.warn("Strapi connection failed", err);
	}
};

export default strapiRequest;
