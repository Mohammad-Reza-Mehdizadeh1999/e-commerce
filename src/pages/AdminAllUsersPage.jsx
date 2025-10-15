import { useEffect, useState } from "react";
import UserInformationTableRow from "../components/UserInformationTableRow";
import { getAllUsers } from "../api/requests/adminUsers";
import toast from "react-hot-toast";

export default function AdminAllUsersPage() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 12;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        setAllUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("خطا در دریافت کاربران ⚠️");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        در حال بارگذاری کاربران...
      </div>
    );

  if (!allUsers || allUsers.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        هنوز کاربری ثبت نشده است
      </div>
    );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleUpdateUser = (id, updatedData) => {
  if (updatedData === null) {
    setAllUsers((prev) => prev.filter((user) => user._id !== id));
  } else {
    setAllUsers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, ...updatedData } : user
      )
    );
  }
  };

  return (
    <section className="bg-black text-white p-6 min-h-screen">
      <table className="w-full table-fixed border-separate border-spacing-y-2 text-sm">
        <thead>
          <tr className="border-b border-gray-600 text-gray-300">
            <th className="pb-2">ID</th>
            <th className="pb-2">نام</th>
            <th className="pb-2">ایمیل</th>
            <th className="pb-2">ادمین</th>
            <th className="pb-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <UserInformationTableRow
              key={user._id || user.id}
              user={user}
              onUpdate={handleUpdateUser}
            />
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-10 gap-5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md cursor-pointer ${
            currentPage === 1
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          قبلی
        </button>

        <span className="text-gray-300">
          صفحه {currentPage} از {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md cursor-pointer ${
            currentPage === totalPages
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          بعدی
        </button>
      </div>
    </section>
  );
}
