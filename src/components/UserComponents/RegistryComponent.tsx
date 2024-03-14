import React, {useState} from 'react';
import axios from 'axios';
import ApiClient from "../../api/ApiClient";


const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [succesMessage, setSuccesMessage] = useState("")
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await ApiClient.post("/api/register", {
                email,
                password,
                role: "USER"
            });
            console.log('User registered successfully:', response.data);
            setSuccesMessage("Uzytkownik zarejestrowany pomyślnie")
            setErrorMessage("")
            // Dodaj odpowiednie zachowanie po zarejestrowaniu użytkownika, np. przekierowanie na inną stronę
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('Nie udało się zarejestrowac uzytkownika');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <form onSubmit={handleSubmit} className="bg-gray-100/60 shadow-md rounded px-7 pt-6 pb-8 mb-4">
                <h2 className="text-2xl mb-4">Formularz Rejestracyjny</h2>
                {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                <div className="flex-col mb-4">
                    <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <div className={"flex"}>
                    <div className={"w-3/4"}>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    </div>
                    <div className="w-1/4 flex ml-2 items-center justify-center  shadow border rounded  py-2 px-4 text-gray-700 bg-gray-800/40 font-bold leading-tight focus:outline-none focus:shadow-outline">@gmail.com</div>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Zarejestruj się
                </button>
            </form>
            <div>{succesMessage}</div>
        </div>
    );
};

export default RegistrationForm;
