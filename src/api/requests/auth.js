import api from "../axios";

export const loginUser = (data) => api.post("/users/auth", data);

export const registerUser = (data) => api.post("/users", data);
