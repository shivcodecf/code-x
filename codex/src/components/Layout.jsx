import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
      
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{
    type: "spring",
    stiffness: 80,
    damping: 18
  }}
>
  {/* content */}
  <Outlet/>
</motion.div>

    </AnimatePresence>
  );
};

export default Layout;
