import React from "react";
import { motion } from "framer-motion";

const HeaderPage = ({ title, description }) => {
  return (
    <>
      <motion.p
        className="pageDescription"
        initial={{ x: "-10vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
      >
        {description}
      </motion.p>
      <motion.h3
        className="pageTitle"
        initial={{ x: "10vw", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
      >
        {title}
      </motion.h3>
    </>
  );
};

export default HeaderPage;
