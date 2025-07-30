'use client';

import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  channel: string;
  status: 'Active' | 'Paused' | 'Completed';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpc: number;
}

const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale Campaign',
    channel: 'Google Ads',
    status: 'Active',
    budget: 5000,
    spent: 3750,
    impressions: 125000,
    clicks: 2500,
    conversions: 125,
    ctr: 2.0,
    cpc: 1.50,
  },
  {
    id: '2',
    name: 'Brand Awareness Drive',
    channel: 'Facebook',
    status: 'Active',
    budget: 3000,
    spent: 2100,
    impressions: 89000,
    clicks: 1780,
    conversions: 89,
    ctr: 2.0,
    cpc: 1.18,
  },
  {
    id: '3',
    name: 'Holiday Promotion',
    channel: 'Instagram',
    status: 'Paused',
    budget: 4500,
    spent: 4500,
    impressions: 156000,
    clicks: 3120,
    conversions: 187,
    ctr: 2.0,
    cpc: 1.44,
  },
  {
    id: '4',
    name: 'Newsletter Signup',
    channel: 'Email',
    status: 'Active',
    budget: 1200,
    spent: 850,
    impressions: 45000,
    clicks: 2250,
    conversions: 338,
    ctr: 5.0,
    cpc: 0.38,
  },
  {
    id: '5',
    name: 'SEO Content Push',
    channel: 'SEO',
    status: 'Active',
    budget: 2500,
    spent: 1875,
    impressions: 67000,
    clicks: 2010,
    conversions: 134,
    ctr: 3.0,
    cpc: 0.93,
  },
];

export function DataTable() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortField, setSortField] = React.useState<keyof Campaign>('name');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.channel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  const totalPages = Math.ceil(sortedCampaigns.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCampaigns = sortedCampaigns.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (field: keyof Campaign) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getStatusBadge = (status: Campaign['status']) => {
    const variants = {
      Active: 'default',
      Paused: 'secondary',
      Completed: 'outline',
    } as const;
    
    return (
      <Badge variant={variants[status]} className="text-xs">
        {status}
      </Badge>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <CardTitle className="text-lg font-semibold">Campaign Performance</CardTitle>
          <div className="relative w-full sm:w-48 lg:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-9"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[150px]">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('name')}
                    className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
                  >
                    Campaign
                    <ArrowUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </TableHead>
                <TableHead className="min-w-[100px]">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('channel')}
                    className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
                  >
                    Channel
                    <ArrowUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </TableHead>
                <TableHead className="min-w-[80px]">Status</TableHead>
                <TableHead className="text-right min-w-[100px]">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('budget')}
                    className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
                  >
                    Budget
                    <ArrowUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right min-w-[100px] hidden sm:table-cell">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('conversions')}
                    className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
                  >
                    Conversions
                    <ArrowUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right min-w-[80px]">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort('ctr')}
                    className="h-auto p-0 font-semibold hover:bg-transparent text-xs sm:text-sm"
                  >
                    CTR
                    <ArrowUpDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {paginatedCampaigns.map((campaign, index) => (
                  <motion.tr
                    key={campaign.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
                  >
                  <TableCell className="font-medium text-xs sm:text-sm">{campaign.name}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{campaign.channel}</TableCell>
                  <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                  <TableCell className="text-right text-xs sm:text-sm">${campaign.budget.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-medium text-xs sm:text-sm hidden sm:table-cell">{campaign.conversions}</TableCell>
                  <TableCell className="text-right text-xs sm:text-sm">{campaign.ctr.toFixed(1)}%</TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 pt-4 border-t space-y-2 sm:space-y-0">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, sortedCampaigns.length)} of {sortedCampaigns.length} campaigns
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 sm:mr-1" />
              Previous
            </Button>
            <span className="text-xs sm:text-sm font-medium px-2">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4 sm:ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
}