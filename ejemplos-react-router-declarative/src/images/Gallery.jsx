/*

https://picsum.photos/v2/list

[
{
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
    "download_url": "https://picsum.photos/id/0/5000/3333"
},
...
]

*/

import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Gallery() {
    const [images, setImages] = useState(null);

    const loadImages = async () => {
        const response = await fetch(`https://picsum.photos/v2/list`);
        return await response.json();
    };

    useEffect(() => {
        loadImages().then(setImages);
    }, []);

    if (images === null) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <h1>Gallery</h1>
            <div className="gallery">
                {images.map((img) => (
                    <Link to={img.id}>
                        <img
                            src={`https://picsum.photos/id/${img.id}/100/100`}
                            key={img.id}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
}
