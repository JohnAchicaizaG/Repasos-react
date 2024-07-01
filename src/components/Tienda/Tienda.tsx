import { useEffect, useState } from "react";
import { productos as productosTienda, Producto, } from './data/datosTienda';

const Tienda = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [carrito, setCarrito] = useState<Producto[]>([]);
    const [valorTotal, setValorTotal] = useState<number>(0);
    const [cargando, setCargando] = useState<boolean>(true);

    useEffect(() => {

        setTimeout(() => {
            setProductos(productosTienda)
            setCargando(false)
        }, 1000);

        const precioTotal = carrito.reduce((acc, prod) => acc + prod.precio, 0);
        setValorTotal(precioTotal);
    }, [carrito]);

    const agregarAlCarrito = (producto: Producto) => {
        if (carrito.some(item => item.id === producto.id)) return
        setCarrito(prevCarrito => [...prevCarrito, producto]);
    };

    const eliminarDelCarrito = (producto: number) => {
        const arrayFiltrado = carrito.filter(data => data.id !== producto)
        setCarrito(arrayFiltrado)
    }


    if (cargando) {
        return (
            <div className="w-full h-full bg-gray-500 flex justify-center items-center">
                <p className="text-white text-2xl">Cargando productos...</p>
            </div>
        );
    }

    return (
        <>
            {/* cabecera */}
            <div className="w-full h-full bg-gray-500">
                <div className="w-full flex justify-center h-9 bg-indigo-600 p-2">
                    <h1 className="text-white">Tienda Pruebas JACHG</h1>
                </div>
                {/* carrito de compras */}
                <div className="w-full rounded overflow-hidden shadow-lg">
                    {
                        carrito.map(producto => (
                            <div key={producto.id} className="w-full h-14 p-3 flex flex-row items-center justify-between">
                                <div className="w-full bg-slate-200 rounded-md mt-10 p-3 flex flex-row items-center justify-between">
                                    <img className="w-120 h-12" src="https://via.placeholder.com/400x200" alt={`Imagen`} />
                                    <div className="flex flex-row items-center justify-center">
                                        <p className=""> {producto.nombre} - ${producto.precio.toLocaleString('es-CO')} </p>
                                        <button onClick={() => eliminarDelCarrito(producto.id)} className="ml-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="w-full bg-gray-500 h-12 flex justify-end mt-12 px-3 items-center mb-2">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                            Total: ${valorTotal.toLocaleString('es-CO')}
                        </button>
                    </div>
                </div>
                {/* cuerpo principal de la tienda */}
                <div className="container mx-auto p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {productos.map(({ id, nombre, descripcion, precio }) => (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4" key={id}>
                                <img className="w-full" src="https://via.placeholder.com/400x200" alt={`Imagen de ${nombre}`} />
                                <div className="px-6 py-4 h-32">
                                    <div className="font-bold text-xl mb-2">{nombre}</div>
                                    <p className="text-gray-700 text-base">
                                        {descripcion}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 flex justify-between mt-auto">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        ${precio.toLocaleString('es-CO')}
                                    </span>
                                    <button
                                        onClick={() => agregarAlCarrito({ id, nombre, descripcion, precio })}
                                        disabled={carrito.some(item => item.id === id)}
                                        className={`mb-1 bg-indigo-600 text-white font-bold px-4 rounded hover:bg-indigo-700 ${carrito.some(item => item.id === id) ? 'opacity-50 cursor-not-allowed' : 'active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'}`}>
                                        {carrito.some(item => item.id === id) ? 'Agregado' : 'Agregar'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tienda;
