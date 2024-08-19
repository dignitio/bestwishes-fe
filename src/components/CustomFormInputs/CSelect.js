// import React from "react";
// import { Controller } from "react-hook-form";
// import Select, { components } from "react-select";
// import ErrorHandler from "../errorHandler/ErrorHandler";

// const customStyles = {
//   control: (base, state) => ({
//     ...base,
//     "*": {
//       boxShadow: "none !important",
//     },
//     fontSize: "14px",
//     padding: "5px",
//     borderRadius: "6px",
//     width: "auto",
//     boxShadow: "none",
//     appearance: "none",
//     borderColor: state.isFocused || state.hover ? "#271f6b" : "#cccccc",
//     "&:hover": {
//       borderColor: "#33CB98", // Set your custom hover color
//     },
//   }),
//   input: (base) => ({
//     ...base,
//     fontSize: "14px",
//     borderColor: "#33CB98",
//   }),

//   singleValue: (base) => ({
//     ...base,
//     color: "#212529",
//     borderColor: "#33CB98",
//   }),
//   valueContainer: (provided) => ({
//     ...provided,
//     overflow: "visible",
//     borderColor: "#33CB98",
//   }),
//   placeholder: (provided, state) => ({
//     ...provided,
//     position: "absolute",
//     left: (state.hasValue || state.selectProps.inputValue) && 8,
//     top: state.hasValue || state.selectProps.inputValue ? -20 : "20%",
//     background: (state.hasValue || state.selectProps.inputValue) && "white",
//     // transition: "top 0.1s, font-size 0.1s",
//     fontSize: (state.hasValue || state.selectProps.inputValue) ? "12px" : "16px", 
//     fontWeight: (state.hasValue || state.selectProps.inputValue) ? "normal" : "100", 
//     lineHeight: (state.hasValue || state.selectProps.inputValue) ? "16px" : "24px", 
//     paddingRight: (state.hasValue || state.selectProps.inputValue) && 8,
//     paddingLeft: (state.hasValue || state.selectProps.inputValue) && 8,
//     color: (state.hasValue || state.selectProps.inputValue) ? "#333333" : "#C2C9D6", // Change text color here
//   }),
//   option: (styles, { isDisabled, isSelected }) => {
//     return {
//       ...styles,
//       backgroundColor: isSelected ? "#006C33" : styles.backgroundColor,
//       color: isSelected ? "#fff" : "default",
//       cursor: isDisabled ? "not-allowed" : styles.cursor,
//     };
//   },
// };


// const CustomSelect = ({
//   options,
//   isDisabled,
//   placeholder,
//   containerClass,
//   className,
//   name,
//   control,
//   errors,
//   defaultValue,
//   required,
//   handleChange,
//   isMulti = false,
//   extraLabel,
// }) => {
//   return (
//     <div className={`flex flex-col justify-start ${containerClass}`}>
//       {extraLabel && (
//         <h1 className="text-[#4D5154] text-[18px] lg:leading-[16px] tracking-[0.03px] font-[600] mb-2">
//           {extraLabel}{" "}
//         </h1>
//       )}

//       <Controller
//         name={name}
//         control={control}
//         defaultValue={defaultValue}
//         render={({ field }) => {
//           const { onChange, name } = field;
//           return (
//             <Select
//               placeholder={placeholder}
//               classNamePrefix="react-select"
//               className={`react-select-container ${className}`}
//               options={options}
//               onChange={(newValue) => {
//                 onChange(!isMulti ? newValue?.value : newValue);
//                 if (handleChange) {
//                   handleChange(newValue, name);
//                 }
//               }}
//               isDisabled={isDisabled}
//               value={options?.find((c) => c.value === defaultValue)}
//               isClearable
//               styles={customStyles}
//               isMulti={isMulti}
//               required={required}
//             />
//           );
//         }}
//       />
//       {/* {errors && (
//         <div className="text-left ml-3">
//           <ErrorHandler errors={errors} />
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default CustomSelect;




import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import ErrorHandler from "../errorHandler/ErrorHandler";

const customStyles = {
  control: (base, state) => ({
    ...base,
    "*": {
      boxShadow: "none !important",
    },
    fontSize: "14px",
    padding: "10px",
    borderRadius: "6px",
    width: "auto",
    boxShadow: "none",
    appearance: "none",
    borderColor: state.isFocused || state.hover ? "#271f6b" : "#271f6b",
    "&:hover": {
      borderColor: "#271f6b", // Set your custom hover color
    },
  }),
  input: (base) => ({
    ...base,
    fontSize: "14px",
    borderColor: "#271f6b",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#212529",
    borderColor: "#271f6b",
  }),
  valueContainer: (provided) => ({
    ...provided,
    overflow: "visible",
    borderColor: "#271f6b",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    position: "absolute",
    left: (state.hasValue || state.selectProps.inputValue) && 8,
    top: state.hasValue || state.selectProps.inputValue ? -20 : "20%",
    background: (state.hasValue || state.selectProps.inputValue) && "white",
    fontSize: (state.hasValue || state.selectProps.inputValue) ? "12px" : "16px",
    fontWeight: (state.hasValue || state.selectProps.inputValue) ? "normal" : "100",
    lineHeight: (state.hasValue || state.selectProps.inputValue) ? "16px" : "24px",
    paddingRight: (state.hasValue || state.selectProps.inputValue) && 8,
    paddingLeft: (state.hasValue || state.selectProps.inputValue) && 8,
    color: (state.hasValue || state.selectProps.inputValue) ? "#333333" : "#C2C9D6", // Change text color here
  }),
  option: (styles, { isDisabled, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? "#006C33" : styles.backgroundColor,
    color: isSelected ? "#fff" : "default",
    cursor: isDisabled ? "not-allowed" : styles.cursor,
  }),
};

const CustomSelect = ({
  options,
  isDisabled,
  placeholder,
  containerClass,
  className,
  name,
  control,
  errors,
  defaultValue,
  required,
  handleChange,
  isMulti = false,
  extraLabel,
}) => {
  return (
    <div className={`flex flex-col justify-start ${containerClass}`}>
      {extraLabel && (
        <h1 className="text-[#4D5154] text-[18px] lg:leading-[16px] tracking-[0.03px] font-[600] mb-2">
          {extraLabel}
        </h1>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => {
          const { onChange, ...restField } = field;
          return (
            <Select
              placeholder={placeholder}
              classNamePrefix="react-select"
              className={`react-select-container ${className}`}
              options={options}
              onChange={(newValue) => {
                onChange(!isMulti ? newValue?.value : newValue);
                if (handleChange) {
                  handleChange(newValue, restField.name);
                }
              }}
              isDisabled={isDisabled}
              value={options?.find((c) => c.value === defaultValue)}
              isClearable
              styles={customStyles}
              isMulti={isMulti}
              required={required}
              {...restField}
            />
          );
        }}
      />
      {/* {errors && (
        <div className="text-left ml-3">
          <ErrorHandler errors={errors} />
        </div>
      )} */}
    </div>
  );
};

export default CustomSelect;

