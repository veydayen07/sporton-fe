import { fetchAPI, getAuthHeaders } from "../lib/api";
import { Product } from "../types";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetchAPI<Product[]>("products");
  return res;
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await fetchAPI<Product>(`products/${id}`);
  return res;
};

export const createProduct = async (data: FormData): Promise<Product> => {
  return await fetchAPI<Product>("products", {
    method: "POST",
    headers: {
      ...getAuthHeaders(),
    },
    body: data,
  });
};

export const updateProduct = async (
  id: string,
  data: FormData,
): Promise<Product> => {
  return await fetchAPI<Product>(`products/${id}`, {
    method: "PUT",
    headers: {
      ...getAuthHeaders(),
    },
    body: data,
  });
};

export const deleteProduct = async (id: string): Promise<void> => {
  return await fetchAPI<void>(`products/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
    },
  });
};
