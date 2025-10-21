import { useEffect, useState } from "react";

type Task = {
  text: string;
  completed: boolean;
};

export function useTasks() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  // Cargar las tareas desde localStorage
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  // Guardar tareas desde localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  // Agregar tarea
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTaskList([...taskList, { text: newTask, completed: false }]);
    setNewTask("");
  };

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
  return {
    newTask,
    setNewTask,
    taskList,
    addTask,
    deleteTask,
    toggleComplete,
  };
}
