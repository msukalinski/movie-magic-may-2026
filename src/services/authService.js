import userRepository from "../repositories/userRepository.js";

export function create(userData) {
    userRepository.create(userData);
}

const authService = {
    create
};

export default authService;