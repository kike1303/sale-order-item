import { ProductDetail } from '@/shared/interfaces';

const URL_BASE = 'http://localhost:3000/api/sale-order-items';

export const createProduct = async (productData: ProductDetail) => {
  const response = await fetch(URL_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  const data = await response.text();

  if (!response.ok) {
    throw new Error(data);
  }

  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(URL_BASE);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products: ', error);
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const response = await fetch(`${URL_BASE}/${productId}`, {
      method: 'DELETE',
    });
    return response.text();
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

export const updateProduct = async (id: string, productData: ProductDetail) => {
  try {
    const response = await fetch(`${URL_BASE}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error('No se pudo actualizar el producto');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id: string): Promise<ProductDetail> => {
  try {
    const response = await fetch(`${URL_BASE}/${id}`);

    if (!response.ok) {
      throw new Error('Error al obtener el producto');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
