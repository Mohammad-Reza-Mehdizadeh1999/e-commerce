import api from "../axios";

export const logOutUser = () => api.post("/users/logout");