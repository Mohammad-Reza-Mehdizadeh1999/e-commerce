import api from "../axios";

export const getUserOrders = async () => {
  const response = await api.get("/orders/mine");
  return response.data;
};

export const getUserSingleOrder = async (id) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};


export const makeOrder = async (orderData) => {
  const response = await api.post("/orders", orderData);
  return response.data;
};