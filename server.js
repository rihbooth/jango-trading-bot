const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const winston = require('winston');
const { Server } = require('socket.io');
const http = require('http');
const authMiddleware = require('./middlewares/authMiddleware');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => logger.info('MongoDB connected'))
  .catch(err => logger.error(err));

// Routes setup
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', authMiddleware.verifyToken, apiRoutes);

// Public routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Socket.io setup
io.on('connection', (socket) => {
  logger.info('New client connected');
  socket.on('disconnect', () => {
    logger.info('Client disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});