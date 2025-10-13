import api from "../axios";

export const getAllCategories = async () => {
  const response = await api.get(`/category/categories`);
  return response.data;
};


export const getProductCategory = async (id) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};