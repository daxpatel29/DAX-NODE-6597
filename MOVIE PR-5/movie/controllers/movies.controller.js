const movies = require("../Models/movies.schema");

const createMovies = async (req, res) => {
  const {
    title,
    description,
    releaseDate,
    category,
    actors,
    image,
    ratings,
    comments,
    addedBy,
  } = req.body;

  const isExists = await movies.findOne({ title });
  if (isExists) {
    res.send("Movie already exists");
  } else {
    const movies = new movies({
      title,
      description,
      releaseDate,
      category,
      actors,
      image,
      ratings,
      comments,
      addedBy,
    });
    const data = await movies.create(movies);
    res.send(data);
  }
};

const updateMovies = async (req, res) => {
  const { id } = req.params;

  const data = await movie.findByIdAndUpdate(id, req.body, { new: true });
  res.send(data);
};

const deleteMovies = async (req, res) => {
  const { id } = req.params;
  const data = await movie.findByIdAndDelete(id);
  res.send(data);
};



module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
};
