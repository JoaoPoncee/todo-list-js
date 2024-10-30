import { useState } from "react";
import styles from "./CreateTask.module.css";
import { Task } from "./Task";
import Clipboard from "../assets/Clipboard.svg";
import Plus from "../assets/plus.svg";

export function CreateTask() {
  const [valueInput, setValueInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleCreateNewTask(event) {
    event.preventDefault();
    const id = crypto.randomUUID();
    const taskCreated = [
      ...tasks,
      {
        id,
        text: valueInput,
      },
    ];
    setTasks(taskCreated);
    setValueInput("");
  }

  function handleDeleteTask(taskId) {
    const deleteTask = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(deleteTask);
  }

  function toggleTaskCompleted(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <header className={styles.header}>
        <form onSubmit={handleCreateNewTask}>
          <input
            onChange={(e) => setValueInput(e.target.value)}
            value={valueInput}
            placeholder="Add your task"
            type="text"
            required
          />
          <button className={styles.buttonCreate} type="submit">
            Create <img src={Plus} alt="plus" />
          </button>
        </form>
      </header>
      <body>
        <div className={styles.status}>
          <p className={styles.pTaskCreate}>
            Task Created <span>{tasks.length}</span>
          </p>
          <p className={styles.pTaskCompleted}>
            Task Completed <span>{completedTasksCount} de {tasks.length}</span>
          </p>
        </div>
        <div className={styles.showTasks}>
          {tasks.length == 0 ? (
            <div className={styles.withoutTasks}>
            <div>
              <img src={Clipboard} alt="clipboard" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  content={task.text}
                  deleteTask={handleDeleteTask}
                  id={task.id}
                  toggleTaskCompleted={toggleTaskCompleted}
                />
              );
            })
          )}
        </div>
      </body>
    </div>
  );
}
