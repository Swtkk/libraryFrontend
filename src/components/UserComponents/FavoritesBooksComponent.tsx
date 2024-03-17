import React, { useEffect, useState } from "react";
import ApiClient from "../../api/ApiClient";
import { BookModel } from "../../model/BookModel";

interface FavoritesBooksComponentProps {
    userId: string | null;
}

export const FavoritesBooksComponent: React.FC<FavoritesBooksComponentProps> = ({
                                                                                    userId,
                                                                                }) => {
    const [favoriteBooks, setFavoriteBooks] = useState<BookModel[]>([]);

    useEffect(() => {
        const fetchFavoriteBooks = async () => {
            try {
                if (userId) {
                    const response = await ApiClient.get(`/api/user/${userId}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    });
                    const userFavorites = response.data.myFavorite;
                    console.log(userFavorites)
                    setFavoriteBooks(userFavorites);
                }
            } catch (error) {
                console.error("Błąd podczas pobierania ulubionych:", error);
            }
        };

        fetchFavoriteBooks();
    }, [userId]);

    const deleteFromFavorite = async (bookId: string) => {
        try {

                await ApiClient.delete(
                    `api/user/${userId}/${bookId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );

            setFavoriteBooks((prevBooks) =>
                prevBooks.filter((book) => book.id !== bookId)
            );
        } catch (error) {
            console.error("Błąd podczas aktualizacji ulubionych:", error);
        }
    };
    return (
        <div className="container mx-auto mt-3">
            <h1 className="text-3xl font-semibold mb-4">Ulubione Książki</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {favoriteBooks.map((book) => (
                    <div
                        key={book.id}
                        className="card mt-3 flex-col items-center justify-center shadow p-3 mb-3 bg-body rounded"
                    >
                        {/* Reszta kodu do wyświetlenia informacji o książce */}
                        <h4 className="mt-3">{book.title}</h4>
                        <p>Autor: {book.author}</p>
                        {/* Dodaj inne informacje, które chcesz wyświetlić */}
                <button
                    className={"p-2 self-center rounded-xl hover:underline bg-red-500"} onClick={()=> deleteFromFavorite(book.id)}>
                    Usuń z ulubionych
                </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
