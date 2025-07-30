# 📊 ADmyBRAND Insights - Analytics Dashboard

A modern, responsive analytics dashboard built for digital marketing agencies using Next.js 14, TypeScript, and shadcn/ui. Features real-time data visualization, interactive charts, and a beautiful dark/light mode interface.

![Dashboard Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center)

## ✨ Features

### 🎯 Core Analytics
- **Key Metrics Overview** - Revenue, Active Users, Conversions, Growth Rate
- **Interactive Charts** - Line charts, bar charts, and donut charts with Recharts
- **Real-time Updates** - Live data simulation with smooth animations
- **Performance Insights** - AI-powered recommendations and alerts

### 📊 Data Management
- **Advanced Data Table** - Sorting, filtering, pagination, and search
- **Export Functionality** - CSV and JSON export with toast notifications
- **Advanced Filters** - Multi-criteria filtering by channel, status, and metrics
- **Date Range Picker** - Beautiful calendar interface with preset options

### 🎨 User Experience
- **Responsive Design** - Mobile-first approach, perfect on all devices
- **Dark/Light Mode** - Smooth theme switching with system preference detection
- **Smooth Animations** - Framer Motion micro-interactions and hover effects
- **Loading States** - Beautiful skeleton loaders for better UX

### 🚀 Technical Excellence
- **Modern Stack** - Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Component Architecture** - Reusable, well-structured components
- **Performance Optimized** - Efficient rendering and smooth animations
- **Accessibility** - ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Notifications**: Sonner

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/admybrand-insights.git
   cd admybrand-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── dashboard-header.tsx # Header with navigation and controls
│   ├── metric-card.tsx      # Animated metric display cards
│   ├── revenue-chart.tsx    # Line chart for revenue trends
│   ├── channel-chart.tsx    # Bar chart for channel performance
│   ├── traffic-chart.tsx    # Donut chart for traffic sources
│   ├── data-table.tsx       # Advanced data table with features
│   ├── performance-insights.tsx # AI-powered insights panel
│   ├── advanced-filters.tsx # Multi-criteria filtering system
│   ├── date-range-picker.tsx # Calendar date range selector
│   ├── export-button.tsx    # Data export functionality
│   ├── animated-counter.tsx # Count-up animation component
│   ├── real-time-indicator.tsx # Live data indicator
│   ├── theme-toggle.tsx     # Dark/light mode switcher
│   └── loading-skeleton.tsx # Loading state components
├── lib/
│   └── utils.ts             # Utility functions
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Main actions and highlights
- **Secondary**: Purple (#8B5CF6) - Secondary actions and accents  
- **Success**: Green (#10B981) - Positive metrics and success states
- **Warning**: Yellow (#F59E0B) - Alerts and warnings
- **Error**: Red (#EF4444) - Error states and negative metrics

### Typography
- **Font Family**: Inter (Google Fonts)
- **Heading Scale**: 2xl, xl, lg, base
- **Body Text**: sm, xs for secondary information
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Spacing System
- **Base Unit**: 8px
- **Scale**: 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px)

## 📊 Sample Data

The dashboard includes realistic sample data for:
- **Revenue Trends**: 12 months of revenue data ($98k - $145k range)
- **Marketing Channels**: Google Ads, Facebook, Instagram, Email, SEO
- **Traffic Sources**: Direct (40%), Social (25%), Search (20%), Email (15%)
- **Campaign Performance**: 5 sample campaigns with detailed metrics
- **User Demographics**: Active users, conversions, growth rates

## 🔧 Customization

### Adding New Metrics
1. Update the metrics state in `app/page.tsx`
2. Add new MetricCard components with appropriate icons
3. Update export data structure if needed

### Adding New Charts
1. Create new chart component in `components/`
2. Import and add to the dashboard grid
3. Ensure responsive design with proper breakpoints

### Modifying Theme
1. Update CSS variables in `app/globals.css`
2. Modify Tailwind config in `tailwind.config.ts`
3. Test both light and dark modes

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px (2-column grid)
- **Tablet**: 768px - 1023px (flexible grid)
- **Desktop**: 1024px+ (full 4-column grid)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Recharts** for powerful chart components
- **Framer Motion** for smooth animations
- **Lucide React** for consistent iconography
- **Vercel** for inspiration on modern dashboard design

## 📞 Contact

**Your Name** - your.email@example.com

Project Link: [https://github.com/yourusername/admybrand-insights](https://github.com/yourusername/admybrand-insights)

---

⭐ **Star this repository if you found it helpful!**