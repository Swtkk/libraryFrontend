import React from "react";
import { BookModel } from "../../model/BookModel";
import { Link } from "react-router-dom";

interface BookCheckoutAndReviewProps {
    book: BookModel;
    isLoggedIn: boolean | null;
}

export const BookCheckoutAndReview: React.FC<BookCheckoutAndReviewProps> = ({ book, isLoggedIn }) => {
    return (
        <div className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 flex flex-col w-full lg:w-1/3">
            <hr />
            <div className="mb-2">
                <span className="text-gray-700 text-sm">0/5 books checked out</span>
            </div>
            {isLoggedIn ? (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none no-underline focus:shadow-outline w-full">
                    Dodaj do ulubionych
                </button>
            ) : (
                <Link className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none no-underline focus:shadow-outline w-full" to={"/login"}>
                    Zaloguj
                </Link>
            )}
            <div className="text-gray-600 text-xs italic mt-2">
                This number can change until placing order has been complete.
            </div>
            <hr />
        </div>
    );
};
