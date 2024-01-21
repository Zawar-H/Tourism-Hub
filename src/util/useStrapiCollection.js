import { useState, useEffect, use } from 'react';

const useStrapiCollection = (pluralApiId, initialFilter = "", initialSort = "", pageSize = 25) => {
    
    // collection data
    const [collection, setCollection] = useState();

    // loading state
    const [loading, setLoading] = useState(true);

    // filtering, sorting, and pagination
    const [filter, setFilter] = useState(initialFilter);
    const [sort, setSort] = useState(initialSort);
    const [page, setPage] = useState(1);

    // Fetch data from Strapi API (initially and whenever the filter changes)
    async function fetchCollection() {

        // Build URL
        const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${pluralApiId}?pagination[page]=${page}&pagination[pageSize]=${pageSize}${filter && `&filters${filter}`}${filter && `&sort=${sort}`}&populate=*`
        const res = await fetch(endpoint);
        const data = await res.json();

        // put "id" inside "attributes" for each item, return as "collection"
        const collection = data.data.map(item => {
            return {
                id: item.id,
                ...item.attributes
            };
        });

        setCollection(collection);
    }

    // Fetch data from Strapi API (initially and whenever the filter changes)
    useEffect(() => {
        setLoading(true);
        fetchCollection();
        setLoading(false);
    }, [filter, sort, page]);

    // Return values to be used by the component
    return {
        collection,
        loading,
        filter,
        setFilter,
        sort,
        setSort,
        page,
        setPage
    };
};

export default useStrapiCollection;