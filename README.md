Gaming Hub
Welcome to Gaming Hub, a web application designed to help you explore and discover games! Inspired by platforms like Steam and Armor Games, this project lets users browse, search, and filter games from the RAWG API. It also includes features like user authentication, password recovery, and game data caching.

Features:
Browse and search games with filters for genres, platforms, etc.
Sign up, log in, and recover your password.
Games are fetched from RAWG and cached in the database for faster access.
A clean, responsive user interface for easy navigation.

How It Works:
This is a full-stack application:
    The frontend (React) handles the user interface.
    The backend (Node.js + Express) manages authentication, game caching, and communication with the RAWG API.
    MongoDB is used for storing user data and cached game details.

How to Run the Project:
Clone the repo and navigate to the project folder.
Set up the backend:
    Go to the server folder: cd server
    Install dependencies: npm install
    Add a .env file with the required variables (see below).
    Run the server: npm run dev
Set up the frontend:
    Go to the client folder: cd client
    Install dependencies: npm install
    Add a .env file with your RAWG API key.
    Start the client: npm start
Open your browser at http://localhost:3000 and start exploring games!

Environment Variables:
Frontend
In client/.env:

REACT_APP_RAWG_API_KEY=<your-rawg-api-key>

Backend
In server/.env:

RAWG_API_KEY=<your-rawg-api-key>
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
EMAIL_USER=<your-email-address>
EMAIL_PASS=<your-email-password>


Project Structure:
Here’s the general structure to help you navigate the code:


gaming-hub/
├── client/      # Frontend React app
├── server/      # Backend Express app
└── .env         # Environment variables
The project uses React for the frontend, Node.js and Express for the backend, and MongoDB for storing data. Make sure both the client and server are running for everything to work.

API
RAWG API powers the game data.
Custom backend APIs handle user authentication, password recovery, and game caching.