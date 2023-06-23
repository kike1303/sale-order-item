import Product from "@/components/product/Product";
import Header from "@/components/header/Header";

const Create = () => {
  return (

    <>
      <Header />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        
          <div className="bg-white p-6 rounded shadow-md">
          
            <h1 className="text-2xl font-semibold mb-4">Crear Nuevo Producto</h1>
            <Product /> 
          </div>

        </div>
        
      </div>
    </>
    
  );
};

export default Create;
