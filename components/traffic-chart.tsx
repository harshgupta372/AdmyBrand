'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Type assertion to fix React compatibility issues
const ResponsiveContainerWrapper = ResponsiveContainer as any;
const PieChartWrapper = PieChart as any;
const PieWrapper = Pie as any;
const CellWrapper = Cell as any;
const TooltipWrapper = Tooltip as any;
const LegendWrapper = Legend as any;

const data = [
  { name: 'Direct', value: 40, color: '#3B82F6' },
  { name: 'Social', value: 25, color: '#8B5CF6' },
  { name: 'Search', value: 20, color: '#10B981' },
  { name: 'Email', value: 15, color: '#F59E0B' },
];

export function TrafficChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-2 sm:pb-6">
        <CardTitle className="text-lg font-semibold">Traffic Sources</CardTitle>
      </CardHeader>
      <CardContent className="pt-2 sm:pt-0">
        <ResponsiveContainerWrapper width="100%" height={250} className="sm:!h-[300px]">
          <PieChartWrapper>
            <PieWrapper
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              className="sm:!inner-radius-[60px] sm:!outer-radius-[100px]"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <CellWrapper key={`cell-${index}`} fill={entry.color} />
              ))}
            </PieWrapper>
            <TooltipWrapper 
              formatter={(value: number) => [`${value}%`, 'Traffic']}
              contentStyle={{ 
                border: 'none', 
                borderRadius: '8px', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
            />
            <LegendWrapper 
              verticalAlign="bottom"
              height={30}
              iconType="circle"
              wrapperStyle={{ fontSize: '12px' }}
            />
          </PieChartWrapper>
        </ResponsiveContainerWrapper>
      </CardContent>
    </Card>
    </motion.div>
  );
}