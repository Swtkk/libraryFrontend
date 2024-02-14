import {useState} from "react";
import {BookModel} from "../../model/BookModel";
import {useLocation, useParams} from "react-router-dom";

export default function BookCheckout() {
    const {bookId} = useParams();
    const location = useLocation();
    const {bookTitle, bookAuthor, simpleThumb} = location.state as {
        bookTitle: string;
        bookAuthor: string;
        simpleThumb: string;
    };

    const [book, setBook] = useState<BookModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    return (
        <div className="mx-auto max-w-7xl p-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                <div className="flex-shrink-0">
                    <img
                        src={simpleThumb ? simpleThumb : require('../../images/biblioteka.jpg')}
                        className="w-56 h-88"
                        alt='Book'
                    />
                </div>

                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-bold">{bookTitle}</h2>
                    <h5 className="text-lg font-semibold">{bookAuthor}</h5>
                    <p className="mt-2 text-sm">
                        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum
                    </p>
                </div>
            </div>
        </div>
    );
}
