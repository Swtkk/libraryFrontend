import ExploreBooksComponent from "./ExploreBooksComponent";
import CarouselComponent from "./CarouselComponent";
import BookCategoryComponent from "./BookCategoryComponent";
import RegisterNowComponent from "./RegisterNowComponent";

export default function HomePage() {
    return (
        <div>
            <ExploreBooksComponent/>
            <CarouselComponent/>
            <BookCategoryComponent/>
            <RegisterNowComponent/>
        </div>
    );
}