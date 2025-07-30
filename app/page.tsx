'use client';

import { motion } from 'framer-motion';
import * as React from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { MetricCard } from '@/components/metric-card';
import { RevenueChart } from '@/components/revenue-chart';
import { ChannelChart } from '@/components/channel-chart';
import { TrafficChart } from '@/components/traffic-chart';
import { DataTable } from '@/components/data-table';
import { PerformanceInsights } from '@/components/performance-insights';
import { DollarSign, Users, Target, TrendingUp } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';

export default function Page() {
  const [dateRange, setDateRange] = React.useState<any>(null);
  const [filters, setFilters] = React.useState<any>({});
  const [metrics, setMetrics] = React.useState({
    revenue: 127500,
    users: 8432,
    conversions: 2156,
    growth: 12.3
  });
  
  // Sample export data
  const exportData = [
    { metric: 'Total Revenue', value: '$127,500', change: '+12.5%' },
    { metric: 'Active Users', value: '8,432', change: '+8.2%' },
    { metric: 'Conversions', value: '2,156', change: '+15.3%' },
    { metric: 'Growth Rate', value: '12.3%', change: '+2.1%' },
  ];

  const handleDateRangeChange = (newDateRange: any) => {
    setDateRange(newDateRange);
    // Here you would typically fetch new data based on the date range
    console.log('Date range changed:', newDateRange);
  };

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Filters changed:', newFilters);
  };

  // Simulate real-time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        revenue: prev.revenue + Math.floor(Math.random() * 1000) - 500,
        users: prev.users + Math.floor(Math.random() * 100) - 50,
        conversions: prev.conversions + Math.floor(Math.random() * 20) - 10,
        growth: Math.max(0, prev.growth + (Math.random() * 2 - 1))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader 
        onDateRangeChange={handleDateRangeChange}
        onFiltersChange={handleFiltersChange}
        exportData={exportData}
      />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8"
      >
        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <MetricCard
            title="Total Revenue"
            value={`$${metrics.revenue.toLocaleString()}`}
            change="+12.5%"
            trend="up"
            icon={<DollarSign className="h-4 w-4 text-blue-500" />}
            index={0}
          />
          <MetricCard
            title="Active Users"
            value={metrics.users.toLocaleString()}
            change="+8.2%"
            trend="up"
            icon={<Users className="h-4 w-4 text-purple-500" />}
            index={1}
          />
          <MetricCard
            title="Conversions"
            value={metrics.conversions.toLocaleString()}
            change="+15.3%"
            trend="up"
            icon={<Target className="h-4 w-4 text-green-500" />}
            index={2}
          />
          <MetricCard
            title="Growth Rate"
            value={`${metrics.growth.toFixed(1)}%`}
            change="+2.1%"
            trend="up"
            icon={<TrendingUp className="h-4 w-4 text-yellow-500" />}
            index={3}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <TrafficChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <ChannelChart />
          <PerformanceInsights />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Stats</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Avg. Session Duration</span>
                <span className="text-xs sm:text-sm font-medium">4m 32s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Bounce Rate</span>
                <span className="text-xs sm:text-sm font-medium">32.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Page Views</span>
                <span className="text-xs sm:text-sm font-medium">156,432</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Cost per Acquisition</span>
                <span className="text-xs sm:text-sm font-medium">$24.50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Return on Ad Spend</span>
                <span className="text-xs sm:text-sm font-medium text-green-600">4.2x</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Top Performing</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Best Channel</span>
                <span className="text-xs sm:text-sm font-medium">Email (91%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Top Campaign</span>
                <span className="text-xs sm:text-sm font-medium">Summer Sale</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Peak Hour</span>
                <span className="text-xs sm:text-sm font-medium">2-4 PM</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Goals Progress</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Monthly Revenue</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">User Acquisition</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ delay: 1.2, duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Data Table */}
        <DataTable />
        
        <Toaster />
      </motion.main>
    </div>
  );
}
