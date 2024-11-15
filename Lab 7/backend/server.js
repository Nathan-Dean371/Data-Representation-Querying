const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin@lab7-cluster.khz7c.mongodb.net/?retryWrites=true&w=majority&appName=Lab7-Cluster');


const movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Poster: String
});

const Movie = mongoose.model('Movie', movieSchema);

app.post("/api/movies", async (req, res) => {

  const { title, year, poster} = req.body;

  const newMovie = new Movie({title, year, poster});
  await newMovie.save();

  res.status(201).json({ message: "Movie saved successfully", movie : newMovie });

});

app.get("/api/movies", async (req, res) => {

  const movies = await Movie.find();
  res.json(movies);

});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



