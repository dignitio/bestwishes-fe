import React from "react";

import { motion } from "framer-motion";

export default function Button({ className = "", children, type, ...rest }) {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 0.95 }}
      {...rest}
      type={type}
      className={`bg-primary h-10 rounded py-0 px-8 hover:bg-white hover:text-primary hover:border hover:border-primary ${className} `}
    >
      {children}
    </motion.button>
  );
}
