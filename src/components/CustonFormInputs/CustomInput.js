import { useField } from "formik";
import React from "react";
import { ReactComponent as Eye } from "../../assets/eye.svg";
import { ReactComponent as EyeSlash } from "../../assets/eye-slash.svg";

export default function CustomInput({ label, type, obscured, ...props }) {
  const [field, meta] = useField(props);
  const [viewPassword, setViewPassword] = React.useState(false);
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <div className="flex flex-col w-full">
      <label className="text-[#1E1B1A] font-medium text-lg " htmlFor={props.id}>
        {label}
      </label>
      <div className="relative">
        <input
          id={props.id}
          {...field}
          {...props}
          type={viewPassword ? "text" : type}
          className={` w-full border text-[#8593AD]   ${
            meta.touched && meta.error ? "border-primary" : "border-[#8593AD]"
          }  rounded-md p-2 outline-none`}
          style={{ appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none' }}
        />
        {obscured && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={handleViewPassword}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleViewPassword();
              }
            }}
            role="button"
            tabIndex={0}
          >
            {viewPassword ? <Eye /> : <EyeSlash />}
          </div>
        )}
      </div>
      {meta.touched && meta.error && <div className="text-xs text-primary mt-1">{meta.error}</div>}
    </div>
  );
}
