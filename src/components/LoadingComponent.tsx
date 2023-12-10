import {SunIcon} from "@heroicons/react/24/solid";

export default function LoadingComponent() {
    return (
        <div className={"bg-blue-500 min-h-screen flex flex-col items-center justify-center text-slate-500"}>
            <SunIcon
                className={"h-24 w-24 animate-bounce text-yellow-500"} color={"yellow"}/>
            <h1 className={"text-6xl font-bold text-center mb-10 animate-pulse"}>
                Ładujemy właśnie książki
            </h1>

            <h2 className={"text-xl font-bold text-center mb-10 animate-pulse"}>
                Musisz chwilę poczekać.
            </h2>
        </div>
    );
}