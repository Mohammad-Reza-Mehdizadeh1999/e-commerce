import api from "../axios";

export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const updateProduct = async ( id , productData) => {
    
  const formData = new FormData();
  for (const key in productData) {
    formData.append(key, productData[key]);
  }

  const response = await api.put(`/products/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};