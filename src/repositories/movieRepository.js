import fs from 'fs/promises';
import { prisma } from '../lib/prisma.js'

async function getAll(filter = {}) {
    let movies = await prisma.movie.findMany();

    //Partial case insensitive search
    //TODO Implement database filtering instead of filtering in memory
    if (filter.search) {
        movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    };

    //Exact search
    if (filter.year) {
        movies = movies.filter(movie => movie.year === filter.year);
    };

    if (filter.genre) {
        movies = movies.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
    };

    return movies;
};

async function getById(movieId) {
    const movie = await prisma.movie.findUnique({
        where: {
            id: movieId
        }
    });

    if (!movie) {
        throw new Error('No movie found!');
    };

    return movie;
};

async function create(movieData) {
    const movie = await prisma.movie.create({
        data: movieData
    });
    return movie
};

const movieRepository = {
    getAll,
    getById,
    create
};

export default movieRepository;