import { useParams, useSearchParams } from "react-router";

export default function Image() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();

    return (
        <main>
            <pre>{JSON.stringify(searchParams.getAll("hola"), null, 2)}</pre>
            <img
                src={`https://picsum.photos/id/${id}/1000/750`}
                alt="Picsum photo"
            />
        </main>
    );
}
