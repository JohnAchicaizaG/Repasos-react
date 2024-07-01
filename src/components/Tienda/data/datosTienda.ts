export const productos: Producto[] = [
    {
        id: 1,
        nombre: "Cafetera Eléctrica",
        descripcion: "Cafetera eléctrica de 12 tazas con función de programación automática.",
        precio: 150000
    },
    {
        id: 2,
        nombre: "Auriculares Bluetooth",
        descripcion: "Auriculares inalámbricos con cancelación de ruido y micrófono integrado.",
        precio: 200000
    },
    {
        id: 3,
        nombre: "Reloj Inteligente",
        descripcion: "Reloj inteligente con monitoreo de frecuencia cardíaca y GPS.",
        precio: 250000
    },
    {
        id: 4,
        nombre: "Laptop Gamer",
        descripcion: "Laptop con procesador Intel i7, 16GB de RAM y tarjeta gráfica GTX 1660Ti.",
        precio: 4500000
    },
    {
        id: 5,
        nombre: "Bicicleta de Montaña",
        descripcion: "Bicicleta de montaña con cuadro de aluminio y frenos de disco hidráulicos.",
        precio: 1200000
    },
    {
        id: 6,
        nombre: "Smartphone",
        descripcion: "Smartphone con pantalla AMOLED de 6.5 pulgadas y cámara de 48MP.",
        precio: 1500000
    },
    {
        id: 7,
        nombre: "Cámara Reflex",
        descripcion: "Cámara DSLR con sensor APS-C de 24MP y lente 18-55mm.",
        precio: 3000000
    },
    {
        id: 8,
        nombre: "Tablet",
        descripcion: "Tablet con pantalla de 10 pulgadas y 64GB de almacenamiento.",
        precio: 800000
    },
    {
        id: 9,
        nombre: "Parlante Portátil",
        descripcion: "Parlante Bluetooth portátil con sonido envolvente 360 grados.",
        precio: 250000
    },
    {
        id: 10,
        nombre: "Consola de Videojuegos",
        descripcion: "Consola de videojuegos de última generación con 1TB de almacenamiento.",
        precio: 2200000
    },
    {
        id: 11,
        nombre: "Celular iPhone 15",
        descripcion: "Celular inteligente marca (Apple)",
        precio: 3850000
    }
];


export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
}
