const Movies = require("../models/movies")


// get all movies
const getMovies = async (req, res) => {
    try{
        const movies = await Movies.find();
        res.status(200).json({success: true, data: movies})
    }catch(error){
        res.status(409).send({success: false, data: [], error: error})
    }
}


// get specific movie
const getSpecMovie = async (req, res) => {
    const movieId = req.params.movieId;
    try{
        const movie = await Movies.find({_id: movieId});
        res.status(200).json({success: true, data: movie})
    }catch(error){
        res.status(409).send({success: false, data: [], error: error})
    }
}


// add movie to database
const postMovies = async (req, res) => {
    try{
        const {name} = req.body
        const {release_date} = req.body
        const {director} = req.body
        const {cast} = req.body
        const {watch_from} = req.body

        const newMovie = new Movies({
            name: name,
            release_date: release_date,
            director: director,
            cast: cast,
            watch_from: watch_from
        })

        const savedMovie = await newMovie.save()
        res.status(200).json({success: true, data: savedMovie})

    }catch(error){
        res.status(409).send({success: false, data: [], error: error})
    }
}


// update movie data
const updateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    const {name} = req.body
    const {release_date} = req.body
    const {director} = req.body
    const {cast} = req.body
    const {watch_from} = req.body

    try{
        const movie = await Movies.updateOne({_id: movieId}, {$set: {
            name: name,
            release_date: release_date,
            director: director,
            cast: cast,
            watch_from: watch_from
        }})

        const updatedMovieData = await Movies.find({_id: movieId})
        res.status(200).json({success: true, data: updatedMovieData})

    }catch(error){
        res.status(409).send({success: false, data: [], error: error})
    }
}


// delete movies
const deleteMovie = async (req, res) => {
    const movieId = req.params.movieId;
    try{
        await Movies.remove({_id: movieId})
        res.status(200).json({success: true, message: `Movie  with ${movieId} deleted`})
    }catch(error){
        res.status(409).send({success: false, data: [], error: error})
    }
}


module.exports = {
    getMovies,
    postMovies,
    getSpecMovie,
    updateMovie,
    deleteMovie
}