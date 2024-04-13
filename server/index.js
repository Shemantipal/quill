const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config()

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const apiKey = process.env.API_KEY
const anthropic = new Anthropic({ apiKey });

app.post('/send-prompt', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }
    const response = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1024,
      messages: [
        { "role": "user", "content": prompt }
      ]
    });
    if (response.content && response.content.length > 0) {
      res.json({ response: response.content[0].text });
    } else {
      res.status(400).json({ error: 'Anthropic API did not return any completions' });
    }
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data);
    } else {
      console.error('Error:', error);
    }
    res.status(500).json({ error: 'Failed to send prompt to Anthropic API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});