import React from "react";
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CarouselComponent() {
    return (
        <div className="mt-16 container">
            <CCarousel controls indicators dark>
                <CCarouselItem className={"flex justify-center items-center text-center"}>
                    <div className={"flex w-full sm:w-1/2 mx-auto"}>
                        <div className="block w-1/3 sm:w-1/3 md:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 1</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj1.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 2</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj1.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 3</h5>
                        </div>
                    </div>
                    <div className={"mt-16"} data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
                        {/* Tutaj możesz umieścić dowolny element pod slajdem, który działa jako target dla poprzedniego slajdu */}
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className={"flex w-full sm:w-1/2 mx-auto"}>
                        <div className="block w-1/3  sm:w-1/3 md:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 1</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 md:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj1.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 2</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 md:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj1.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 3</h5>
                        </div>
                    </div>
                    <div className={"mt-16"} data-coreui-target="#carouselExampleControls" data-coreui-slide="prev">
                        {/* Tutaj możesz umieścić dowolny element pod slajdem, który działa jako target dla poprzedniego slajdu */}
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className={"flex w-full sm:w-1/2 mx-auto"}>
                        <div className="block w-1/3 sm:w-1/3 md:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj1.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 1</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj1.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 2</h5>
                        </div>
                        <div className="hidden md:block  w-1/3 sm:w-1/6 mx-auto">
                            <CImage src={require("../images/zdj2.jpg")} alt="slide 1" />
                            <h5 className={"mt-5"}>Książka 3</h5>
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
