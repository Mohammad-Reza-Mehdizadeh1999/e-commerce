import api from "../axios";

export const getUserOrders = async () => {
  const response = await api.get("/orders/mine");
  return response.data;
};

export const getUserSingleOrder = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};