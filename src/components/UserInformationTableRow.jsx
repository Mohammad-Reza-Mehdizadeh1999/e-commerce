import { useState } from "react";
import { FaCheck, FaTimes, FaTrash, FaEdit } from "react-icons/fa";
import Button from "./ui/Button";

export default function UserInformationTableRow({ user, onUpdate }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSave = (field) => {
    onUpdate(user._id, { [field]: field === "name" ? name : email });
    if (field === "name") setIsEditingName(false);
    if (field === "email") setIsEditingEmail(false);
  };

  return (
    <tr className="border-b border-gray-800 hover:bg-zinc-900 transition">
      {/* ID */}
      <td className="text-center text-gray-400">{user._id}</td>

      {/* نام */}
      <td className="text-center">
        {isEditingName ? (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handleSave("name")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white p-1.5 rounded"
            >
              <FaCheck />
            </button>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border border-gray-500 px-2 py-1 rounded text-white w-40"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <FaEdit
              size={16}
              className="cursor-pointer text-gray-400 hover:text-white"
              onClick={() => setIsEditingName(true)}
            />
            <span>{user.username}</span>
          </div>
        )}
      </td>

      {/* ایمیل */}
      <td className="text-center">
        {isEditingEmail ? (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handleSave("email")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white p-1.5 rounded"
            >
              <FaCheck />
            </button>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border border-gray-500 px-2 py-1 rounded text-white w-56"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <FaEdit
              size={16}
              className="cursor-pointer text-gray-400 hover:text-white"
              onClick={() => setIsEditingEmail(true)}
            />
            <span>{user.email}</span>
          </div>
        )}
      </td>

      {/* ادمین */}
      <td className="text-center">
        {user.isAdmin ? (
          <span className="text-green-500">✔</span>
        ) : (
          <span className="text-red-500">✖</span>
        )}
      </td>

      {/* عملیات */}
      <td className="py-3 text-center">
        <Button>
          <FaTrash
            size={17}
            className="text-red-400 cursor-pointer hover:text-red-500 hover:scale-110 transition duration-200"
          />
        </Button>
      </td>
    </tr>
  );
}
