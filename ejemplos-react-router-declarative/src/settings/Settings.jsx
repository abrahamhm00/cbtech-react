import { Link } from "react-router";

export default function Settings() {
    return (
        <main>
            <Link to="/">back</Link>
            <h1>Settings</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis error vero, quis dolorum autem voluptas consequatur rem
                dolore molestias enim nesciunt, modi, inventore magni nemo?
                Facilis incidunt harum doloremque fugiat!
            </p>
            <Link to="profile">Go to profile</Link>
        </main>
    );
}
