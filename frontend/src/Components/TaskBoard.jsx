import React, { useState } from "react";
import TaskModal from "./TaskModal"; 

const initialTasks = {
  todo: [],
  inProgress: [],
  done: []
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "", assignee: "" });
  const [editingTask, setEditingTask] = useState({ column: "", index: null });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setNewTask({ title: "", description: "", assignee: "" });
    setEditingTask({ column: "", index: null });
  };

  const handleNewTaskChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const addOrUpdateTask = () => {
    if (newTask.title.trim() === "") {
      alert("Task title is required");
      return;
    }

    if (editingTask.index !== null) {
      setTasks(prev => {
        const updatedColumn = [...prev[editingTask.column]];
        updatedColumn[editingTask.index] = newTask;
        return {
          ...prev,
          [editingTask.column]: updatedColumn
        };
      });
    } else {
      setTasks(prev => ({
        ...prev,
        todo: [...prev.todo, newTask]
      }));
    }

    closeModal();
  };

  const moveTask = (from, to, index) => {
    const taskToMove = tasks[from][index];
    setTasks(prev => ({
      ...prev,
      [from]: prev[from].filter((_, i) => i !== index),
      [to]: [...prev[to], taskToMove]
    }));
  };

  const deleteTask = (column, index) => {
    setTasks(prev => ({
      ...prev,
      [column]: prev[column].filter((_, i) => i !== index)
    }));
  };

  const editTask = (column, index) => {
    const task = tasks[column][index];
    setNewTask(task);
    setEditingTask({ column, index });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Task Board</h1>
        <button
          className="bg-[#0f172a] text-white py-2 px-4 rounded hover:bg-blue-900"
          onClick={openModal}
        >
          + New Task
        </button>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={addOrUpdateTask}
        newTask={newTask}
        onChange={handleNewTaskChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Column
          title="To Do"
          tasks={tasks.todo}
          color="purple"
          onMoveRight={(index) => moveTask('todo', 'inProgress', index)}
          onDelete={(index) => deleteTask('todo', index)}
          onEdit={(index) => editTask('todo', index)}
        />

        <Column
          title="In Progress"
          tasks={tasks.inProgress}
          color="blue"
          onMoveRight={(index) => moveTask('inProgress', 'done', index)}
          onDelete={(index) => deleteTask('inProgress', index)}
          onEdit={(index) => editTask('inProgress', index)}
        />

        <Column
          title="Done"
          tasks={tasks.done}
          color="green"
          onDelete={(index) => deleteTask('done', index)}
          onEdit={(index) => editTask('done', index)}
        />
      </div>
    </div>
  );
}

function Column({ title, tasks, color, onMoveRight, onDelete, onEdit }) {
  return (
    <div className={`bg-${color}-100 p-4 rounded-lg`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="bg-white rounded-full px-2">{tasks.length}</span>
      </div>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">No tasks</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="bg-white p-4 rounded-lg mb-4 shadow-md border">
            <h3 className="font-bold mb-2">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{task.description}</p>
            <div className="flex justify-between items-center">
              <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">{task.assignee}</span>
              <div className="flex gap-2">
                <button onClick={() => onEdit(index)}>✏️</button>
                <button onClick={() => onDelete(index)}>🗑️</button>
                {onMoveRight && (
                  <button
                    className="bg-black text-white rounded p-1"
                    onClick={() => onMoveRight(index)}
                  >
                    &gt;
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}