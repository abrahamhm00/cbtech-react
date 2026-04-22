import { $numberList } from "./stores"
import { useStore } from "@nanostores/react"

export default function NumberList() {
    const numberList = useStore($numberList)

    return (
        <div className="border grid grid-cols-10 p-4 gap-4">
            {numberList.map((n, i) => (
                <div
                    key={i}
                    className="aspect-square border border-gray-300 flex flex-row justify-center items-center rounded-full text-2xl"
                >
                    {n}
                </div>
            ))}
        </div>
    )
}
