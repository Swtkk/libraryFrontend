import { ReviewModel } from "../../model/ReviewModel";
import { Link } from "react-router-dom";
import ApiClient from "../../api/ApiClient";

export const LatestReviews: React.FC<{
    reviews: ReviewModel[],
    bookId: number | string | undefined,
    userRole: string | null,
    onDeleteReview: (reviewId: string) => void;

}> = (props) => {
    const deleteReview = async (reviewId: string) => {
        const confirmDelete = window.confirm('Czy na pewno chcesz usunąć komentarz?');
        if (confirmDelete) {
            try {
                await props.onDeleteReview(reviewId);
            } catch (error) {
                console.error("Error while deleting review:", error);
            }
        }
    };


    return (
        <div className="flex flex-col sm:flex-row mt-5">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:w-1/4">
                <h2 className="text-xl sm:text-2xl font-bold">Latest Reviews:</h2>
            </div>
            <div className="flex-grow text-left">
                {props.reviews.length > 0 ?
                    <>
                        {props.reviews.map((eachReview, index) => (
                            <div className={"flex items-center justify-between border-b-2 "}>
                                <div className={"col-sm-8 col-md-8"}>
                                <h5>{eachReview.userName ? `${eachReview.userName}` : "Unknow"}</h5>
                                <div className={"row"}>
                                    <div className={"col"}>
                                        {eachReview.date}

                                    </div>
                                </div>
                                <div className={"mt-2"}>
                                    <p>
                                        {eachReview.body}
                                    </p>
                                </div>
                                </div>
                                {props.userRole === "ADMIN" && <div className={"items-end"}>
                                    <button onClick={() => deleteReview(eachReview.id)} className={"hover:underline bg-red-500 text-white px-4 py-2 rounded-xl "}>Usuń komentarz</button>
                                </div>}
                            <hr/>
                            </div>
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
