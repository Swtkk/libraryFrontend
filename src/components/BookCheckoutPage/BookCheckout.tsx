import {useState} from "react";
import {BookModel} from "../../model/BookModel";
import {useLocation, useParams} from "react-router-dom";

export default function BookCheckout() {
    const { bookId } = useParams();
    const location = useLocation();
    const { bookTitle, bookAuthor } = location.state as { bookTitle: string; bookAuthor: string };

    const [book,setBook] = useState<BookModel>()
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState(null)

    return (
        <div>Checkout Page {bookId} {bookTitle} {bookAuthor}</div>
    );
}