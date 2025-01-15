// server.js
import express from 'express';
import { countries } from 'countries-list';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

// Endpoint to fetch all countries
app.get('/api/countries', (req, res) => {
  try {
    const countryList = Object.values(countries).map(({ name, native, phone, continent, currency, languages }) => ({
      name,
      native,
      phone,
      continent,
      currency,
      languages,
    }));
    res.json(countryList);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Could not fetch countries' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
