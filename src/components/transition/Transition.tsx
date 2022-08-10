import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const Transition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default Transition;
