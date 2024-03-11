// LibraryApp.tsx
import React, { useState } from "react";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import LoginComponent from "./UserComponents/LoginComponent";
import HeaderComponent from "./HeaderComponent";
import HomePage from "./HomePage";
import {SearchBooksPage} from "./SearchBookPage/SearchBooksPage";
import AddBookComponent from "./AdminPanelComponent/AddBookComponent";
import ErrorComponent from "./ErrorComponent";
import RegistryComponent from "./UserComponents/RegistryComponent";
import {BookCheckout} from "./BookCheckoutPage/BookCheckout";
import DashboardComponent from "./AdminPanelComponent/DashboardComponent";
import {EditBookComponent} from "./AdminPanelComponent/EditBookComponent";

const LibraryApp: React.FC = () => {
    const [userRole, setUserRole] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLogged, setIsLogged] = useState<boolean |null>(null);
    const navigate = useNavigate();
    const isAuthenticated = !!userRole;
    const isAdmin = userRole === "ADMIN";
    const handleLogout = () => {
        localStorage.removeItem("token");
        setUserRole(null);
        setIsLogged(null)
        setUserId(null)
        navigate("/");
    };
    window.addEventListener('message', function(event) {
        event.preventDefault(); // lub event.stopPropagation();
    });
    console.log(isLogged)
    console.log(setIsLogged)

    return (
        <div>
            <HeaderComponent userRole={userRole} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginComponent setUserRole={setUserRole} setIsLogged={setIsLogged} setUserId={setUserId} />} />
                <Route path="/books" element={<SearchBooksPage isLogged={isLogged} userId={userId} />}  />
                <Route path="/checkout/:bookId" element={<BookCheckout isLogged={isLogged} />} />
                <Route path={"/error"} element={<ErrorComponent/>}/>
                <Route path={"/register"} element={<RegistryComponent/>}/>
                <Route
                    path="/add-book"
                    element={isAuthenticated && isAdmin ? <AddBookComponent /> : <Navigate to="/error" />}
                />
                <Route
                    path="/edit/:bookId"
                    element={isAuthenticated && isAdmin ? <EditBookComponent/> : <Navigate to="/error" />}
                />
                <Route
                    path="/dashboard"
                    element={isAuthenticated && isAdmin ? <DashboardComponent /> : <Navigate to="/error" />}
                />
                {/* Dodaj inne trasy tutaj */}
            </Routes>
        </div>
    );
};

export default LibraryApp;
