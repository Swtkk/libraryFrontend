import React, {useEffect, useState} from "react";
import { BookModel } from "../../model/BookModel";
import {Link, useLocation} from "react-router-dom";
import { BookCheckoutAndReview } from "./BookCheckoutAndReview";
import { ReviewModel } from "../../model/ReviewModel";
import ApiClient from "../../api/ApiClient";
import LoadingComponent from "../utils/LoadingComponent";
import { LatestReviews } from "./LatestReviews";
import CIcon from "@coreui/icons-react";
import {cilArrowLeft} from "@coreui/icons";
interface BookCheckoutAndReviewProps {
    isLogged: boolean | null;
    name: string | null;
}

export const BookCheckout: React.FC<BookCheckoutAndReviewProps> = ({ isLogged, name }) => {
    const location = useLocation();
    const { bookTitle, bookAuthor, simpleThumb, book } = location.state as {
        bookTitle: string;
        bookAuthor: string;
        simpleThumb: string;
        book: BookModel;
    };
    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [isLoadingReview, setIsLoadingReview] = useState(true);
    const [newReviewText, setNewReviewText] = useState("");

    useEffect(() => {
        const fetchBookReviews = async () => {
            try {
                const response = await ApiClient.get(`/api/public/user/${book.id}`);
                setReviews(response.data);
            } catch (error) {
                console.error("Error while fetching reviews:", error);
            } finally {
                setIsLoadingReview(false);
            }
        };
        fetchBookReviews();
    }, [book.id]);

    const handleAddReview = async (bookId: string) => {
        try {
            const response = await ApiClient.post(`/api/user/review/${bookId}`, {
                body: newReviewText,
                userName: name

            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            });
            const newReview: ReviewModel = response.data;
            setReviews((prevReviews) => [...prevReviews, newReview]);
            setNewReviewText(""); // Wyczyszczenie pola po dodaniu recenzji
        } catch (error) {
            console.error("Error while adding review:", error);
        }
    };

    if (isLoadingReview) {
        return <LoadingComponent />;
    }

    return (
        <div className="mx-auto max-w-7xl p-4">
            <div className="p-4 text-left">
                <Link to="/books" className=" hover:underline
                bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-2 rounded focus:outline-none no-underline focus:shadow-outline w-full
                "> <CIcon icon={cilArrowLeft} />  Wróć do poprzedniej strony</Link>
            </div>
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-center gap-4">
                <div className={"flex-col justify-center items-center"}>
                    <div className="flex-shrink-0">
                        <img
                            src={simpleThumb ? simpleThumb : require('../../images/biblioteka.jpg')}
                            className="w-56 h-88"
                            alt='Book'
                        />
                    </div>
                </div>
                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-bold">{bookTitle}</h2>
                    <h5 className="text-lg font-semibold">Autor: {bookAuthor}</h5>
                    <p className="mt-2 text-sm">
                        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum
                    </p>
                </div>
                <BookCheckoutAndReview book={book} isLoggedIn={isLogged} />
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Dodaj komentarz:</h3>
                {isLogged ? (
                    <>
                        <textarea
                            value={newReviewText}
                            onChange={(e) => setNewReviewText(e.target.value)}
                            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md resize-none"
                            placeholder="Dodaj nowy komentarz..."
                        />
                        <button
                            onClick={() => handleAddReview(book.id)}
                            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                            Dodaj komentarz
                        </button>
                    </>
                ) : (
                    <Link to={"/login"}
                        className="no-underline hover:underline mt-2 bg-gray-300 text-gray-600 py-2 px-4 rounded-md cursor-pointer"
                    >
                        Zaloguj się, aby dodać komentarz
                    </Link>
                )}
            </div>
            <LatestReviews reviews={reviews} bookId={book.id} />
        </div>
    );
};
