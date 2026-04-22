import Bombilla from "./Bombilla"
import "./index.css"
import NumberList from "./NumberList"
import { $darkMode, addRandomNumber, resetNumberList } from "./stores"
import { useStore } from "@nanostores/react"

/*
https://github.com/nanostores/nanostores

Observer
*/

export function App() {
    const darkMode = useStore($darkMode)
    return (
        <>
            <button onClick={() => $darkMode.set(!$darkMode.get())}>
                {darkMode ? "light" : "dark"}
            </button>
            <div className={darkMode ? "bg-black text-white" : ""}>
                <Bombilla />
                <Bombilla />
            </div>
            <NumberList />

            <button onClick={addRandomNumber}>Add number</button>
            <button onClick={resetNumberList}>Reset numbers</button>
        </>
    )
}

export default App
