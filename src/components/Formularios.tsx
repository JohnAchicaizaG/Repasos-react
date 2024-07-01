import { useState, useEffect } from "react"
import { dataDePrueba } from "../data/dataPruebas"

function Formularios() {
    const [data, setData] = useState(dataDePrueba)



    useEffect(() => {

        // const arrayNumeros = [1,3,4,6,8,10,11,22,45,112,150,220]
        // let numeros = [3, -1, 4, 2, -5, 6];
        // const hola = "hola /mundo"
        // const hola2 = hola.split("")
        // console.log('💻🔥 14, Formularios.tsx: ', hola2);

        // const minNum = Math.min(...arrayNumeros)
        // const maxNum = Math.max(...arrayNumeros)
        // const sumaMinMax = minNum+maxNum
        // console.log('💻🔥 16, Formularios.tsx: ', sumaMinMax);


        // const numerosPositivos = numeros.filter(numero => numero>=0).sort((a, b) => b - a)
        // const numerosPositivos = numeros.filter(numero => numero>=0).reduce((acc, act) => acc + act, 0 )
        // const numerosNegativos = numeros.filter(numero => numero<0)
        // console.log('💻🔥 21, Formularios.tsx: ', numerosPositivos);
        // console.log('💻🔥 23, Formularios.tsx: ', numerosNegativos);
        // const nuevoArray = [...data]

        // const mayusculas = nuevoArray.map(data => ({ ...data,nombre : data.nombre.toUpperCase()}) )
        // const busqueda = nuevoArray.filter((data) => data.nombre.includes('John Alexander'))

        // console.log('💻🔥 , Formularios.tsx: ', busqueda);

        const fetchData1 = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = true;
                    if (success) {
                        resolve('Datos de la primera promesa');
                    } else {
                        reject('Error en la primera promesa');
                    }
                }, 1000);
            });
        };

        const fetchData2 = (data1) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = true;
                    if (success) {
                        resolve(`${data1} y datos de la segunda promesa`);
                    } else {
                        reject('Error en la segunda promesa');
                    }
                }, 1000);
            });
        };

        fetchData1()
            .then((data1) => {
                return fetchData2(data1);
            })
            .then((data2) => {
                console.log(data2);
            })
            .catch((error) => {
                console.error('Error:', error);
            });




    }, [])




    return (
        <div>
            <h1>Formularios</h1>
        </div>
    )
}

export default Formularios