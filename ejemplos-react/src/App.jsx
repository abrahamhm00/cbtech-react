import { createContext, useState } from "react";
import { Link } from "react-router";
import "./index.css";

export const DebugContext = createContext(false);
export const UserContext = createContext(null);

export default function App() {
    const [debugMode, setDebugMode] = useState(true);

    return (
        <UserContext value={null}>
            <DebugContext value={debugMode}>
                <main className="py-4 px-6 flex flex-col gap-6">
                    <button onClick={() => setDebugMode((prev) => !prev)}>
                        {debugMode ? "Exit" : "Enter"}
                    </button>
                </main>
            </DebugContext>
        </UserContext>
    );
}
