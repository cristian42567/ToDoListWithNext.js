"use client";

import { useState } from "react";

export default function Home2() {
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
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Eliminar tarea</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
