// Φορτωση μεταβλητων απο .env
require("dotenv").config();

// Εισαγωγη βιβλιοθηκών 
const express = require("express");
const axios = require("axios");
const cors = require("cors");

// Δημιουργια Express εφαρμογης και ορισμος θυρας server
const app = express();
const port = 3000;

// Χρηση middleware σε περιπτωση που ειχαμε διαφορετικους σερβερ το frontend και το backend
// app.use(cors());

// Route για την αναζητηση ταινίας με ΟΜDB API
app.get("/movies", async(req, res) => {
  try {
    // const title = req.query.title;
    //destructuring assignment 
    const {title} = req.query;
    
    // HTTP GET request OMDB API με το API KEY τον τιτλο που πηραμε με destructuring 
    const response = await axios.get (`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${title}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({error : "Error fetching data from OMDB API"});
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});
