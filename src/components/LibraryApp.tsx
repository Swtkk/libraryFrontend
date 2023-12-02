import HeaderComponent from "./HeaderComponent";
import ExploreBooksComponent from "./ExploreBooksComponent";
import CarouselComponent from "./CarouselComponent";
import {Route, Routes} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import ErrorComponent from "./ErrorComponent";
import BookCategoryComponent from "./BookCategoryComponent";

export default function LibraryApp() {
    return (
        <div>
            <HeaderComponent/>
            <Routes>
                <Route path={"/"} element={<ExploreBooksComponent/>}/>
                <Route path={"/login"} element={<LoginComponent/>} />
                <Route path={"*"} element={<ErrorComponent/>}/>
            </Routes>

        </div>
    );
}