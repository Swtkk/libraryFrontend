import React, { ChangeEvent, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

interface LoginComponentProps {
    setUserRole: (role: string) => void;
    setIsLogged: (isLogged: boolean) => void;
    setUserId:(userId: string)=>void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ setUserRole,setIsLogged,setUserId }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();
    window.addEventListener('message', function(event) {
        event.preventDefault(); // lub event.stopPropagation();
    });

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/login", {
                email: username,
                password: password,
            });

            if (response.status === 200 && response.data.token !== undefined) {
                const res = await axios.get(`http://localhost:8080/api/public/${username}`);
                const token = response.data.token;
                localStorage.setItem("token", token);
                console.log(res.data.roles);
                console.log(res.data.id)
                const userRole = res.data.roles;
                setUserRole(userRole);
                setIsLogged(true);
                setUserId(res.data.id);
                navigate(`/`);
            } else {
                setErrorMessage(true);
            }
        } catch (error) {
            console.error("Wystąpił błąd:", error);
        }
    };

    return (
        <div className="mt-16 flex flex-col items-center">
            {errorMessage && <div className={"errorMessage"}>Logowanie nieudane, sprawdź swoje dane</div>}
            <h1 className="text-3xl p-3">Zaloguj się</h1>
            <h2 className="mt-2">Przejdź do biblioteki</h2>
            <div className="mt-4">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-400">
                        Nazwa użytkownika:
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        className="text-black mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                        Hasło:
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="text-black mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                    />
                </div>
                <div>
                    <button
                        className="hover:underline bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                        onClick={handleSubmit}
                        type="button"
                    >
                        Login
                    </button>
                </div>
                <div className={"mt-3"}>
                    Nie posiadasz konta? <Link to={"/register"}>Zarejestruj się</Link> teraz!
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
