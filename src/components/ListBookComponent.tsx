import {useEffect, useState} from "react";
import { Card, CardText} from "react-bootstrap";
import ApiClient from "../api/ApiClient";
import {BookModel} from "../model/BookModel";
import LoginComponent from "./LoginComponent";
import LoadingComponent from "./LoadingComponent";

export default function ListBookComponent() {

    const [books, setBooks] = useState<BookModel[]>([])
    const [loading, setLoading] = useState(true)
    const getBooks =async ()=>{
        try{
            const response = await ApiClient.get("/api/books")

            setBooks(response.data)
        }
        catch (err){
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getBooks()
    }, []);

    if(loading){
        return <div><LoadingComponent/></div>
    }

    return (
        <div className="container p-4 md:p-8 flex flex-col items-center  ">

            {books.map((book, index) => (
                <Card key={index} className={"w-full "}>
                    <div className="container my-4 md:mb-8 flex flex-col md:flex-row  items-center justify-center">
                        <img className="w-32 h-32 md:w-48 md:h-48 mb-2 md:mb-0" src={book.simpleThumb}
                             alt={book.title}/>
                        <div className="md:ml-4 w-3/4 md:w-full text-center md:text-left flex flex-col md:gap-2">
                            <CardText>{index+1}. {book.title}</CardText>
                            <div className=" mt-2  flex flex-col justify-center md:flex-row gap-2   ">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4  py-2 rounded-full">
                                    Chcę przeczytać
                                </button>
                                <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-full">
                                    Przeczytałem
                                </button>
                                <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded-full">
                                    Dodaj do ulubionych
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}

        </div>
    );
}