const RadioInput = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="accent-white ml-1.5"
      />
      <span>{label}</span>
    </label>
  );
};

export default RadioInput;
