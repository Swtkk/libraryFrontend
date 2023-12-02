import React, {ChangeEvent, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    function UsernameChange(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function PasswordChange(event: ChangeEvent<HTMLInputElement> ) {
        setPassword(event.target.value);
    }

    function handleSubmit() {

        if(username ==='marcin' && password ==='123'){
            setErrorMessage(false)
            navigate(`/welcome/${username}`);
        }else{
            setErrorMessage(true)
        }
    }

    return (
        <div className="mt-16 flex flex-col items-center">
            {errorMessage && <div className={"errorMessage"}>Logowanie nieudane sprawdź swoje dane</div>}
            <h1 className="text-3xl p-3">Zaloguj się</h1>
            <h2 className="mt-2">Przejdź do biblioteki</h2>
            <div className="mt-4">
                <div className="mb-4">
                    <label htmlFor="username" className=" block text-sm font-medium text-gray-400">
                        Nazwa użytkownika:
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={UsernameChange}
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
                        onChange={PasswordChange}
                        className="text-black mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                    />
                </div>
                <div>
                    <button
                        className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                        onClick={handleSubmit}
                        type="button"

                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}