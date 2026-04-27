import { Link, Outlet } from "react-router";

export default function Layout() {
    return <main>
        <header>
            <nav style={{ "flex-direction": "row", "gap": ".5em" }}>
                <Link to="a">A</Link>
                <Link to="b">B</Link>
            </nav>
        </header>
        <Outlet />
    </main>
}