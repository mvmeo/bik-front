import { Link } from "react-router-dom";
import Fondo from "../assets/AR.png";
const HomePage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="max-w-md w-full bg-white rounded p-8 shadow">
        
        <h1 className="text-3xl text-yellow-700 mb-4">
          Bienvenido a BikinGuardian
        </h1>
        <p className="text-gray-700 mb-4">
          Esta es una herramienta para notificar todas los imprevistos en tus
          salidas y cicletadas. Producto realizado para la organización ciclista
          "Amigos de Rutas"
        </p>
        <div className="flex justify-between">
          <Link to="/login" className="font-bold text-yellow-700 py-2 px-4 rounded">
            Iniciar sesión
          </Link>
          <Link to="/register" className="font-bold text-yellow-700 py-2 px-4 rounded">
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
