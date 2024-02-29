import {ReviewModel} from "../../model/ReviewModel";
import {Link} from "react-router-dom";
import {Review} from "../utils/Review";

export const LatestReviews: React.FC<{
    reviews: ReviewModel[],
    bookId: number | string | undefined,
}> = (props) => {
    return (
        <div className="flex flex-col sm:flex-row mt-5">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:w-1/4">
                <h2 className="text-xl sm:text-2xl font-bold">Latest Reviews:</h2>
            </div>
            <div className="flex-grow text-left">
                {props.reviews.length > 0 ?
                    <>
                        {props.reviews.slice(0, 3).map(eachReview => (
                            <Review review={eachReview} key={eachReview.id}/>
                        ))}

                        <div className="mt-3 text-center sm:text-left">
                            <Link to={"#"} className="inline-block px-4 py-2 bg-main-color text-white rounded-md">
                                Read all reviews
                            </Link>
                        </div>
                    </>
                    :
                    <div className={"text-center mt-2"}>
                        <p className="text-lg">
                            Currently there are no reviews for this book.
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};
