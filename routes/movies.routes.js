module.exports = app => {
  const films = require("../controllers/movies.controller.js");
  let router = require("express").Router();

  // Create a new Student
  router.post("/", films.create);

  // Retrieve all Students
  router.get("/", films.findAll);

  app.use("/api/students", router);
};
