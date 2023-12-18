import React, {useEffect, useState} from "react";
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BookModel} from "../model/BookModel";
import ApiClient from "../api/ApiClient";

export default function CarouselComponent() {
    const [books, setBooks] = useState<BookModel[]>([])
    useEffect(() => {
        const fetchBooks = async ()=>{
            try{
                const baseUrl: any = await ApiClient.get('/api/books')
                const response = baseUrl.data;
                if(!response.ok){
                    new Error('Something went wrong!')
                }
                setBooks(response)
            }
            catch (error){
                throw new Error('Something went wrong')
            }
        }

        fetchBooks().catch((error:any)=>{
            throw new Error('Something went wrong')
        })
    }, []);
    return (
        <div className="mt-16 container">
            <CCarousel controls indicators dark>
                <CCarouselItem className={"flex justify-center items-center text-center"}>
                    <div className={"flex w-full sm:w-1/2 mx-auto"}>
                        <div className="block w-2/3 sm:w-1/3 md:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[0].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[0].title : ''}"</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[1].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[1].title : ''}"</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[2].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[2].title : ''}"</h5>
                        </div>
                    </div>
                    <div className={"mt-16"} data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
                        {/* Tutaj możesz umieścić dowolny element pod slajdem, który działa jako target dla poprzedniego slajdu */}
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className={"flex w-full sm:w-1/2 mx-auto"}>
                        <div className="block w-2/3 sm:w-1/3 md:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[3].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[3].title : ''}"</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[4].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[4].title : ''}"</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[5].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[5].title : ''}"</h5>
                        </div>
                    </div>
                    <div className={"mt-16"} data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
                        {/* Tutaj możesz umieścić dowolny element pod slajdem, który działa jako target dla poprzedniego slajdu */}
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className={"flex w-full sm:w-1/2 mx-auto"}>
                        <div className="block w-2/3 sm:w-1/3 md:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[6].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[6].title : ''}"</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[7].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[7].title : ''}"</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/4 mx-auto">
                            <CImage src={books.length > 0 ? books[8].simpleThumb : require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5 text-base"}>"{books.length > 0 ? books[8].title : ''}"</h5>
                        </div>
                    </div>
                    <div className={"mt-16"} data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
                        {/* Tutaj możesz umieścić dowolny element pod slajdem, który działa jako target dla poprzedniego slajdu */}
                    </div>
                </CCarouselItem>
            </CCarousel>
        </div>
    );
}
