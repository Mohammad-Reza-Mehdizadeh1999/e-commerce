import StarRating from "./ui/StarRating";

export default function SingleProductsAllComments({ product }) {
  const allComments = product.reviews;

  console.log(allComments);

  if (allComments.length === 0) {
    return (
      <p className="col-span-3 text-center text-pink-500">
        کامنتی برای این محصول ثبت نشده است
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {allComments.map((comment, index) => (
        <div
          key={index}
          className="bg-[#151515] text-gray-200 rounded-lg p-4 w-full max-w-2xl mx-auto shadow-sm border border-gray-700"
        >
          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <span>{comment.name || "حسین حسینی"}</span>
            <span>
              {new Date(comment.updatedAt).toLocaleDateString("en-US")}
            </span>
          </div>
          <p className="text-gray-300 mb-3 leading-relaxed">
            {comment.comment}
          </p>
          <div className="flex justify-start">
            <StarRating rating={comment.rating || 4} />
          </div>
        </div>
      ))}
    </div>
  );
}
