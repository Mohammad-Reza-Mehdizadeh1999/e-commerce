import api from "../axios";

export const getProductCategory = async (id) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};