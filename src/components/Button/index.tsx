import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  type = "button",
  ...rest
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 0.95 }}
      {...(rest as any)}
      className={`bg-primary h-10 rounded py-0 px-8 hover:bg-white hover:text-primary hover:border hover:border-primary ${className} `}
    >
      {children}
    </motion.button>
  );
};

export default Button;
