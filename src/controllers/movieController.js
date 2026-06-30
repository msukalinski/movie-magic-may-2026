import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('movies/create');
});

movieController.post('/create', async(req, res) => {
    const newMovie = req.body;

    await movieService.create(newMovie);

    res.redirect('/');
    console.log(req.body);
});

//Details page
movieController.get('/:movieId', async (req, res) => {
    const movieId = req.params.id;

    res.render('movies/details')
});

export default movieController;