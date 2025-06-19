// src/components/PageWrapper.jsx
import { motion } from "framer-motion";

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.0 }} // slight pause
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
