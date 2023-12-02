import { Link } from "react-router-dom";


export default function BookCategoryComponent() {
    return (
        <div className={"mt-5"}>
            <h2> Kategorie</h2>
            <div className={"container mt-5 grid grid-cols-1 md:grid-cols-3 place-items-center gap-2"}>
                <Link className={"no-underline w-3/4  p-5 bg-blue-500/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={"text-black"}>Kryminał</span>
                </Link>
                <Link className={"no-underline w-3/4  p-5 bg-red-500/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={" text-black"}>Komedia</span>
                </Link>
                <Link className={"no-underline w-3/4  p-5 bg-green-500/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={"text-black"}>Romans</span>
                </Link>
                <Link className={"no-underline w-3/4  p-5 bg-yellow-500/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={"text-black"}>Kryminał</span>
                </Link>
                <Link className={"no-underline w-3/4  p-5 bg-purple-500/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={"text-black"}>Komedia</span>
                </Link>
                <Link className={"no-underline w-3/4  p-5 bg-orange-500/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={"text-black"}>Romans</span>
                </Link>
                <Link className={"no-underline w-3/4  p-5 bg-lime-400/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={"text-black"}>Kryminał</span>
                </Link>
                <Link className={"no-underline w-3/4  p-5 bg-fuchsia-500/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={"text-black"}>Komedia</span>
                </Link>
                <Link className={"no-underline w-3/4  p-5 bg-amber-300/90 rounded-xl"}  to={"/book/category/jakaskategoria"}>
                    <span className={"text-black"}>Romans</span>
                </Link>

            </div>
        </div>
    );
}