module.exports = app => {
  app.use("/api/films", router);
};

  const films = require("../controllers/movies.controller.js");
  let router = require("express").Router();
  
  // Routes pour la gestion des films
  router.get("/", films.findAllMovies);
  router.post("/", films.createMovie);
  router.put("/:id", films.updateMovie);
  router.delete("/:id", films.deleteMovie);