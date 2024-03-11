import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
import ApiClient from "../../api/ApiClient";
import { BookModel } from "../../model/BookModel";

const AddBook = () => {
    const [book, setBook] = useState<BookModel>({
        id: "",
        author: "",
        title: "",
        kind: "",
        genre: "",
        simpleThumb: "",
    });
    const [genres, setGenres] = useState<string[]>([]);
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await ApiClient.get("/api/public/books"); // Zastąp to odpowiednim endpointem API
                // setGenres(response.data.)
                const genreArr = response.data.map((book:any) => book.genre);
                // @ts-ignore
                const uniqueGenres = [...new Set(genreArr)];
                setGenres(uniqueGenres);
            } catch (error) {
                console.error("Wystąpił błąd podczas pobierania gatunków:", error);
            }
        };

        fetchGenres();
    }, []);

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({ ...prevBook, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await ApiClient.post(
                "/api/admin/add-book",
                {
                    ...book,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            if (response.status === 200) {
                setBook({
                    id: "",
                    author: "",
                    title: "",
                    kind: "",
                    genre: "",
                    simpleThumb: "",
                });
                setMessage("Pomyślnie dodano książkę")
                setErrorMessage("")
            } else {
                console.error("Dodawanie książki nie powiodło się.");
            setErrorMessage("Wystąpił błąd")
            }
        } catch (error) {
            console.error("Wystąpił błąd:", error);
            setErrorMessage("Wystąpił błąd")
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Dodaj nową książkę</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Tytuł:
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={book.title}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-lg block w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Autor:
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={book.author}
                        onChange={handleInputChange}
                        required
                        className=" mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-300 focus:border-2 focus:shadow-lg   block w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Gatunek:</label>
                    <select
                        name="genre"
                        value={book.genre}
                        onChange={handleInputChange}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none  focus:shadow-lg block w-full"
                    >
                        <option value="" disabled>
                            Wybierz gatunek
                        </option>
                        {genres && genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        URL do prostego obrazka miniatury:
                    </label>
                    <input
                        type="text"
                        name="simpleThumb"
                        value={book.simpleThumb}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-lg block w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Dodaj książkę
                </button>
            </form>
            <div className={"mt-4"}> {message}</div>
            <div className={"mt-4"}> {errorMessage}</div>
        </div>
    );
};

export default AddBook;
