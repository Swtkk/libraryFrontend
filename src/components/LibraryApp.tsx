import HeaderComponent from "./HeaderComponent";
import {Route, Routes, useNavigate} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import ErrorComponent from "./ErrorComponent";
import HomePage from "./HomePage";
import SearchBooksPage from "./SearchBookPage/SearchBooksPage";
import BookCheckout from "./BookCheckoutPage/BookCheckout";
import AddBookComponent from "./AddBookComponent";
import {oktaConfig} from "../lib/oktaConfig";
import {OktaAuth,toRelativeUrl} from '@okta/okta-auth-js'

    const oktaAuth = new OktaAuth(oktaConfig);
export default function LibraryApp() {

    const navigate = useNavigate()
    const customAuthHandler =()=>{
        navigate('/login')
    }

    const restoreOriginalUri = async (_oktaAuth: any, orignalUri: any)=>{
        navigate(toRelativeUrl(orignalUri || '/', window.location.origin))
    }

    return (
        <div>
            <HeaderComponent/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/login"} element={<LoginComponent/>} />
                <Route path={"*"} element={<ErrorComponent/>}/>
                <Route path={"/books"} element={<SearchBooksPage/>}/>
                <Route path={"/checkout/:bookId"} element={<BookCheckout/>}/>
                <Route path={"/add-book"} element={<AddBookComponent/>}/>
            </Routes>
        </div>
    );
}