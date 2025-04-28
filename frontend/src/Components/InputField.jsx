import React from 'react'

export default function InputField({ forAtt, label, type, id, name, onChangeFunction }) {
  return (
    <div className="relative mb-4">
      <label htmlFor={forAtt} className="leading-7 text-sm text-gray-600">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChangeFunction}
        className="w-full bg-white rounded border border-gray-300 focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  )
}