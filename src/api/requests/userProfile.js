import api from "../axios";

export const getUserProfile = async () => {
  const response = await api.put('users/profile');
  return response.data;
};


export const updateUserProfile = async (userData) => {
  const response = await api.put("/users/profile", userData);
  return response.data;
};