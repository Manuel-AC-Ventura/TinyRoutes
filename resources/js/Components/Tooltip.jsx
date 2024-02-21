import { motion } from "framer-motion";

export const Tooltip = ({ content }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: -20 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-600 text-white p-2 mt-10 rounded text-center mx-auto md:w-80 sm:w-64 w-48"
    >
      {content}
    </motion.p>
  );
};