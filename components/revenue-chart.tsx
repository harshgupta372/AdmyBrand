'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 98000 },
  { month: 'Feb', revenue: 105000 },
  { month: 'Mar', revenue: 112000 },
  { month: 'Apr', revenue: 108000 },
  { month: 'May', revenue: 118000 },
  { month: 'Jun', revenue: 125000 },
  { month: 'Jul', revenue: 132000 },
  { month: 'Aug', revenue: 128000 },
  { month: 'Sep', revenue: 135000 },
  { month: 'Oct', revenue: 142000 },
  { month: 'Nov', revenue: 138000 },
  { month: 'Dec', revenue: 145000 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="pb-2 sm:pb-6">
        <CardTitle className="text-lg font-semibold flex items-center justify-between">
          Revenue Trend
          <motion.div
            className="h-2 w-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2 sm:pt-0">
        <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              className="sm:text-xs"
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              className="sm:text-xs"
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              width={40}
            />
            <Tooltip 
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
              labelStyle={{ color: '#374151' }}
              contentStyle={{ 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3B82F6" 
              strokeWidth={2}
              className="sm:stroke-[3px]"
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 4, stroke: '#3B82F6', strokeWidth: 2 }}
              className="sm:[&>circle]:r-4 sm:[&>.recharts-active-dot]:r-6"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
    </motion.div>
  );
}