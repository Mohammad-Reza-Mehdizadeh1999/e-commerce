import api from "../axios";

export const getUserOrders = async () => {
  const response = await api.get("/orders/mine");
  return response.data;
};