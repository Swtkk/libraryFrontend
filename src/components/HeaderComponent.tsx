import {useState} from "react";
import {Link} from "react-router-dom";

export default function HeaderComponent() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header className="bg-blue-500 p-2 text-white w-full ">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={"/"}>
                    <div className="flex items-end">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dd5cxfx-d2ab96af-5834-4111-b278-8dfad917aadc.png/v1/fill/w_900,h_723/fire_book_on_a_transparent_background_by_prussiaart_dd5cxfx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIzIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kZDVjeGZ4LWQyYWI5NmFmLTU4MzQtNDExMS1iMjc4LThkZmFkOTE3YWFkYy5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.CIS7V6Ly_Qzttp7wVHQMioHLGP8k0HQFvGst1ZGlvYg"
                             alt="Biblioteka"
                             className="h-12 w-12 mr-4" />
                        <h1 className="text-xl text-black font-bold no-underline">Biblioteka</h1>
                    </div>
                </Link>

                <nav className="hidden md:flex space-x-4">
                    <Link to="/books" className="no-underline hover:underline text-white">Lista książek</Link>
                    <Link to="/add-book" className="no-underline hover:underline text-white">Dodaj książkę</Link>
                    <Link to="/favorites" className="no-underline hover:underline text-white">Moje ulubione</Link>
                </nav>

                <div className="hidden md:flex space-x-4">
                    <Link to="/login" className="hover:underline hover:bg-blue-200 no-underline bg-white text-blue-500  px-4 py-2 rounded-full">Login</Link>
                    <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">Logout</button>
                </div>

                <div className="md:hidden z-50 ">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <svg className={`h-6 w-6  ${isMobileMenuOpen ? 'hidden' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                        <svg className={`h-6 w-6  ${isMobileMenuOpen ? '' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden absolute z-40 w-1/2 h-full top-0 right-0 bg-blue-500 p-4 space-y-4 mt-10 transition-all duration-700 ${isMobileMenuOpen ? 'left-1/2' : 'left-full pointer-events-none'}`}>
                <Link to="/books" className="text-white block">Lista książek</Link>
                <Link to="/add-book" className="text-white block">Dodaj książkę</Link>
                <Link to="/favorites" className="text-white block">Moje ulubione</Link>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">Login</button>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">Logout</button>
            </div>

        </header>
    );
}