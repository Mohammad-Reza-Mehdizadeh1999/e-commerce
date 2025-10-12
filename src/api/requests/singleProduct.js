import api from "../axios";

export const getSingleProducts = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};