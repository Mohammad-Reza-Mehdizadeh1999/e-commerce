import api from "../axios";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await api.post(`/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
    
  const formData = new FormData();
  for (const key in productData) {
    formData.append(key, productData[key]);
  }

  const response = await api.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};