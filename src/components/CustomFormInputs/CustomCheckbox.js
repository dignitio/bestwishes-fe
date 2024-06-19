import { useField } from "formik";
import React from "react";

export default function CustomCheckbox({ text, accent, ...props }) {
  const [field, meta] = useField({ ...props });

  // Determine the accent color based on the prop
  let accentColor = "";
  switch (accent) {
    case "black":
      accentColor = "text-[#000000]";
      break;
    case "blue":
      accentColor = "text-blue-500";
      break;
    case "red":
      accentColor = "text-red-500";
      break;
    default:
      accentColor = "text-blue-500"; // Default to blue if accent prop is not recognized
      break;
  }
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id} className="checkbox flex gap-1 items-center text-sm">
        <input
          id={props.id} // Set the id attribute for the input field
          {...field}
          {...props}
          className={`${
            meta.touched && meta.error ? "border-errorColor" : "border-gray-300"
          } border  border focus:border-${accent}-500 focus:ring-${accent}-200 rounded-md p-2 outline-none`}
          type="checkbox"
        />
        {text}
      </label>
      <span>
        {meta.touched && meta.error && <div className="text-errorColor text-xs">{meta.error}</div>}
      </span>
    </div>
  );
}
