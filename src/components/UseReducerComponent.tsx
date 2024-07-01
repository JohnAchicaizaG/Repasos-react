import { useReducer } from "react"

const valorInicial = {
    value: 10
}

interface Inicial {
    value: number
}

type Action = | { type: 'incrementar' } | { type: 'decrementar' } | { type: 'multiplicar' };

function incremntador(state: Inicial, action: Action): Inicial {
    switch (action.type) {
        case "incrementar":
            return { value: state.value + 1 }
        case "decrementar":
            return { value: state.value - 1 }
        case "multiplicar":
            return { value: state.value * 2 }
        default:
            return { value: 0 }
    }
}



export const  ReducerComponent =() =>{

    const [state, dispatch] = useReducer(incremntador, valorInicial)
    return (
        <>
            <div className="bg-slate-400 h-[220px] w-full">

                <h1 className="text-center text-white text-3xl">Contador</h1>

                <div className="flex flex-col justify-center items-center mt-12">
                    <h2 className="text-2xl">{state.value}</h2>
                    <div className="space-x-2 mt-4">
                        <button className=" h-8 bg-indigo-700 w-24 rounded-md text-white" onClick={() => dispatch({ type: 'decrementar' })}> - </button>
                        <button className=" h-8 bg-indigo-700 w-24 rounded-md text-white" onClick={() => dispatch({ type: 'incrementar' })}> + </button>
                        <button className=" h-8 bg-indigo-700 w-24 rounded-md text-white" onClick={() => dispatch({ type: 'multiplicar' })}> * </button>
                    </div>
                </div>

            </div>
        </>
    )
}


export const  ReducerComponentDos = () => {

    const [state, dispatch] = useReducer(incremntador, valorInicial)

    
    return (
        <>
            <div className="bg-slate-400 h-[220px] w-full">

                <h1 className="text-center text-white text-3xl">Contador Dos</h1>

                <div className="flex flex-col justify-center items-center mt-12">
                    <h2 className="text-2xl">{state.value}</h2>
                    <div className="space-x-2 mt-4">
                        <button className=" h-8 bg-indigo-700 w-24 rounded-md text-white" onClick={() => dispatch({ type: 'decrementar' })}> - </button>
                        <button className=" h-8 bg-indigo-700 w-24 rounded-md text-white" onClick={() => dispatch({ type: 'incrementar' })}> + </button>
                        <button className=" h-8 bg-indigo-700 w-24 rounded-md text-white" onClick={() => dispatch({ type: 'multiplicar' })}> * </button>
                    </div>
                </div>

            </div>
        </>
    )
}

