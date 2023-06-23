import React, { useEffect, useState } from 'react';
import { createProduct, updateProduct } from '@/services/productService';
import { ProductDetail, ProductEditProps } from '@/shared/interfaces';


const Product: React.FC<ProductEditProps> = ({ isEditing = false, productToEdit }) => {
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [product, setProduct] = useState<ProductDetail>({
    name: '',
    description: '',
    image: '',
    quantity: 0,
    price: 0,
    id: 0
  });

  useEffect(() => {
    if (isEditing && productToEdit) {
      setProduct(
        {
          name: productToEdit.name,
          description: productToEdit.description,
          image: productToEdit.image,
          quantity: productToEdit.quantity,
          price: productToEdit.price,
          id: productToEdit.id
        });
    }
  }, [isEditing, productToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.name || !product.description || !product.price || !product.image || !product.quantity) {
      setError('Todos los campos son obligatorios');
      return;
    }
    const productData: ProductDetail = {
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity: product.quantity,
    };
    try {
      if (isEditing && productToEdit) {
        await updateProduct(String(productToEdit.id), productData);
        setMessage('Producto actualizado correctamente');
      } else {
        await createProduct(productData);

        setProduct(
          {
            name: '',
            description: '',
            image: '',
            quantity: 0,
            price: 0,
            id: 0
          }
        )
        setMessage('Producto creado correctamente');
      }
      setMessageType('success');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      
    } catch (error: any) {
      setMessage('Hubo un error al realizar la operación');
      setMessageType('error');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      setError(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({
      ...product,
      [e.target.id]: e.target.id === 'quantity' || e.target.id === 'price' ? Number(e.target.value) : e.target.value
    });
  };

  return (

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            id="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="text"
            id="price"
            value={product.price}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            URL de la imagen
          </label>
          <input
            type="text"
            id="image"
            value={product.image}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Cantidad
          </label>
          <input
            type="number"
            id="quantity"
            value={product.quantity}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isEditing ? 'Actualizar Producto' : 'Crear Producto'}
        </button>

        {showMessage && (
          <div
            className={`absolute left-10  top-10 mb-20 px-4 py-2 rounded text-center ${
              messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
            role="alert">
            <p>{message}</p>
          </div>
        )}
      </form>
        
  );
};

export default Product;
