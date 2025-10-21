"use client";

import { useTasks } from "../hooks/useTasks";

export default function TaskList() {
  const { newTask, setNewTask, taskList, addTask, deleteTask, toggleComplete } =
    useTasks();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Mi To-Do List</h1>

      {/* Input y botón */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Escribe tu tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-1 rounded cursor-pointer"
        >
          Agregar
        </button>
      </div>

      {/* Lista de tareas */}
      <ul className="w-full max-w-md">
        {taskList.map((task, index) => (
          <li
            key={index}
            className={`p-2 mb-2 rounded shadow flex justify-between items-center
              ${
                task.completed
                  ? "bg-green-500 text-white"
                  : "bg-amber-700 text-black"
              }`}
          >
            <span>{task.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(index)}
                className="bg-green-700 text-white px-2 py-1 rounded cursor-pointer"
              >
                {task.completed ? "↩️" : "✅"}
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
              >
                Eliminar tarea
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
