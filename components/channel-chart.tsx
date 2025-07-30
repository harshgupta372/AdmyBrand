'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { channel: 'Google Ads', performance: 85, color: '#3B82F6' },
  { channel: 'Facebook', performance: 72, color: '#8B5CF6' },
  { channel: 'Instagram', performance: 68, color: '#EC4899' },
  { channel: 'Email', performance: 91, color: '#10B981' },
  { channel: 'SEO', performance: 79, color: '#F59E0B' },
];

export function ChannelChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-2 sm:pb-6">
        <CardTitle className="text-lg font-semibold">Channel Performance</CardTitle>
      </CardHeader>
      <CardContent className="pt-2 sm:pt-0">
        <ResponsiveContainer width="100%" height={250} className="sm:!h-[300px]">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="channel" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              className="sm:text-xs"
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              className="sm:text-xs"
              width={30}
            />
            <Tooltip 
              formatter={(value: number) => [`${value}%`, 'Performance']}
              labelStyle={{ color: '#374151' }}
              contentStyle={{ 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
            />
            <Bar 
              dataKey="performance" 
              radius={[4, 4, 0, 0]}
              fill="#3B82F6"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
    </motion.div>
  );
}