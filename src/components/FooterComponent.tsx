export default function FooterComponent() {
    return (
        <div className={"bg-blue-600 p-4 text-white w-full "}>
            <div className={"container"}>
                <div className={" justify-center gap-5"}>
                    <div>Dotarłeś na koniec strony kliknij przycisk i wróc na górę</div>
                    <button className={" mt-2 py-2 px-4 bg-green-500 rounded-2xl border-black border-2"}
                            onClick={() => {
                                window.scrollTo(0, 0)
                            }}>Powrót
                    </button>
                    {/*<div>Jeśli masz pytania skontakuj się</div>*/}
                </div>
            </div>
        </div>
    );
}