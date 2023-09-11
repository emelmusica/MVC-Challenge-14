const express = require('express');
const router = express.Router(); // Create an Express router instance

// Import your Sequelize models (e.g., Post)
const { Post } = require('./models');

// Define a route to handle POST requests to create a new post
router.post('/create', async (req, res) => {
  try {
    // Extract data from the request body (assuming JSON data)
    const { title, content, userId } = req.body;

    // Validate the incoming data (you can use a validation library)
    if (!title || !content || !userId) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    // Create a new post using Sequelize
    const newPost = await Post.create({
      title,
      content,
      userId,
    });

    // Respond with the newly created post
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; // Export the router for use in your main application file
