import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface User {
    email: string,
    password: string
}


function Login() {

    const navigate = useNavigate()
    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    })

    const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        navigate('/home')
        console.log('💻🔥 21, login.tsx: ', user);
    }

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your email"
                            onChange={handleForm}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your password"
                            onChange={handleForm}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        onClick={handleButton}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
