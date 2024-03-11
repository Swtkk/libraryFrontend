import {Link} from "react-router-dom";

export default function RegisterNowComponent() {
    return (
        <div className={"container p-5"}>
            <div className={"flex justify-center gap-2 items-center p-3 shadow mt-5 "}>
                <div className={"w-1/2 text-left"}>
                    <h2>Poszukujesz czegoś do czytania?</h2>
                    <p className={"text-gray-400"}>Zarejestuj się i zacznij wypożyczać książki</p>
                    <Link className={"bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-400 no-underline"} to={"/register"}>Dołącz
                        do nas</Link>
                </div>
                <div className={"hidden md:block md:w-1/4"}>
                    <img src={require("../images/register.png")}/>
                </div>
            </div>
        </div>
    );
}