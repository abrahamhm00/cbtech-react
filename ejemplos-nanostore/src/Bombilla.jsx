import { atom } from "nanostores"
import { useStore } from "@nanostores/react"

const $encendida = atom(false)

export default function Bombilla() {
    const encendida = useStore($encendida)

    return (
        <div
            className={
                "w-16 h-16 mt-4 border rounded " +
                "flex flex-row justify-center items-center " +
                "cursor-pointer hover:bg-gray-200 select-none"
            }
            onClick={() => $encendida.set(!$encendida.get())}
        >
            {encendida ? "on💡" : "off"}
        </div>
    )
}
