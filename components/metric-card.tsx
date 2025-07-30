'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from '@/components/animated-counter';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon?: React.ReactNode;
  className?: string;
  index?: number;
}

export function MetricCard({ title, value, change, trend, icon, className, index = 0 }: MetricCardProps) {
  // Extract numeric value for animation
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^\$/) ? '$' : '';
  const suffix = value.match(/%$/) ? '%' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className={cn("hover:shadow-lg transition-all duration-300 group", className)}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 truncate">{title}</p>
          {icon && (
            <motion.div 
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
              whileHover={{ rotate: 5 }}
            >
              {icon}
            </motion.div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            <AnimatedCounter 
              end={numericValue} 
              prefix={prefix} 
              suffix={suffix}
              decimals={suffix === '%' ? 1 : 0}
            />
          </p>
          <div className="flex items-center space-x-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {trend === 'up' ? (
                <ArrowUpIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
              ) : (
                <ArrowDownIcon className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 flex-shrink-0" />
              )}
            </motion.div>
            <span className={cn(
              "text-xs sm:text-sm font-medium",
              trend === 'up' ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            )}>
              {change}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">vs last month</span>
          </div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}