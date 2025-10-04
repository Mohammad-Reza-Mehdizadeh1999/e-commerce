// import React, { useReducer } from "react";

// import "./Input.css";

// const inputReducer = (state, action) => {
//     switch(action.type) {
//         case "CHANGE": {
//             return {
//                 ...state,
//                 value: action.value,
//                 isValid: action.isValid
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }

// export default function Input(props) {

//     const [mainInput, dispatch] = useReducer(inputReducer, {
//         value: '',
//         isValid: false
//     })

//     const onChangeHandler = (event) => {
//         console.log(event.target.value);
//         dispatch({
//             type: 'CHANGE',
//             value: event.target.value,
//             isValid: true
//         })
//     }

//   const element =
//     props.element === "input" ? (
//       <input
//         type={props.type}
//         placeholder={props.placeholder}
//         className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
//         value={mainInput.value}
//         onChange={onChangeHandler}
//       />
//     ) : (
//       <textarea
//         placeholder={props.placeholder}
//         className={`${props.className} ${mainInput.isValid ? 'success' : 'error'}`}
//         onChange={onChangeHandler}
//         value={mainInput.value}
//       />
//     );

//   return <div>{element}</div>;
// }






import { useState } from "react";

export default function Input({ type = "text", label, name, value, onChange, placeholder, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  let inputType = type;

  if (type === "password") {
    inputType = showPassword ? "text" : "password";
  }
  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-medium" htmlFor={name}>{label}</label>}

      <div className="relative">
        <input
          id={name}
          name={name}      
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...rest}  
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-blue-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
