import api from "../axios";

export const getAllOrders = async () => {
  const response = await api.get(`/orders`);
  return response.data;
};


export const makeOrderPaid = async (id) => {
  const response = await api.put(`/orders/${id}/pay`);
  return response.data;
};


export const makeOrderDelivered  = async (id) => {
  const response = await api.put(`/orders/${id}/deliver`);
  return response.data;
};