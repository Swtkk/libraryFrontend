import {BookModel} from "../../model/BookModel";
import {Link} from "react-router-dom";
interface AdminSearchBookProps {
    book: BookModel;
    onDelete: (bookId: string) => void;
}
export const AdminSearchBook: React.FC<AdminSearchBookProps> = (props) => {
    const bookId = props.book.id
    const bookTitle = props.book.title
    const bookAuthor = props.book.author
    const handleDelete = () => {
        const confirmDelete = window.confirm('Czy na pewno chcesz usunąć tę książkę?');
        if (confirmDelete) {
            props.onDelete(props.book.id);
        }
    };

    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        {props.book.simpleThumb ?
                            <img src={props.book.simpleThumb}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                            :
                            <img src={require('../../images/notFound.jpg')}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                        }
                    </div>
                    <div className='d-lg-none d-flex justify-content-center align-items-center'>
                        {props.book.simpleThumb !== '' ?
                            <img src={props.book.simpleThumb}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                            :
                            <img src={require('../../images/notFound.jpg')}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                        }
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='text-left card-body'>
                        <h6 className='card-title'>
                            Autor: {props.book.author}
                        </h6>
                        <h4 className={"mt-3"}>
                            "{props.book.title}"

                        </h4>
                        <p className='card-text'>
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                            lorem ipsum dolor sit amet, consectetur adipis
                        </p>
                    </div>
                </div>
                <div className='col-md-4 flex flex-col md:flex justify-center items-center'>
                    <div className="flex justify-center items-center flex-wrap w-3/4">
                        <button className="bg-lime-500 hover:bg-lime-400 text-white  py-2 px-4 rounded-full m-2 w-full">
                            <Link
                                to={`/checkout/${props.book.id}`}
                                state={{ bookTitle: props.book.title, bookAuthor: props.book.author, simpleThumb: props.book.simpleThumb, book: props.book }}
                                className="no-underline hover:underline text-white text-center"
                            >Wyświetl opis</Link>
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-white  py-2 px-4 rounded-full m-2 w-full">
                            <Link
                                to={`/edit/${props.book.id}`}
                                state={{ book: props.book }}
                                className="no-underline hover:underline text-white text-center"
                            >Edytuj</Link>
                        </button>
                        <button
                            onClick={handleDelete}
                            className="hover:underline bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded-full m-2 w-full"
                        >
                            Usuń książkę
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
