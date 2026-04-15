import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ol>
  );
}
