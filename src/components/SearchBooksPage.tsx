import { useEffect, useState } from 'react';
import { BookModel } from '../model/BookModel';
import {SearchBook} from "./SearchBook";
import ApiClient from "../api/ApiClient";
import LoadingComponent from "./LoadingComponent";
import Dropdown from 'react-bootstrap/Dropdown';
export const SearchBooksPage = () => {

    const [books, setBooks] = useState<BookModel[]>([]);
    const [httpError, setHttpError] = useState(null);
    const [loading,setLoading] =useState(true)
    useEffect(() => {
        const fetchBooks = async () => {
            try {


                const baseUrl: any = await ApiClient.get("/api/books")

                const response = await fetch(baseUrl);

                if (!response.ok) {
                    console.error('Error:', response);
                    throw new Error('Something went wrong!');
                }
                const responseData = baseUrl.data
                const loadedBooks: BookModel[] = [];
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
            }
            catch(error){
                throw new Error('Something went wrong!');
            }
            finally {
                setLoading(false)
            }
        };



        fetchBooks().catch((error: any) => {
            setHttpError(error.message);
        })
        window.scrollTo(0, 0);
    }, []);

    if(loading){
        return <div>
            <LoadingComponent/>
        </div>
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }
    return (
        <div>
            <div className='container'>
                <div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <div className='d-flex'>
                                <input className='form-control me-2' type='search'
                                    placeholder='Search' aria-labelledby='Search'/>
                                <button className='btn btn-outline-success'>
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className='col-4'>
                            <Dropdown>
                                <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                                    Category
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href='#'>All</Dropdown.Item>
                                    <Dropdown.Item href='#'>Front End</Dropdown.Item>
                                    <Dropdown.Item href='#'>Back End</Dropdown.Item>
                                    <Dropdown.Item href='#'>Data</Dropdown.Item>
                                    <Dropdown.Item href='#'>DevOps</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                            <div className='mt-3'>
                                <h5>Number of results: ({books.length})</h5>
                            </div>
                            <p>
                                1 to 5 of 22 items:
                            </p>
                            {books.map(book => (
                                <SearchBook book={book} key={book.id} />
                            ))}
                </div>
            </div>

        </div>
    );
}