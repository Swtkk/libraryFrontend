import {BookModel} from "../../model/BookModel";
import {Link} from "react-router-dom";
import ApiClient from "../../api/ApiClient";
import {useEffect, useState} from "react";

interface IsUserLogged {
    book: BookModel;
    isLogged: boolean | null;
    userId: string | null;
}

export const SearchBook: React.FC<IsUserLogged> = (props) => {
    const {isLogged, userId} = props;
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        const checkIfFavorite = async () => {
            try {
                const response = await ApiClient.get(`/api/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const userFavorites = response.data.myFavorite;
                for (let i = 0; i <= userFavorites.length; i++) {
                    if (userFavorites[i].id === props.book.id) {
                        setIsFavorite(true)
                    }
                }
            } catch (error) {
                console.error("Błąd podczas sprawdzania ulubionych:", error);
            }
        };

        checkIfFavorite();
    }, [props.book.id, userId]);
    const handleToggleFavorite = async () => {
        try {
            if (isFavorite) {
                await ApiClient.delete(
                    `api/user/${userId}/${props.book.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                );
            } else {
                await ApiClient.post(
                    `/api/user/${userId}/${props.book.id}`,
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        data: {bookId: props.book.id},
                    }
                );
            }

            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Błąd podczas aktualizacji ulubionych:", error);
        }
    };

    return (
        <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="d-none d-lg-block">
                        {props.book.simpleThumb ? (
                            <img
                                src={props.book.simpleThumb}
                                width="123"
                                height="196"
                                alt="Book"
                            />
                        ) : (
                            <img
                                src={require("../../images/notFound.jpg")}
                                width="123"
                                height="196"
                                alt="Book"
                            />
                        )}
                    </div>
                    <div className="d-lg-none d-flex justify-content-center align-items-center">
                        {props.book.simpleThumb ? (
                            <img
                                src={props.book.simpleThumb}
                                width="123"
                                height="196"
                                alt="Book"
                            />
                        ) : (
                            <img
                                src={require("../../images/notFound.jpg")}
                                width="123"
                                height="196"
                                alt="Book"
                            />
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-left card-body">
                        <h6 className="card-title">
                            Autor: {props.book.author}
                        </h6>
                        <h4 className={"mt-3"}>"{props.book.title}"</h4>
                        <p className="card-text">
                            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor
                            sit amet, consectetur adipis lorem ipsum dolor sit amet,
                            consectetur adipis lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor
                            sit amet, consectetur adipis
                        </p>
                    </div>
                </div>
                <div className="col-md-4 flex flex-col md:flex justify-center items-center">
                    <div className="flex justify-center items-center flex-wrap w-3/4">
                        <button className="bg-lime-500 hover:bg-lime-700 text-white py-2 px-4 rounded-full m-2 w-full">
                            <Link
                                to={`/checkout/${props.book.id}`}
                                state={{
                                    bookTitle: props.book.title,
                                    bookAuthor: props.book.author,
                                    simpleThumb: props.book.simpleThumb,
                                    book: props.book,
                                }}
                                className="no-underline hover:underline text-white text-center"
                            >
                                Wyświetl opis
                            </Link>
                        </button>
                        {isLogged && (
                            <button
                                className={`${
                                    isFavorite ? "hover:underline bg-red-500" : "bg-yellow-500"
                                } hover:bg-yellow-700 text-white hover:underline py-2 px-4 rounded-full m-2 w-full`}
                                onClick={handleToggleFavorite}
                            >
                                {isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
