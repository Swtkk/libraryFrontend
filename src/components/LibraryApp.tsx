import HeaderComponent from "./HeaderComponent";
import {Route, Routes} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import ErrorComponent from "./ErrorComponent";
import HomePage from "./HomePage";
import SearchBooksPage from "./SearchBookPage/SearchBooksPage";
import BookCheckout from "./BookCheckoutPage/BookCheckout";
import FooterComponent from "./FooterComponent";
export default function LibraryApp() {
    return (
        <div>
            <HeaderComponent/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/login"} element={<LoginComponent/>} />
                <Route path={"*"} element={<ErrorComponent/>}/>
                <Route path={"/books"} element={<SearchBooksPage/>}/>
                <Route path={"/checkout/:bookId"} element={<BookCheckout/>}/>
            </Routes>
            <FooterComponent/>
        </div>
    );
}