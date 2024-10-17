"use client"; // Ensure to include this for hooks like useState

import { motion } from "framer-motion";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" // Background with opacity
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animate to visible
          exit={{ opacity: 0 }} // Exit animation
          transition={{ duration: 0.3 }} // Duration of the transition
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-5" // Modal styling
            initial={{ scale: 0.5 }} // Initial scale for entrance
            animate={{ scale: 1 }} // Animate to full scale
            exit={{ scale: 0.5 }} // Exit scale
            transition={{ duration: 0.3 }} // Duration for scaling
          >
            {/* Close Icon with animation */}
            <motion.button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              whileHover={{ scale: 1.1 }} // Scale on hover
              whileTap={{ scale: 0.9 }} // Scale on tap
              transition={{ duration: 0.2 }} // Duration for hover/tap
            >
              ✖ {/* Close Icon */}
            </motion.button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
