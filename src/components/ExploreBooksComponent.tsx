import biblioteka from '../images/biblioteka.jpg'
import CarouselComponent from "./CarouselComponent";
import {Route} from "react-router-dom";
import BookCategoryComponent from "./BookCategoryComponent";
import RegisterNowComponent from "./RegisterNowComponent";
export default function ExploreBooksComponent() {
    return (
        <div className=" relative h-[35vh]">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${biblioteka})`,  // Importowane dynamicznie
                    filter: 'brightness(0.7)'
                }}
            />
            <div className="flex items-center justify-center h-full relative z-10">
                <div className="text-center text-white">
                    <p className="font-bold text-2xl md:text-3xl mb-4">Sprawdź nowe książki już teraz!</p>
                    <button className="mt-10 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-400">
                        Odwiedź nas
                    </button>
                </div>
            </div>
        </div>
    );
}