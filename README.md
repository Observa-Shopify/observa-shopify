# Observa - Shopify Performance Monitoring

A modern SaaS website for Observa, a Shopify app that monitors web vitals, tracks conversions, and sends intelligent alerts.

## Features

- **Real-time Web Vitals Monitoring**: Track Core Web Vitals (LCP, FID, CLS) and other performance metrics
- **Conversion Drop Alerts**: Get instant notifications when conversion rates drop below thresholds
- **Multi-channel Notifications**: Email, WhatsApp, Slack, and more
- **Performance Analytics**: Comprehensive dashboard with insights and trends
- **Custom Alert Thresholds**: Set personalized performance benchmarks
- **Revenue Protection**: Intelligent monitoring to protect your store's revenue

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd observa-shopify
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
observa-shopify/
├── app/
│   ├── api/          # API routes
│   ├── dashboard/    # Dashboard page
│   ├── login/        # Login page
│   ├── signup/       # Signup page
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Homepage
├── components/       # Reusable components (future)
├── public/          # Static assets
└── ...config files
```

## Pages

- **Homepage** (`/`): Landing page with features, pricing, and CTA
- **Login** (`/login`): User authentication
- **Signup** (`/signup`): User registration with free trial
- **Dashboard** (`/dashboard`): Performance monitoring interface

## Key Features Highlighted

### Performance Monitoring
- Core Web Vitals tracking (LCP, FID, CLS, FCP, INP, TTFB)
- Real-time performance metrics
- Historical data and trends
- Performance score calculation

### Alert System
- Conversion rate drop detection
- Performance threshold monitoring
- Multi-channel notifications
- Custom alert configuration

### Analytics Dashboard
- Revenue impact analysis
- Performance trend visualization
- Alert management
- Team collaboration features

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue gradient (sky blue variations)
- Secondary: Gray scale
- Success: Green
- Warning: Yellow/Orange  
- Danger: Red

### Fonts
- Primary font: Inter (Google Fonts)
- Gradient text effects for branding

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Future Enhancements

- [ ] Integration with real Shopify API
- [ ] User authentication system
- [ ] Payment processing (Stripe)
- [ ] Real-time WebSocket connections
- [ ] Advanced analytics charts
- [ ] Mobile app companion
- [ ] API documentation
- [ ] Admin panel

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary software for Observa.

## Support

For support and questions:
- Email: support@useobserva.app
- Documentation: [docs.useobserva.app](https://docs.useobserva.app)
- Status Page: [status.useobserva.app](https://status.useobserva.app)
