"use client";

import { useState } from "react";

type Task = {
  text: string;
  completed: boolean;
};

export default function Home2() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTaskList([...taskList, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (indexToDelete: number) => {
    setTaskList(taskList.filter((_, index) => index !== indexToDelete));
  };

  const toggleComplete = (indexToToggle: number) => {
    setTaskList(
      taskList.map((task, index) =>
        index === indexToToggle ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main>
      <h1>Prueba mia</h1>

      <input
        type="text"
        placeholder="Escribe aquí tu tarea..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Agregar tarea</button>
      <ul>
        {taskList.map((task, index) => (
          <li
            key={index}
            className={`p-2 mb-2 rounded shadow flex justify-between items-center
    ${task.completed ? "bg-green-500 text-white" : "bg-amber-700 text-black"}`}
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
