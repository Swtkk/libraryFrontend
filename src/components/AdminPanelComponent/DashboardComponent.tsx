import {useEffect, useState} from 'react';
import {BookModel} from '../../model/BookModel';
import ApiClient from '../../api/ApiClient';
import LoadingComponent from '../utils/LoadingComponent';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from 'react-bootstrap/Pagination';
import {AdminSearchBook} from "./AdminSearchBook";

export default function SearchBooksPage() {
    const itemsPerPage: number = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [books, setBooks] = useState<BookModel[]>([]);
    const [httpError, setHttpError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchKind, setSearchKind] = useState('')
    //Ladowanie i pobieranie danych z backendu

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true)
                const baseUrl: any = await ApiClient.get('/api/public/books');
                const response = await fetch(baseUrl);
                // lapanie bledu przy pobieraniu
                if (!response.ok) {
                    console.error('Error:', response);
                    new Error('Something went wrong!');
                }

                const responseData = baseUrl.data
                const loadedBooks: BookModel[] = [];
                //wrzucanie do tablicy ksiazek i wykorzystanie useState zmiany stanu
                for (const key in responseData) {
                    loadedBooks.push({
                        id: responseData[key].id,
                        title: responseData[key].title,
                        author: responseData[key].author,
                        kind: responseData[key].kind,
                        genre: responseData[key].genre,
                        simpleThumb: responseData[key].simpleThumb,
                    });
                }

                setBooks(loadedBooks);
            } catch (error) {
                throw new Error('Something went wrong!');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks().catch((error: any) => {
            setHttpError(error.message);
        });
        //powrot na poczatek po zmianie strony
        window.scrollTo(0, 0);
    }, []);

    const handleDeleteBook = async (bookId: string) => {
        try {
            setLoadingSearch(true);
            const response = await ApiClient.delete(`/api/admin/books/${bookId}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }

            );

            if (!response) {
                console.error('Error:', response);
                throw new Error('Something went wrong!');
            }

            // Aktualizacja listy książek po usunięciu
            const updatedBooks = books.filter((book) => book.id !== bookId);
            setBooks(updatedBooks);
        } catch (error) {
            console.error('Something went wrong:', error);
        } finally {
            setLoadingSearch(false);
        }
    };
    const handleSearch = async () => {
        try {
            setLoadingSearch(true)
            const response = await ApiClient.get(`/api/public/books/search?title=${searchTerm}`);

            if (!response) {
                console.error('Error:', response);
                new Error('Something went wrong!');
            }

            const responseData = response.data;
            const searchedBooks: BookModel[] = [];

            for (const key in responseData) {
                searchedBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    kind: responseData[key].kind,
                    genre: responseData[key].genre,
                    simpleThumb: responseData[key].simpleThumb,
                });
            }

            setBooks(searchedBooks);
            setCurrentPage(1);
        } catch (error) {
            throw new Error('Something went wrong!');
        } finally {
            setLoadingSearch(false)
        }
    };

    const handleKind = async (kind: any) => {
        try {
            setSearchKind(kind)
            setLoadingSearch(true)
            const response = await ApiClient.get(`/api/public/books/kind?kind=${searchKind}`);

            if (!response) {
                console.error('Error:', response);
                new Error('Something went wrong!');
            }

            const responseData = response.data;
            const searchedKindBooks: BookModel[] = [];

            for (const key in responseData) {
                searchedKindBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    kind: responseData[key].kind,
                    genre: responseData[key].genre,
                    simpleThumb: responseData[key].simpleThumb,
                });
            }

            setBooks(searchedKindBooks);
            setCurrentPage(1);
        } catch (error) {
            throw new Error('Something went wrong!');
        } finally {
            setLoadingSearch(false)
        }
    };


    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }
    if (loading) {
        return <LoadingComponent/>;
    }


    //ustawienia paginacji
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // funkcja do zwracania aktualnej strony z wynikami
    const getCurrentPageItems = () => {
        const indexOfLastBook = currentPage * itemsPerPage;
        const indexOfFirstBook = indexOfLastBook - itemsPerPage;
        return books.slice(indexOfFirstBook, indexOfLastBook);
    };

    const renderBooks = getCurrentPageItems().map((book) => (
        <AdminSearchBook book={book} key={book.id} onDelete={handleDeleteBook}/>
    ));

    const totalPageCount = Math.ceil(books.length / itemsPerPage);

    const fetchPageNumbers = () => {
        const pageNeighbours = 2;
        const totalNumbers = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPageCount > totalBlocks) {
            let pages = [];
            const startPage = Math.max(1, currentPage - pageNeighbours);
            const endPage = Math.min(totalPageCount, currentPage + pageNeighbours);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            let paginationItems = [];

            if (currentPage > pageNeighbours + 1) {
                paginationItems.push(1);
                if (currentPage > pageNeighbours + 2) {
                    paginationItems.push('...');
                }
            }

            paginationItems = paginationItems.concat(pages);

            if (currentPage < totalPageCount - pageNeighbours) {
                if (currentPage < totalPageCount - pageNeighbours - 1) {
                    paginationItems.push('...');
                }
                paginationItems.push(totalPageCount);
            }

            return paginationItems;
        }
        window.scrollTo(0, 0);
        return Array.from({length: totalPageCount}, (_, i) => i + 1);
    };

    const pageNumbers = fetchPageNumbers();
    const indexOfLastBook = currentPage * itemsPerPage;
    const indexOfFirstBook = indexOfLastBook - itemsPerPage;
    let lastItem = indexOfLastBook <= books.length ? (itemsPerPage * currentPage) : books.length;

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <div className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-labelledby="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm((e.target.value))}
                        />
                        <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <div className="col-4">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Category
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleKind('epoch')} href="#">Epoch</Dropdown.Item>
                            <Dropdown.Item onClick={handleKind} href="#">Front End</Dropdown.Item>
                            <Dropdown.Item onClick={handleKind} href="#">Back End</Dropdown.Item>
                            <Dropdown.Item onClick={handleKind} href="#">Data</Dropdown.Item>
                            <Dropdown.Item onClick={handleKind} href="#">DevOps</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="mt-3">
                <h5>{loadingSearch ? '' : `Number of results: (${books.length})`}</h5>
            </div>
            <p>{loadingSearch ? '' : `${indexOfFirstBook + 1} to ${lastItem} of ${books.length} items:`}</p>

            {loadingSearch ? <div>Ładujemy Zawartość</div> : renderBooks}

            <div className="mt-3">
                <Pagination className={"flex justify-center"}>
                    {pageNumbers.map((number: any, index) => {
                        if (number === '...') {
                            return <Pagination.Ellipsis key={index}/>;
                        }

                        return (
                            <Pagination.Item
                                key={index}
                                active={number === currentPage}
                                onClick={() => paginate(number)}

                            >
                                {number}

                            </Pagination.Item>
                        );
                    })}
                </Pagination>
            </div>
        </div>
    );
};
