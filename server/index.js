const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  // <-- Import cors here

require('dotenv').config();  // Load environment variables

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());  // To parse incoming JSON data

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MMONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define a Mongoose schema for the contact form
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a Mongoose model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Create an endpoint to handle form submissions
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a new contact document
  const newContact = new Contact({
    name,
    email,
    message
  });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!', data: newContact });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact form data.', error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
