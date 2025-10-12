import api from "../axios";

export const addProductReview = async (productId, commentData) => {
  const response = await api.post(`/products/${productId}/reviews`, commentData);
  return response.data;
};
