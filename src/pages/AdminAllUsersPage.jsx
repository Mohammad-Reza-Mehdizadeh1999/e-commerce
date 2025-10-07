import { useState } from "react";
import UserInformationTableRow from "../components/UserInformationTableRow";

export default function AdminAllUsersPage() {
  const [users, setUsers] = useState([
    {
      id: "123891238912378912879",
      name: "Ali Mousavi",
      email: "Ali.mousavi@gmail.com",
      isAdmin: true,
    },
    {
      id: "12389123891237891283",
      name: "مهدی حسینی",
      email: "mahdihoseini@gmail.com",
      isAdmin: false,
    },
    {
      id: "1238912389123789128379",
      name: "شاهرخ",
      email: "Example@gmail.com",
      isAdmin: false,
    },
  ]);

  const handleUpdateUser = (id, updatedData) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...updatedData } : user))
    );
  };

  return (
    <section className="bg-black text-white p-6 min-h-screen">
      <table className="w-full border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className=" border-b border-gray-600 text-gray-300">
            <th className="pb-2">ID</th>
            <th className="pb-2">نام</th>
            <th className="pb-2">ایمیل</th>
            <th className="pb-2">ادمین</th>
            <th className="pb-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserInformationTableRow
              key={user.id}
              user={user}
              onUpdate={handleUpdateUser}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
