import React, { useState, useEffect } from 'react';
import { deleteProduct, getProducts } from '../../services/productService';
import ProductModal from '../product-modal/ProductModal';
import { ProductDetail } from '@/shared/interfaces';
import { useRouter } from 'next/router';


const ListProduct: React.FC = () => {
  const [products, setProducts] = useState<ProductDetail[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleEdit = (product: ProductDetail) => {
    router.push(`/products/edit?id=${product.id}`);
    handleCloseModal();
  };

  const handleDelete = async (product: ProductDetail) => {
    try {
      await deleteProduct(String(product.id));
      setProducts(products.filter(item => item.id !== product.id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
   
    handleCloseModal();
  };

  return (

    <>
    <div className="grid grid-cols-3 gap-4 p-4">


      { products && products.map((product: ProductDetail) => (
          <div key={product.id} className="flex flex-col items-center cursor-pointer border border-gray-300 rounded hover:shadow-lg hover:ring-2 hover:ring-indigo-600" onClick={() => setSelectedProduct(product)}>
            <div className="w-32 h-48 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e: any) => {
                  e.target.src = '/images/not-found.webp';
                }}
              />
            </div>
            <span className="mb-4 text-center">{product.name}</span>
          </div>
        ))
        
      }

      {selectedProduct && (
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      )}
    </div>

    {!products && 

      <div className="flex items-center justify-center mt-40">
        <p className="text-4xl font-bold text-center">NO HAY PRODUCTOS DISPONIBLES</p>
      </div>
    }
    </>
    

  );
};

export default ListProduct;
