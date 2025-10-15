import api from "../axios";

export const getAllUsers = () => api.get("/users");

export const changeUserRole = (userId , payload) => api.patch(`/users/role/${userId}`, payload);

