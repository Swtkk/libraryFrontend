import React, { useState, ChangeEvent, FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { BookModel } from "../../model/BookModel";
import ApiClient from "../../api/ApiClient";

export const EditBookComponent: React.FC = () => {
    const location = useLocation();
    const { book } = location.state as {
        book: BookModel;
    };

    const [editedBook, setEditedBook] = useState<BookModel>({ ...book });
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setEditedBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await ApiClient.put(
                `/api/admin/books/${editedBook.id}`,
                editedBook,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            if (response.status === 200) {
                setMessage("Książka została zaktualizowana pomyślnie.")
                setErrorMessage("")
            } else {
                setErrorMessage("Edycja książki nie powiodła się.")
                setMessage("")
            }
        } catch (error) {
                setMessage("")
                setErrorMessage("Edycja książki nie powiodła się.")
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Edytuj książkę</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Tytuł:
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={editedBook.title}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Autor:
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={editedBook.author}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                    />
                </div>
                {/* Dodaj inne pola, takie jak gatunek, rok itp., zgodnie z modelem BookModel */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Gatunek:
                    </label>
                    <input
                        type="text"
                        name="genre"
                        value={editedBook.genre}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="hover:underline bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Zapisz zmiany
                </button>
            </form>
            <div className={"mt-3"}>{message}</div>
            <div className={"mt-3"}>{errorMessage}</div>
        </div>
    );
};
