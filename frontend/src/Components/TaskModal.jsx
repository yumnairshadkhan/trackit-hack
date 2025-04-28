import React from "react";

export default function TaskModal({ isOpen, onClose, onSubmit, newTask, onChange }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">New Task</h2>
        <input
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={onChange}
          className="w-full border p-2 mb-3"
        />
        <input
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={onChange}
          className="w-full border p-2 mb-3"
        />
        <input
          name="assignee"
          placeholder="Assignee"
          value={newTask.assignee}
          onChange={onChange}
          className="w-full border p-2 mb-3"
        />
        <div className="flex justify-end gap-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={onSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
}