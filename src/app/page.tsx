"use client";

import { useState } from "react";

export default function Home() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTaskList([...taskList, newTask]);
    setNewTask("");
  };

  const deleteTask = (indexToDelete: number) => {
    setTaskList(taskList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Mi To-Do List</h1>
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
        {taskList.map((tarea, index) => (
          <li
            key={index}
            className="bg-amber-700 p-2 mb-2 rounded shadow flex justify-between"
          >
            <span>{tarea}</span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
            >
              Eliminar tarea
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
