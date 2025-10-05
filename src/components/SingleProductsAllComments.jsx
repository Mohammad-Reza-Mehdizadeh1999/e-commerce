import StarRating from './ui/StarRating';

export default function SingleProductsAllComments() {
  return (

    <div className="bg-[#151515] text-gray-200 rounded-lg p-4 w-full max-w-2xl mx-auto shadow-sm border border-gray-700">
      <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
        <span>حسین حسینی</span>
        <span>3/5/1542</span>
      </div>
      <p className="text-gray-300 mb-3 leading-relaxed">بی کیفیت ترین محصولی بود که تو زندگیم خریدم لطفا دوباره موجودش کنید که بقیه هم بخرن</p>
      <div className="flex justify-start">
        <StarRating rating={4} />
      </div>
    </div>
  );
};


  

