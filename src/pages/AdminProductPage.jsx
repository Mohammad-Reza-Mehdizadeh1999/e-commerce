import { useEffect, useState } from "react";
import AdminProductCard from "../components/AdminProductCard";
import { getAllProductsPagination } from "../api/requests/products";
import toast from "react-hot-toast";

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [size] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getAllProductsPagination(size, page);

        setProducts(data.products);
        setTotalPages(data.total || 1);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("خطا در دریافت محصولات!");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, size]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <AdminProductCard key={product.id} {...product} />
        ))}{" "}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded-md border border-pink-600 transition-all ${
            page === 1
              ? "text-gray-500 border-gray-600 cursor-not-allowed"
              : "hover:bg-pink-600 hover:text-white"
          }`}
        >
          قبلی
        </button>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={index}
                onClick={() => handlePageChange(pageNumber)}
                className={`w-9 h-9 rounded-md text-sm font-medium transition-all ${
                  page === pageNumber
                    ? "bg-pink-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-md border border-pink-600 transition-all ${
            page === totalPages
              ? "text-gray-500 border-gray-600 cursor-not-allowed"
              : "hover:bg-pink-600 hover:text-white"
          }`}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export default AdminProductPage;
