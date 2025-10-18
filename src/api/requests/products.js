import api from "../axios";

export const getAllProducts = async () => {
  const response = await api.get("/products/allproducts");
  return response.data;
};


export const getAllProductsPagination = async (size = 6, page = 1) => {
  const response = await api.get(`/products?size=${size}&page=${page}`);
  return response.data;
};


export const filterProducts = async (filters) => {
  const response = await api.post("/products/filtered", filters);
  return response.data;
}