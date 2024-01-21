import { useState, useEffect } from "react";

const useStrapiCollectionEntry = (pluralApiId, entryId) => {

    if (!pluralApiId) {
        // throw error if no pluralApiId is provided
        throw new Error("useStrapiCollectionEntry requires a pluralApiId");
    }

	if (!entryId) {
		// throw error if no entryId is provided
		throw new Error("useStrapiCollectionEntry requires an entryId");
	}

	// collection data
	const [entry, setEntry] = useState();

	// loading state
	const [loading, setLoading] = useState(true);

	// Fetch data from Strapi API (initially and whenever the filter changes)
	async function fetchCollectionEntry() {
		// Build URL
		const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${pluralApiId}/${entryId}?populate=*`;
		const res = await fetch(endpoint);
		const data = await res.json();

        const entry = {
            id: data.data.id,
            ...data.data.attributes
        };

		setEntry(entry);
	}

	// Fetch data from Strapi API (initially and whenever the filter changes)
	useEffect(() => {
        setLoading(true);
        fetchCollectionEntry();
        setLoading(false);
    }, []);
        

	// Return values to be used by the component
	return {
		entry,
		loading,
	};
};

export default useStrapiCollectionEntry;