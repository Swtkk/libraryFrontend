import {useEffect, useState} from "react";
import {BookModel} from "../../model/BookModel";
import {useLocation, useParams} from "react-router-dom";
import {StarReview} from "../utils/StarReview";
import {BookCheckoutAndReview} from "./BookCheckoutAndReview";
import {ReviewModel} from "../../model/ReviewModel";
import ApiClient from "../../api/ApiClient";
import LoadingComponent from "../utils/LoadingComponent";
import {LatestReviews} from "./LatestReviews";
interface BookCheckoutAndReviewProps {
    isLogged: boolean | null;

}
export const  BookCheckout:React.FC<BookCheckoutAndReviewProps> =({isLogged})=> {
    const location = useLocation();
    const {bookTitle, bookAuthor, simpleThumb, book} = location.state as {
        bookTitle: string;
        bookAuthor: string;
        simpleThumb: string;
        book: BookModel;
    };
    const [reviews, setReviews] = useState<ReviewModel[]>([])
    const [isLoadingReview, setIsLoadingReview] = useState(true);


    useEffect(() => {
        const fetchBookReviews = async () => {
            const reviewUrl: any = await ApiClient.get(`api/public/reviews/${book.id}`)

            const responseReviews = await fetch(reviewUrl)
            if (!responseReviews.ok) {
                throw new Error('Coś poszło nie tak :/')
            }
            const responseData = await reviewUrl.data
            const loadedReviews: ReviewModel[] = []

            for (const key in responseData) {
                loadedReviews.push({
                    id: responseData[key].id,
                    userEmail: responseData[key].userEmail,
                    date: responseData[key].date,
                    body: responseData[key].body,
                    bookId: responseData[key].bookId
                })
            }
            setReviews(loadedReviews)
            setIsLoadingReview(false)
        }
        fetchBookReviews().catch(() => {
            setIsLoadingReview(false)
        })
    }, []);

    if (isLoadingReview) {
        return <LoadingComponent/>;
    }
    return (
        <div className="mx-auto max-w-7xl p-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                <div className={"flex-col justify-center items-center"}>
                    <div className="flex-shrink-0">
                        <img
                            src={simpleThumb ? simpleThumb : require('../../images/biblioteka.jpg')}
                            className="w-56 h-88"
                            alt='Book'
                        />
                    </div>
                    <StarReview rating={1.5} size={32}/>

                </div>
                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-bold">{bookTitle}</h2>
                    <h5 className="text-lg font-semibold">Autor: {bookAuthor}</h5>
                    <p className="mt-2 text-sm">
                        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum
                    </p>
                </div>
                <BookCheckoutAndReview book={book} isLoggedIn={isLogged}/>
            </div>
            <LatestReviews reviews={reviews} bookId={book.id}/>
        </div>
    );
}
