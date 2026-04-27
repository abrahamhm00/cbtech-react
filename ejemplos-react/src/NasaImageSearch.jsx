import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const BASE_URL = "https://images-api.nasa.gov";

const searchImages = async (search) => {
    const response = await fetch(`${BASE_URL}/search?q=${search}&page_size=10`);
    const { collection } = await response.json();
    return [].concat(...collection.items.map((item) => item.links[0]?.href));
};

const SearchResults = ({ search }) => {
    const [links, setLinks] = useState(null);

    useEffect(() => {
        if (search !== "" && search !== null) {
            searchImages(search).then(setLinks);
        }
    }, [search]);

    if (links === null || search === null) {
        return <div className="mt-6">No results</div>;
    }
    return (
        <div className="mt-6 grid grid-cols-2">
            {links.map((link) => (
                <img key={link} src={link} alt="NASA Image" />
            ))}
        </div>
    );
};

export default function NasaImageSearch() {
    const [editingSearch, setEditingSearch] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const submit = (e) => {
        e.preventDefault();
        setSearchParams({ search: editingSearch });
        setEditingSearch("");
    };

    const search = searchParams.get("search");

    return (
        <main>
            <form
                onSubmit={submit}
                className="flex flex-row gap-2 my-4 justify-center-safe"
            >
                <input
                    type="text"
                    name="q"
                    className="border px-1.5 py-1"
                    value={editingSearch}
                    onChange={(e) => setEditingSearch(e.target.value)}
                />
                <button onClick={() => {}}>Search</button>
            </form>

            {search && <h2>Search results for {JSON.stringify(search)}</h2>}
            <SearchResults search={search} />
        </main>
    );
}
