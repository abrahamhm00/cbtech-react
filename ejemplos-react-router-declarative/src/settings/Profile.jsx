import { Link } from "react-router";

export default function Profile() {
    return (
        <main>
            <Link to="/settings">back</Link>
            <h1>Profile</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                omnis, molestiae atque, nobis dolorem labore porro est fugiat
                exercitationem nihil ut ipsam recusandae obcaecati suscipit
                facere praesentium reiciendis sit. Quo.
            </p>
        </main>
    );
}
