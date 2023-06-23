import React from 'react';
import { useRouter } from 'next/router';

const Header: React.FC<{ showBack?: boolean }> = ({ showBack = true }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleCreateProduct = () => {
    router.push('/products/create');
  }

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-200 border-b border-gray-300">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-lg font-semibold">Sale Order Item</span>
      </div>

      { showBack && 
        <button
        className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-300 hover:bg-gray-400 rounded"
        onClick={handleGoBack}
      >
        Atrás
      </button>
      }

      { !showBack && 
        <button
        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

        onClick={handleCreateProduct}
      >
        Crear producto
      </button>
      }
      
    </header>
  );
};

export default Header;
