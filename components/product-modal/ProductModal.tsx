import { ProductModalProps } from '@/shared/interfaces';
import React from 'react';


const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onEdit, onDelete }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md w-96">
        <button onClick={onClose} className="float-right">
          X
        </button>
        <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
            onError={(e: any) => {
                e.target.src = '/images/not-found.webp';
              }}/>
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p>{product.description}</p>
        <p className="mt-2">Cantidad: {product.quantity}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={() => onEdit(product)} className="py-2 px-4 bg-blue-500 text-white rounded-md">
            Editar
          </button>
          <button onClick={() => onDelete(product)} className="py-2 px-4 bg-red-500 text-white rounded-md">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
