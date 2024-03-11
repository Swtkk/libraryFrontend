import React, { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderComponentProps {
    userRole: string | null;
    handleLogout: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ userRole, handleLogout }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-blue-500 py-2 text-white w-full">
            <div className="container  flex justify-between items-center">
                <Link to={"/"}>
                    <div className="flex items-end">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dd5cxfx-d2ab96af-5834-4111-b278-8dfad917aadc.png/v1/fill/w_900,h_723/fire_book_on_a_transparent_background_by_prussiaart_dd5cxfx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIzIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kZDVjeGZ4LWQyYWI5NmFmLTU4MzQtNDExMS1iMjc4LThkZmFkOTE3YWFkYy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CIS7V6Ly_Qzttp7wVHQMioHLGP8k0HQFvGst1ZGlvYg"
                            alt="Biblioteka"
                            className="h-12 w-12 mr-4"
                        />
                        <h1 className="text-xl text-black font-bold no-underline">Biblioteka</h1>
                    </div>
                </Link>

                {/* Mobile navigation */}
                <div className="md:hidden z-50 ">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <svg
                            className={`h-6 w-6  ${isMobileMenuOpen ? "hidden" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                        <svg
                            className={`h-6 w-6  ${isMobileMenuOpen ? "" : "hidden"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex flex-1 justify-around items-center space-x-4">
                    <div className={"flex gap-5"}>
                        <Link to="/books" className="no-underline hover:underline text-white
                        p-2 bg-gray-500/20 border rounded">
                            Lista książek
                        </Link>
                        {userRole === "USER" && <Link to="/favorites" className="
                        no-underline hover:underline text-white
                        p-2 bg-gray-500/20 border rounded">
                            Moje ulubione
                        </Link>}
                        {userRole === "ADMIN" && (
                            <Link to="/dashboard" className="no-underline hover:underline text-white
                        p-2 bg-gray-500/20 border rounded">
                                Panel Admina
                            </Link>
                        )}
                        {userRole === "ADMIN" && (
                            <Link to="/add-book" className="no-underline hover:underline text-white
                        p-2 bg-gray-500/20 border rounded">
                                Dodaj książkę
                            </Link>
                        )}
                    </div>

                    <div>
                        {userRole ? (
                            <button
                                className="hover:underline bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100"
                                onClick={handleLogout}
                            >
                                Wyloguj
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="hover:underline hover:bg-blue-200 no-underline bg-white text-blue-500  px-4 py-2 rounded-full"
                            >
                                Zaloguj
                            </Link>
                        )}
                    </div>
                </nav>


            </div>

            {/* Mobile navigation menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-blue-500`}>
                <div className="flex flex-col space-y-2">
                    <Link
                        to="/books"
                        className="block p-2 text-white hover:bg-blue-400 rounded-md"
                        onClick={toggleMobileMenu}
                    >
                        Lista książek
                    </Link>
                    {userRole ==="USER" &&(<Link
                        to="/favorites"
                        className="block p-2 text-white hover:bg-blue-400 rounded-md"
                        onClick={toggleMobileMenu}
                    >
                        Moje ulubione
                    </Link>)}
                    {userRole === "ADMIN" && (
                        <Link
                            to="/dashboard"
                            className="block p-2 text-white hover:bg-blue-400 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Panel Admina
                        </Link>
                    )}
                    {userRole === "ADMIN" && (
                        <Link
                            to="/add-book"
                            className="block p-2 text-white hover:bg-blue-400 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Dodaj książkę
                        </Link>
                    )}
                    {userRole ? (
                        <button
                            className="block p-2 text-white hover:bg-blue-400 rounded-md"
                            onClick={() => {
                                handleLogout();
                                toggleMobileMenu();
                            }}
                        >
                            Wyloguj
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="block p-2 text-white hover:bg-blue-400 rounded-md"
                            onClick={toggleMobileMenu}
                        >
                            Zaloguj
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
