import { Link, Outlet, useLocation } from "react-router";

export default function RootLayout() {
    const { pathname } = useLocation();

    const Link_ = ({ path, name }) => (
        <Link to={path} className={pathname === path ? "border-b-4" : ""}>
            {name}
        </Link>
    );

    return (
        <>
            <header>
                <nav>
                    <Link_ path="/stop-watch" name="Stop Watches" />
                    <Link_ path="/components" name="Component Gallery" />
                    <Link_ path="/todos" name="Todo list" />
                    <Link_ path="/nasa" name="NASA Image Search" />
                </nav>
            </header>
            <div className="max-w-[50em] m-auto pt-6">
                <Outlet />
            </div>
        </>
    );
}
