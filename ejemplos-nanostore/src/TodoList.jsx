import { $todos, todoSetChecked } from "./todos"
import { useStore } from "@nanostores/react"

function TodoItem({ item }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={item.done}
                onChange={(e) => todoSetChecked(item.id, e.target.checked)}
            />
            <span className="ml-2">{item.what}</span>
        </div>
    )
}

export default function TodoList() {
    const todos = useStore($todos)
    return (
        <div>
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </div>
    )
}
