'use client';

import { motion } from 'framer-motion';
import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/theme-toggle';
import { DatePickerWithRange } from '@/components/date-range-picker';
import { ExportButton } from '@/components/export-button';
import { RealTimeIndicator } from '@/components/real-time-indicator';
import { AdvancedFilters } from '@/components/advanced-filters';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface DashboardHeaderProps {
  onDateRangeChange?: (dateRange: any) => void;
  onFiltersChange: (filters: any) => void;
  exportData?: any[];
}

export function DashboardHeader({ onDateRangeChange, onFiltersChange, exportData }: DashboardHeaderProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold text-sm">AD</span>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  ADmyBRAND
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Insights
                </p>
              </div>
            </motion.div>
            <RealTimeIndicator />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-48 xl:w-64 h-9"
                />
              </div>
              <AdvancedFilters onFiltersChange={onFiltersChange} />
              <DatePickerWithRange onDateChange={onDateRangeChange} />
              <ExportButton data={exportData} filename="admybrand-analytics" />
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search..."
                      className="pl-10 h-9"
                    />
                  </div>
                  <AdvancedFilters onFiltersChange={onFiltersChange} />
                  <DatePickerWithRange onDateChange={onDateRangeChange} />
                  <ExportButton data={exportData} filename="admybrand-analytics" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}