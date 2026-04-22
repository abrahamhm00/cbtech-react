import { useState, useEffect } from "react"

export default function StopWatch() {
    const [running, setRunning] = useState(false)
    const [time, setTime] = useState(null) // { last: ..., acum: ... }

    const reset = () => {
        setTime({ last: Date.now(), acum: 0 })
    }

    const toggleRunning = () => {
        if (running) {
            setRunning(false)
        } else {
            setRunning(true)
            setTime((prev) => ({
                last: Date.now(),
                acum: prev === null ? 0 : prev.acum,
            }))
        }
    }

    useEffect(() => {
        if (running) {
            const interval = setInterval(() => {
                setTime((prev) => ({
                    last: Date.now(),
                    acum: prev === null ? 0 : prev.acum + (Date.now() - prev.last),
                }))
            }, 20)

            return () => {
                clearInterval(interval)
            }
        }
    }, [running])

    return (
        <div className="flex flex-row gap-2 justify-center items-center">
            <span>{time === null ? 0 : time.acum}</span>
            <button onClick={toggleRunning}>{running ? "Pausar" : "Empezar"}</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
