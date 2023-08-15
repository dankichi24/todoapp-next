import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4x1 font-bold text-gray-800 -mt-32">
        Next.js 13 Todo App
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
