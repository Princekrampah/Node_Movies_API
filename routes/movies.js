const express = require("express");
const {
    getMovies, 
    postMovies, 
    getSpecMovie, 
    updateMovie, 
    deleteMovie
} = require("../controllers/movies");


const router = express.Router();

router.get("/", getMovies);
router.get("/:movieId", getSpecMovie);
router.post("/", postMovies);
router.put("/:movieId", updateMovie);
router.delete("/:movieId", deleteMovie);

module.exports = router;
