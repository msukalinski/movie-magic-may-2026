import bcrypt from 'bcrypt';

import userRepository from "../repositories/userRepository.js";

export async function create(userData) {
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const result = await userRepository.create({
        ...userData,
        password: hashPassword
    });

    return result;
};

const authService = {
    create
};

export default authService;