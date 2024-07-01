import { Link, Route, Routes, } from 'react-router-dom';
import TablasReact from '../components/Tablas';
import Formularios from '../components/Formularios';
import Http from '../components/Http';
import {ReducerComponent ,ReducerComponentDos } from '../components/UseReducerComponent';
import Tienda from '../components/Tienda/Tienda';

function Home() {


    return (
        <div className="flex min-h-screen ">
            {/* Menú lateral */}
            <div className="bg-gray-800 text-white w-80 p-4">
                <h1 className="text-xl font-bold mb-4">Menu</h1>
                <ul>
                    <li className="mb-2">
                        <Link to="tabla-react" className="block hover:text-blue-500">
                            Tabla React
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="formularios-react" className="block hover:text-blue-500" >
                            Formularios React
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="http" className="block hover:text-blue-500" >
                            Peticiones Http
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="reducer" className="block hover:text-blue-500" >
                            Use Reducer
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="reducerdos" className="block hover:text-blue-500" >
                            Use Reducer Dos
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="tienda" className="block hover:text-blue-500" >
                            Tienda
                        </Link>
                    </li>
                    {/* aqui agregamos mas items al menú */}
                </ul>
            </div>

            {/* Contenido principal */}
            <div className="w-full  justify-center p-0">
                {/* Rutas y renderizado dinámico */}
                <Routes>
                    <Route path="tabla-react" element={<TablasReact />} />
                    <Route path="formularios-react" element={<Formularios />} />
                    <Route path="http" element={<Http />} />
                    <Route path="reducer" element={<ReducerComponent />} />
                    <Route path="reducerdos" element={<ReducerComponentDos />} />
                    <Route path="tienda" element={<Tienda />} />
                    {/* Aqui las rutas */}
                </Routes>
            </div>
        </div>
    );
}

export default Home;
