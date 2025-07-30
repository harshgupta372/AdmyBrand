'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

// Type assertion to fix React compatibility issues
const ResponsiveContainerWrapper = ResponsiveContainer as any;
const BarChartWrapper = BarChart as any;
const XAxisWrapper = XAxis as any;
const YAxisWrapper = YAxis as any;
const BarWrapper = Bar as any;
const CellWrapper = Cell as any;

const data = [
  { channel: 'Google Ads', performance: 85, color: '#3b82f6' },
  { channel: 'Facebook', performance: 72, color: '#8b5cf6' },
  { channel: 'Instagram', performance: 68, color: '#ec4899' },
  { channel: 'Email', performance: 91, color: '#10b981' },
  { channel: 'SEO', performance: 78, color: '#f59e0b' },
];

export function ChannelChart() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="h-full border shadow-sm hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Channel Performance</CardTitle>
            <CardDescription>Performance score by marketing channel</CardDescription>
          </CardHeader>
          <CardContent className="pt-2 sm:pt-0">
            <div className="w-full h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="animate-pulse text-muted-foreground">Loading chart...</div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="h-full border shadow-sm hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Channel Performance</CardTitle>
          <CardDescription>Performance score by marketing channel</CardDescription>
        </CardHeader>
        <CardContent className="pt-2 sm:pt-0">
          <ResponsiveContainerWrapper width="100%" height={300}>
            <BarChartWrapper data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxisWrapper
                dataKey="channel"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxisWrapper 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, "Performance"]}
                labelStyle={{ color: theme === "dark" ? "#fff" : "#000" }}
                contentStyle={{
                  backgroundColor: theme === "dark" ? "#1f2937" : "#fff",
                  border: theme === "dark" ? "1px solid #374151" : "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              />
              <BarWrapper dataKey="performance" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <CellWrapper key={`cell-${index}`} fill={entry.color} />
                ))}
              </BarWrapper>
            </BarChartWrapper>
          </ResponsiveContainerWrapper>
        </CardContent>
      </Card>
    </motion.div>
  );
}
