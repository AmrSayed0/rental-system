# Real Estate Property Management System

A comprehensive full-stack application for property management, rental listings, and tenant applications.

## Overview

This project is a modern real estate property management system built with a React/Next.js frontend and a Node.js/Express backend. It enables property managers to list properties, tenants to search and apply for rentals, and provides a complete property management workflow.

## Features

- **Property Listings**: Browse, search, and filter available properties.
- **Advanced Filtering**: Filter by price, bedrooms, bathrooms, property type, square footage, and more.
- **Geospatial Search**: Find properties near specific locations.
- **User Authentication**: Secure login and registration for tenants and property managers.
- **Favorites System**: Save and manage favorite properties.
- **Property Applications**: Apply for rental properties.
- **Property Management Dashboard**: Manage listings and applications for property managers.

## Tech Stack

### Frontend

- **Next.js** (React framework)
- **Redux** for state management
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Axios** for API requests

### Backend

- **Node.js** with Express
- **PostgreSQL** with PostGIS for geospatial data
- **Prisma ORM** for database access
- **Zod** for schema validation
- **AWS S3** for image storage
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Multer** for file uploads
- **Nominatim** for geocoding addresses
- **PM2** for process management
- **and more...**

## Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm (v10 or higher)
- PostgreSQL with PostGIS extension
- AWS account for managing services (S3, etc.)
- Git for version control

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/AmrSayed0/rental-system.git
cd rental-system
```

2. **Install dependencies for both client and server**:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. **Set up environment variables**:

- Create `.env` files in both the `client` and `server` directories.
- Configure the necessary environment variables (see the Environment Variables section).

4. **Start the development servers**:

```bash
# Start client
cd client
npm run dev

# Start server
cd ../server
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the client application.

## Environment Variables

### Client

Create a `.env.local` file in the `client` directory with the following:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID=your-client-id
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-access-token
NEXT_PUBLIC_MAPBOX_STYLE_URL=your-mapbox-style-url
```

### Server

Create a `.env` file in the `server` directory with the following:

```env
PORT=3001
DATABASE_URL=postgresql://username:password@localhost:5432/real_estate
AWS_REGION=your-aws-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
S3_BUCKET_NAME=your-bucket-name
```

## Project Structure

```
real-estate-prod/
├── client/                # Next.js frontend
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── app/           # Next.js app directory
│   │   ├── components/    # Reusable components
│   │   ├── hooks/         # Custom React hooks
|   │   ├── lib/           # Utility functions and libraries
│   │   ├── state/         # Redux state management
│   │   └── types/         # TypeScript type definitions
│   └── package.json       # Frontend dependencies
|   └── tailwind.config.js   # Tailwind CSS configuration
│   └── postcss.config.js    # PostCSS configuration
│   └── next.config.js       # Next.js configuration
│   └── tsconfig.json        # TypeScript configuration
│   └── .env.local           # Environment variables for client
│
├── server/                # Express backend
│   ├── src/               # Source code
│   │   ├── controllers/   # API controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/        # API routes
│   │   └── index.ts       # Server entry point
│   └── package.json       # Backend dependencies
│   └── tsconfig.json      # TypeScript configuration
│   └── aws-ec2-instructions.md # Instructions for deploying on AWS EC2
│   └── prisma/           # Prisma schema and migrations
│   └── .env               # Environment variables for server
│
└── README.md              # Project documentation
```

## API Endpoints

The backend provides several API endpoints for property management:

- `GET /properties`: Retrieve properties with optional filtering.
- `GET /properties/:id`: Retrieve a single property by ID.
- `POST /properties`: Create a new property.

## Deployment

### Server Deployment (AWS EC2)

1. Launch an EC2 instance with Amazon Linux 2.
2. Install Node.js, Git, and PM2.
3. Clone the repository and install dependencies.
4. Configure environment variables.
5. Start the application using PM2.

Detailed deployment instructions can be found in the `server/aws-ec2-instructions.md` file.

### Client Deployment (amplify)

One of the options for deploying the client is to use AWS Amplify. Here are the steps:

1. Create an AWS Amplify account and log in.
2. Create a new Amplify app and connect it to your Git repository.
3. Choose the branch you want to deploy (e.g., `main`).
4. Configure build settings (Amplify will automatically detect the Next.js app).
5. Set environment variables in the Amplify console.
6. Deploy.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Live Demo

A live demo of the application is available at [rental-system](https://main.dnvxsckxkjw9i.amplifyapp.com/).
