require('dotenv').config(); // Load environment variables
const express = require('express');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { getChatCompletion } = require('./openaiModule'); // Import the OpenAI module

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // To parse JSON request bodies

// GET API - Fetch OpenAI response
app.get('/get-ai', async (req, res) => {
  try {
    // Default messages for system and user
    const sm = req.query.um || "";
    const um = req.query.um || "";
    const auto = req.query.auto || true;
    const message = await getChatCompletion(sm, um,auto);
    res.json({ message });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST API - Fetch OpenAI response with custom messages
app.post('/post-ai', async (req, res) => {
  try {
    const { sm, um,auto} = req.body;

    if (!sm) {
         sm =  "";
    }
    if (!um) {
        um = "";
   }
   if (!auto) {
    auto = true;
}
    const message = await getChatCompletion(sm, um);
    res.json({ message });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
