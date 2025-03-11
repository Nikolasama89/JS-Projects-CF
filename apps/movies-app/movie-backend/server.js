require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/movies", async(req, res) => {
  try {
    // const title = req.query.title;
    //destructuring assignment 
    const {title} = req.query;
    const response = await axios.get (`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${title}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({error : "Error fetching data from OMDB API"});
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});
