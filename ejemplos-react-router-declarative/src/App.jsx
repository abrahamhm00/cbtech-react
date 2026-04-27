import { useState } from "react";
import { Link } from "react-router";

function App() {
    return (
        <main>
            <h1>App</h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/a">Page A</Link>
                <Link to="/b">Page B</Link>
                <Link to="/images">Images</Link>
            </nav>
        </main>
    );
}

export default App;
