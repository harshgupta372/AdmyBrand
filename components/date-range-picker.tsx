'use client';

import * as React from 'react';
import { CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';

interface DatePickerWithRangeProps {
  className?: string;
  onDateChange?: (dateRange: DateRange | undefined) => void;
}

export function DatePickerWithRange({
  className,
  onDateChange,
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 0, 1),
    to: new Date(),
  });

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate);
    onDateChange?.(newDate);
  };

  const clearDateRange = () => {
    setDate(undefined);
    onDateChange?.(undefined);
  };

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            size="sm"
            className={cn(
              'h-9 justify-start text-left font-normal relative group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm">
                    {format(date.from, 'MMM dd')} - {format(date.to, 'MMM dd, yyyy')}
                  </span>
                  {date && (
                    <Badge 
                      variant="secondary" 
                      className="h-4 w-4 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        clearDateRange();
                      }}
                    >
                      <X className="h-2 w-2" />
                    </Badge>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm">{format(date.from, 'MMM dd, yyyy')}</span>
                  <Badge 
                    variant="secondary" 
                    className="h-4 w-4 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      clearDateRange();
                    }}
                  >
                    <X className="h-2 w-2" />
                  </Badge>
                </div>
              )
            ) : (
              <span className="text-xs sm:text-sm">Select date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 shadow-lg border-0" align="start">
          <div className="bg-white dark:bg-gray-900 rounded-lg border shadow-xl">
            <div className="p-4 border-b bg-gray-50 dark:bg-gray-800 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Select Date Range
                </h3>
                {date && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearDateRange}
                    className="h-7 px-2 text-xs hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Clear
                  </Button>
                )}
              </div>
              {date?.from && date?.to && (
                <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                  {format(date.from, 'MMMM dd, yyyy')} - {format(date.to, 'MMMM dd, yyyy')}
                </div>
              )}
            </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
            className="p-4"
          />
            <div className="p-4 border-t bg-gray-50 dark:bg-gray-800 rounded-b-lg">
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Select start and end dates
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const today = new Date();
                      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
                      handleDateChange({ from: lastMonth, to: today });
                    }}
                    className="h-7 px-3 text-xs"
                  >
                    Last 30 days
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const today = new Date();
                      const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
                      handleDateChange({ from: lastWeek, to: today });
                    }}
                    className="h-7 px-3 text-xs"
                  >
                    Last 7 days
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}