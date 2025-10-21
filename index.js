const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

const PLACE_ID = "109983668079237"; // Steal a Brainrot

app.get("/next", async (req, res) => {
  try {
    const response = await axios.get(
      `https://games.roblox.com/v1/games/${PLACE_ID}/servers/Public?sortOrder=Asc&limit=100`
    );
    const servers = response.data.data;
    const jobIds = servers.map(s => s.id);
    res.json({ count: jobIds.length, jobIds });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("API de Brainrot lista ✅ Usa /next para ver los jobIds");
});

app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`));
