import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from './useIsMobile'; // Make sure to import your hook

const MotionDiv = ({ children, ...props }) => {
  const isMobile = useIsMobile();
  return isMobile ? <div {...props}>{children}</div> : <motion.div {...props}>{children}</motion.div>;
};

export default MotionDiv;
