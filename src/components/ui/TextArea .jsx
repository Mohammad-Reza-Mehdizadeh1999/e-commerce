import React from "react";

const TextArea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-2 text-gray-300">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-[#151515] border border-gray-700 rounded-md p-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-500 resize-none min-h-[100px]"
      />
    </div>
  );
};

export default TextArea;
