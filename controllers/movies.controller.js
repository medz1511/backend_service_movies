const db = require("../models");
const FILMS = db.films;


// Récupérer tous les films depuis la base de données.
exports.findAllMovies = (req, res) => {
  Films.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message || "Une erreur s'est produite lors de la récupération des films." });
    });
};

// Créer et enregistrer un nouveau film
exports.createMovie = (req, res) => {
  // Valider la requête
  if (!req.body.name || !req.body.title || !req.body.distribution || !req.body.value) {
    res.status(400).json({ message: "Tous les champs doivent être remplis !" });
    return;
  }

  // Créer un nouveau film
  const film = new FILMS({
    name: req.body.name,
    title: req.body.title,
    distribution: req.body.distribution,
    value: req.body.value,
   
  });

  // Enregistrer le film dans la base de données
  film.save()
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: err.message || "Une erreur s'est produite lors de la création du film." });
    });
};

// Mettre à jour un film en fonction de l'ID dans la requête
exports.updateMovie = (req, res) => {
  const id_movie = req.params.id;
  
 FILMS.findByIdAndUpdate(id_movie, req.body, { new: true })
    .then(film => {
      if (!film) {
        return res.status(404).json({ message: `Film avec l'ID ${id_movie} non trouvé.` });
      }
      res.status(200).json(film);
    })
    .catch(err => {
      res.status(500).json({ message: `Erreur lors de la mise à jour du film avec l'ID ${id_movie}.` });
    });
};

// Supprimer un film avec l'ID spécifié dans la requête
exports.deleteMovie = (req, res) => {
  const id_movie = req.params.id;

  FILMS.findByIdAndDelete(id_movie)
    .then(film => {
      if (!film) {
        return res.status(404).json({ message: `Film avec l'ID ${id_movie} non trouvé.` });
      }
      res.status(200).json({ message: "Film supprimé avec succès." });
    })
    .catch(err => {
      res.status(500).json({ message: `Erreur lors de la suppression du film avec l'ID ${id_movie}.` });
    });
};