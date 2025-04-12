# Konnectorr

![Konnectorr CI/CD](https://github.com/konnectorr/konnectorr/workflows/Konnectorr%20CI/CD/badge.svg)

A cutting-edge telecommunications service comparison platform that provides advanced bill analysis and service reliability insights through intelligent data processing and user-friendly visualizations.

## Features

- **Bill Analysis**: Upload your telecommunications bills for analysis of hidden fees and better plan recommendations
- **Service Comparison**: Compare telecommunications services from various providers
- **Weather Impact Analysis**: See how weather conditions affect different telecommunications services
- **eSIM Services**: Information and sign-up for eSIM capabilities
- **Educational Resources**: Informative content about telecommunications services

## Technologies

- React.js with TypeScript
- Tailwind CSS for responsive design
- React Query for data fetching
- OpenAI-powered OCR bill processing
- Weather API integration
- Interactive data visualization
- Geospatial service mapping

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/konnectorr/konnectorr.git
   cd konnectorr
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

### Environment Variables

Create a `.env` file in the root directory with the following variables:
```
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
WEATHER_API_KEY=your_weather_api_key
```

## Security

The application implements several security measures:
- Helmet for security headers
- Rate limiting for API requests
- CSRF protection
- JWT token security with rotation
- Strong password policy

## License

[MIT License](LICENSE)

## Contact

For inquiries, please contact support@konnectorr.com