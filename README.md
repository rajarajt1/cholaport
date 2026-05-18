# Portfolio Website - MERN Stack

A modern, responsive portfolio website built with the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- **Modern UI/UX**: Clean, minimal design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Full-Stack**: Complete backend API with MongoDB database
- **Sections**: Hero, About, Skills, Projects, Experience, Contact
- **Contact Form**: Functional contact form with backend integration

## Tech Stack

### Frontend
- React 18
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Axios (HTTP client)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository** (if using git)
   ```bash
   git clone <your-repo-url>
   cd cholaport
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure Environment Variables**
   
   Backend (.env in `/server`):
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

   Frontend (.env in `/client`):
   ```
   VITE_API_URL=http://localhost:5000
   ```

5. **Seed the Database**
   ```bash
   cd server
   npm run seed
   ```

### Running the Application

1. **Start Backend Server** (from `/server`)
   ```bash
   npm run dev
   ```
   Backend will run on http://localhost:5000

2. **Start Frontend** (from `/client`)
   ```bash
   npm run dev
   ```
   Frontend will run on http://localhost:5173

3. **Open in Browser**
   Navigate to http://localhost:5173

## Project Structure

```
cholaport/
├── server/                 # Backend
│   ├── config/            # Database configuration
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── controllers/       # Route controllers
│   ├── server.js          # Entry point
│   └── seed.js            # Database seeding
│
├── client/                # Frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Context providers
│   │   ├── services/      # API services
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   └── public/            # Static assets
│
└── README.md
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get all skills
- `GET /api/experience` - Get experience data
- `POST /api/contact` - Submit contact form

## Customization

1. **Update Personal Information**: Edit `/client/src/components/Hero.jsx` to change name and title
2. **Modify Projects**: Edit `/server/seed.js` to add your own projects
3. **Update Skills**: Edit `/server/seed.js` to reflect your skill set
4. **Change Experience**: Edit `/server/seed.js` to add your work experience
5. **Customize Colors**: Modify `/client/tailwind.config.js` for theme colors

## Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `cd client && npm run build`
2. Deploy the `dist` folder

### Backend (Render/Railway/Heroku)
1. Set environment variables
2. Deploy from the `server` directory

### Database
- Use MongoDB Atlas for production database
- Update MONGODB_URI in production environment

## Screenshots

The portfolio includes:
- Hero section with call-to-action buttons
- About section with personal introduction
- Skills organized by category (Frontend, Backend, Database, Tools)
- Projects showcase with filtering capability
- Work experience timeline
- Functional contact form
- Dark mode toggle

## License

MIT License - feel free to use this for your own portfolio!

## Support

For issues or questions, please open an issue in the repository.
