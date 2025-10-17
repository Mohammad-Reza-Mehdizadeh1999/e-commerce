import api from "../axios";

export const getAllOrders = async () => {
  const response = await api.get(`/orders`);
  return response.data;
};