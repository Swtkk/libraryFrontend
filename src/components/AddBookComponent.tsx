import React, {ChangeEvent, useState} from "react";

export default function AddBookComponent() {
    const [bookTitle, setBookTitle] = useState("")

    function bookTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setBookTitle(event.target.value)
    }

    return (
        <div
            className="flex justify-center items-center"> {/* Flexbox dla wyśrodkowania w poziomie i pionie na całej wysokości ekranu */}
            <div
                className="flex flex-col justify-center items-center space-y-3"> {/* Flexbox kolumnowy z odstępem pionowym między elementami */}
                <label htmlFor="bookTitle"
                       className="text-sm font-medium text-gray-700"> {/* Zmieniono kolor tekstu na ciemniejszy dla lepszej widoczności */}
                    Tytuł książki:
                </label>
                <input
                    id="bookTitle"
                    type="text"
                    name="bookTitle"
                    value={bookTitle}
                    onChange={bookTitleChange}
                    className="text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full max-w-xs"
                />
            </div>
        </div>
    );
}
