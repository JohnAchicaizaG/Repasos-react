import { useEffect, useState } from "react"

function Http() {

    const [peticionGet, setPeticionGet] = useState([])

    useEffect(() => {
        fetch('http://192.168.0.59:8081/api/utilidades/fechas-corte')
            .then(response => response.json())
            .then(data => setPeticionGet(data.fechasDeCorte))
    }, [])


    return (
        <div>
            {
                peticionGet.map((fecha, index) => (
                    <div key={index}>
                        <p>{fecha.fechaCorte ? fecha.fechaCorte : 'noExisten datos'}</p>

                    </div>
                ))
            }
        </div>
    )
}

export default Http