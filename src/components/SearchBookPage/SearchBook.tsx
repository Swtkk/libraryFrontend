import {BookModel} from "../../model/BookModel";
import {Link} from "react-router-dom";
import ApiClient from "../../api/ApiClient";
import {useEffect, useState} from "react";
interface IsUserLogged {
    book: BookModel,
    isLogged: boolean | null;
    userId: string | null
}
export const SearchBook: React.FC<IsUserLogged> = (props) => {
    const bookId = props.book.id
    const bookTitle = props.book.title
    const bookAuthor = props.book.author
    const {book, isLogged,userId} = props

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Sprawdzenie, czy książka jest w ulubionych (np. na podstawie danych z API)
        // Tutaj możesz użyć odpowiedniego endpointu API do sprawdzenia statusu ulubionych dla konkretnej książki i zaktualizować stan isFavorite
        // Przykładowa implementacja:
        const checkIfFavorite = async () => {
            try {
                // Załóżmy, że endpoint '/api/user/favorites' zwraca listę ID ulubionych książek dla zalogowanego użytkownika
                const response = await ApiClient.get(`/api/user/${userId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        }
                    });
                console.log(response.data)

            } catch (error) {
                console.error("Błąd podczas sprawdzania ulubionych:", error);
            }
        };

        checkIfFavorite();
    }, [props.book.id]);

    const handleToggleFavorite = async () => {
        try {
            if (isFavorite) {
                // Usuwanie z ulubionych
                await ApiClient.delete(`/api/user/remove-favorite/${props.book.id}`);
            } else {
                // Dodawanie do ulubionych
                await ApiClient.post("/api/user/add-favorite", { bookId: props.book.id });
            }

            // Aktualizacja stanu isFavorite
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Błąd podczas aktualizacji ulubionych:", error);
        }
    };

    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        {props.book.simpleThumb ?
                            <img src={props.book.simpleThumb}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                            :
                            <img src={require('../../images/notFound.jpg')}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                        }
                    </div>
                    <div className='d-lg-none d-flex justify-content-center align-items-center'>
                        {props.book.simpleThumb ?
                            <img src={props.book.simpleThumb}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                            :
                            <img src={require('../../images/notFound.jpg')}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                        }
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='text-left card-body'>
                        <h6 className='card-title'>
                            Autor: {props.book.author}
                        </h6>
                        <h4 className={"mt-3"}>
                            "{props.book.title}"

                        </h4>
                        <p className='card-text'>
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                        </p>
                    </div>
                </div>
                <div className='col-md-4 flex flex-col md:flex justify-center items-center'>
                    <div className="flex justify-center items-center flex-wrap w-3/4">
                        <button className="bg-lime-500 hover:bg-lime-700 text-white  py-2 px-4 rounded-full m-2 w-full">
                            <Link
                                to={`/checkout/${props.book.id}`}
                                state={{ bookTitle: props.book.title, bookAuthor: props.book.author, simpleThumb: props.book.simpleThumb, book: props.book }}
                                className="no-underline hover:underline text-white text-center"
                            >Wyświetl opis</Link>
                        </button>
                        {isLogged && <button
                            className={`${
                                isFavorite ? "hover:underline bg-red-500" : "bg-yellow-500"
                            } hover:bg-yellow-700 text-white hover:underline py-2 px-4 rounded-full m-2 w-full`}
                            onClick={handleToggleFavorite}
                        >
                            {isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
                        </button>}
                    </div>
                </div>

            </div>
        </div>
    );
}
