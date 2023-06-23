import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProductDetail } from '@/shared/interfaces';
import { getProductById } from '@/services/productService';
import Product from '@/components/product/Product';
import Header from '@/components/header/Header';

const Edit: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<ProductDetail>({
    name: '',
    description: '',
    image: '',
    quantity: 0,
    price: 0,
    id: 0
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const product = await getProductById(id as string);

        setProduct(
          {
            name: product.name,
            description: product.description,
            image: product.image,
            quantity: product.quantity,
            price: product.price,
            id: product.id
          }
        )
      }
    };

    fetchProduct();
  }, [id]);

  
  return (

    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white p-6 rounded shadow-md">
        
          <h1 className="text-2xl font-semibold mb-4">Editar Producto</h1>
          <Product isEditing={true} productToEdit={product} />
        </div>

      </div>
      
    </div>
   
    </>
    
  );
};

export default Edit;
