const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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

app.get("/api/movies", (req, res) => {
  const movies = [
    {
      Title: "Avengers: Infinity War (server)",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Captain America: Civil War (server)",
      Year: "2016",
      imdbID: "tt3498820",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    },
    {
      Title: "World War Z (server)",
      Year: "2013",
      imdbID: "tt0816711",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
  ];

  res.json({ movies });
});


