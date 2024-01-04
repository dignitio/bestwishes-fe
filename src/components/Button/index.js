import React from "react";

export default function Button({ className ="", children, type, ...rest }) {
  return (

    <button {...rest} type={type} className={`bg-primary text-white h-10 rounded py-0 px-16 ${className} `}>

      {children}
    </button>
  );
}
