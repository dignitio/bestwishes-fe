import React from "react";

export default function OauthButton({ className = "", children, type, ...props }) {
  return (
    <button
      {...props}
      type={type}
      className={`bg-OauthButton flex justify-center items-center gap-4  text-black h-10 rounded py-0 px-16 ${className} `}
    >
      {children}
    </button>
  );
}
