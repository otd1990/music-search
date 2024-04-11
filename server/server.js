const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/api/search", async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(
      `https://api.deezer.com/search?q=${query}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching tracks:", error.message);
    res.status(500).json({ error: "Failed to fetch tracks" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
