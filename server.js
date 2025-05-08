require('dotenv').config();
const express = require('express');
const https = require('https');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const morgan = require('morgan'); // for logging
const rateLimit = require('express-rate-limit'); // for rate limiting

const app = express();
const PORT = process.env.PORT || 3000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later."
});

// Apply rate limiter to all routes
app.use(limiter);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Log all requests (for development and debugging)
app.use(morgan('tiny'));

// Quote route
app.get('/quote', async (req, res) => {
  try {
    const response = await fetch('https://api.quotable.io/random', {
      agent: new https.Agent({ rejectUnauthorized: false }) // Ignore SSL certificate validation
    });
    const data = await response.json();
    res.json({ quote: `${data.content} — ${data.author}` });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({ quote: 'Could not fetch quote. Try again later.' });
  }
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
