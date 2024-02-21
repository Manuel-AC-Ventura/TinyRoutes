import { Tooltip } from "./Tooltip";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Shortened = ({ shortened }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shortened);
    setShowTooltip(true);
  };

  useEffect(() => {
    let timeout;
    if (showTooltip) {
      timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [showTooltip]);

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 30 }}
      className="w-full md:w-2/3 lg:w-1/2 mx-auto relative text-center text-white"
    >
      <span className="block mb-2 md:inline-block md:mr-2">Link encurtado:</span>
      <span 
        className="text-blue-400 cursor-pointer relative"
        onClick={handleCopyToClipboard}
      >
        {shortened}
        {showTooltip && <Tooltip content="Link copiado para a área de transferência!" />}
      </span>
    </motion.div> 
  )
}
