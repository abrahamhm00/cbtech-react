import { atom } from "nanostores"
import { v7 as randomUUIDv7 } from "uuid"

export const $todos = atom([
    { what: "Fregar los platos", done: false, id: randomUUIDv7() },
    { what: "Preparar React Router", done: false, id: randomUUIDv7() },
])

export const todoAdd = (what) => {
    $todos.set([...$todos.get(), { what, done: false, id: randomUUIDv7() }])
}

export const todoSetChecked = (id, checked) => {
    $todos.set(
        $todos.get().map((item) => ({
            ...item,
            done: id === item.id ? checked : item.done,
        })),
    )
}
