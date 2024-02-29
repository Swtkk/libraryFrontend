import React from "react";
import {BookModel} from "../../model/BookModel";

export const BookCheckoutAndReview: React.FC<{ book: BookModel }> = (props) => {
    return (
        <div className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 flex flex-col w-full lg:w-1/3">
            <hr/>
            <div className="mb-2">
                <span className="text-gray-700 text-sm">0/5 books checked out</span>
            </div>

            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Sign in
            </button>
            <div className="text-gray-600 text-xs italic mt-2">
                This number can change until placing order has been complete.
            </div>
            <div className="text-gray-600 text-xs italic mt-2">
                Sign in to be able to leave a review.
            </div>
            <hr/>
        </div>
    );
};
