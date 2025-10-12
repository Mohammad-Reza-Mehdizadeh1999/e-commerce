
const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`border-4 w-12 h-12 border-t-transparent rounded-full animate-spin border-pink-500`}
      ></div>
    </div>
  );
};

export default Spinner;
