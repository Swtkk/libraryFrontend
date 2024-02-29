import {ReviewModel} from "../../model/ReviewModel";

export const Review: React.FC<{
    review: ReviewModel
}> = (props) => {


    return (
        <div>
            <div className={"col-sm-8 col-md-8"}>
                <h5>{props.review.userEmail ? true : "Unknow"}</h5>
                <div className={"row"}>
                    <div className={"col"}>
                        {props.review.date}
                    </div>
                </div>
                <div className={"mt-2"}>
                    <p>
                        {props.review.body}
                    </p>
                </div>
            </div>
            <hr/>
        </div>
    );
};