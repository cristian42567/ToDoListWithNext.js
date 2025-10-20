"use client";

import { useState } from "react";

type Task = {
  text: string;
  completed: boolean;
};

export default function Home() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  // Agregar tarea
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTaskList([...taskList, { text: newTask, completed: false }]);
    setNewTask("");
  };

  // TODO: Ver bien y entender esta función
  // Eliminar tarea
  const deleteTask = (indexToDelete: number) => {
    setTaskList(taskList.filter((_, index) => index !== indexToDelete));
  };

  // Marcar como completada
  const toggleComplete = (indexToToggle: number) => {
    setTaskList(
      taskList.map((task, index) =>
        index === indexToToggle ? { ...task, completed: !task.completed } : task
      )
    );
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
