import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {
    const { email, password, repeatPassword } = req.body;

    authService.create({ email, password, repeatPassword });

    res.redirect('auth/login');
});

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log(email);
})

export default authController;