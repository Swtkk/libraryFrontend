import { BookModel } from "../model/BookModel";

export const SearchBook: React.FC<{ book: BookModel }> = (props) => {
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
                            <img src={require('../images/biblioteka.jpg')}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                        }
                    </div>
                    <div className='d-lg-none d-flex justify-content-center align-items-center'>
                        {props.book.simpleThumb ?
                            <img src={props.book.simpleThumb}
                                 width='123'
                                 height='196'
                                 alt='Book'
                            />
                            :
                            <img src={require('../images/biblioteka.jpg')}
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
                <div className='col-md-4 flex-col md:flex justify-center items-center'>
                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full m-2">
                            Chcę przeczytać
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-full m-2">
                            Przeczytałem
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded-full m-2">
                            Dodaj do ulubionych
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
