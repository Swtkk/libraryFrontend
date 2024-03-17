import ExploreBooksComponent from "./ExploreBooksComponent";
import CarouselComponent from "./CarouselComponent";
import BookCategoryComponent from "./SearchBookPage/BookCategoryComponent";
import RegisterNowComponent from "./RegisterNowComponent";

export default function HomePage() {
    console.log(localStorage.getItem("token")); // Wyświetli zawartość przechowywaną pod kluczem "token"
    return (
        <div>
            <ExploreBooksComponent/>
            <CarouselComponent/>
            {/*<BookCategoryComponent/>*/}
            <RegisterNowComponent/>
        </div>
    );
}