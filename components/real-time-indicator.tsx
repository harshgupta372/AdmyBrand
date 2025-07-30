'use client';

import { motion } from 'framer-motion';
import { Wifi } from 'lucide-react';

export function RealTimeIndicator() {
  return (
    <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Wifi className="h-4 w-4" />
      </motion.div>
      <span className="text-xs font-medium">Live</span>
    </div>
  );
}