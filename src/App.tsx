import {Download, Heart, Mail, Phone, X, PenTool} from 'lucide-react';
import {useState} from 'react';
import logo from "./Black and white Circle Elegant Photographer Hand logo.png";

function App() {
    const [showContactOverlay, setShowContactOverlay] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Moje Repertorium Installer.exe';
        link.download = 'Moje Repertorium Installer.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
            <div className="max-w-5xl mx-auto px-6 py-16">
                <header className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-24 h-24 rounded-4xl"
                        />                        <h1 className="text-5xl font-bold text-blue-900">
                            Moje Repertorium
                        </h1>
                    </div>
                    <p className="text-2xl text-blue-700 mb-8">
                        Niezastąpiany pomocnik tłumacza przysięgłego
                    </p>

                    <a
                        href="https://drive.google.com/uc?export=download&id=1Ll1aTEgJbvDAhQFHGI2lRO0zrQAYGGIF"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:cursor-pointer transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Download size={20} />
                        Pobierz dla Windows
                    </a>
                </header>

                <section className="bg-white rounded-2xl shadow-sm p-12 mb-12 border border-blue-100">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        O aplikacji
                    </h2>
                    <div className="text-blue-900 leading-relaxed space-y-4">
                        <p className="text-lg">
                            Moje Repertorium to aplikacja desktopowa stworzona z myślą o tłumaczach przysięgłych,
                            którzy chcą w uporządkowany i wygodny sposób prowadzić swoje repertorium oraz zarządzać dokumentacją
                            związaną z wykonywanymi tłumaczeniami. Powstała z praktycznej potrzeby usprawnienia codziennej pracy
                             tak, aby wszystkie informacje, pliki i dokumenty znajdowały się w jednym spójnym systemie, zamiast być rozproszone w wielu folderach i plikach na dysku.
                        </p>
                        <p className="text-lg">
                            Głównym celem aplikacji jest uporządkowanie procesu prowadzenia repertorium
                            oraz ujednolicenie struktury przechowywania dokumentów. Program automatycznie
                            tworzy przejrzystą strukturę folderów dla każdego tłumaczenia, obejmującą zarówno
                            dokumenty źródłowe, jak i wygenerowane pliki oraz plik repertorium w formacie Excel.
                            Taki sposób organizacji pozwala łatwo odnaleźć potrzebne materiały, zachować porządek
                            na dysku oraz znacząco przyspiesza pracę przy większej liczbie realizowanych zleceń.
                            Jednocześnie struktura ta pozostawia użytkownikowi dużą swobodę w dostosowaniu jej do własnych preferencji i sposobu pracy.
                        </p>
                        <p className="text-lg">
                            Istotnym elementem aplikacji jest również sposób przechowywania danych.
                            Informacje o wpisach w repertorium zapisywane są w pliku Excel, który pozostaje
                            w pełni dostępny dla użytkownika. Dodatkowo program automatycznie utrzymuje
                            zapasową kopię tych samych danych, co zabezpiecza je na wypadek przypadkowej
                            utraty lub uszkodzenia głównego pliku repertorium. Dzięki temu użytkownik zachowuje
                            kontrolę nad swoimi danymi, jednocześnie korzystając z dodatkowego poziomu bezpieczeństwa.
                        </p>
                        <p className="text-lg">
                            Aplikacja umożliwia również generowanie własnych dokumentów w formacie Word,
                            w tym dokumentów zawierających podpis tłumacza. Automatyczne tworzenie takich
                            plików znacząco skraca czas przygotowania dokumentacji i eliminuje konieczność
                            ręcznego przygotowywania powtarzalnych elementów. Pozwala to skupić się na właściwej
                            pracy tłumaczeniowej zamiast na czynnościach technicznych związanych z przygotowaniem dokumentów.
                        </p>
                        <p className="text-lg">
                            Duży nacisk położono także na wygodę użytkowania.
                            Główny formularz aplikacji zawiera zestaw powiązanych
                            ze sobą pól oraz logikę, która pomaga wprowadzając dane ograniczyć
                            liczbę ręcznych operacji i zmniejszyć ryzyko pomyłek.
                            Interfejs został zaprojektowany w taki sposób, aby codzienna praca z repertorium była możliwie szybka i intuicyjna.
                        </p>
                        <p className="text-lg">
                            Ważną cechą programu jest również pełna prywatność danych.
                            Aplikacja nie komunikuje się z internetem i wszystkie informacje
                            przechowywane są wyłącznie na komputerze użytkownika.
                            Dzięki temu dokumenty oraz dane repertorium pozostają w pełni pod kontrolą właściciela
                            i nie są przesyłane do żadnych zewnętrznych usług.
                            Szczegóły dotyczące działania aplikacji oraz sposobu przechowywania danych zostały dodatkowo omówione w materiałach wideo dostępnych poniżej.
                        </p>
                        <p className="text-lg">
                            Moje Repertorium powstało jako narzędzie praktyczne zaprojektowane tak, aby realnie ułatwiać codzienną pracę tłumacza przysięgłego.
                            Łączy prostotę obsługi z funkcjami, które pomagają zachować porządek w dokumentacji,
                            zwiększyć bezpieczeństwo danych oraz skrócić czas wykonywania powtarzalnych czynności administracyjnych.
                        </p>
                    </div>
                </section>

                <section className="bg-blue-50 rounded-2xl border border-blue-200 p-12 mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Jak to działa - Pełna dokumentacja
                    </h2>
                    <p className="text-blue-900 leading-relaxed mb-6">
                        Chcesz poznać wszystkie szczegóły dotyczące działania Moje Repertorium? Nasza kompletna dokumentacja
                        zawiera instrukcje krok po kroku, porady i najlepsze praktyki do efektywnej pracy z aplikacją.
                    </p>
                    <a
                        href="https://docs.google.com/document/d/1HIujyPuXwA5KYPFfKqhtrKlLnDvfOoYxl_qVgfNiXqw/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
                    >
                        <PenTool size={18} />
                        Otwórz dokumentację w Google Docs
                    </a>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                        Jak to działa
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-blue-100">
                            <div className="aspect-video bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/n-jB6g1P49s"
                                    title="Poradnik wideo 1"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                Instalacja
                            </h3>
                            <p className="text-blue-700">
                                Dokładny proces instalacji aplikacji
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-blue-100">
                            <div className="aspect-video bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/LB7ZUYlMuuA"
                                    title="Poradnik wideo 2"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                Prezentacja aplikacji
                            </h3>
                            <p className="text-blue-700">
                                Zobacz wszystkie możliwości Moje Repertorium
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Gotowy do rozpoczęcia?
                    </h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Pobierz teraz i dołącz do naszej rosnącej społeczności
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                        <button onClick={handleDownload} className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 hover:cursor-pointer transition-all transform hover:scale-105 shadow-lg">
                            <Download size={20} />
                            Pobierz teraz
                        </button>
                        <button
                            onClick={() => setShowContactOverlay(true)}
                            className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all  hover:cursor-pointer border border-blue-500"
                        >
                            <Mail size={20} />
                            Skontaktuj się
                        </button>
                        <div className="relative group">
                            <button disabled className="inline-flex items-center gap-2 bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold cursor-not-allowed opacity-60 border border-gray-300">
                                <Heart size={20} />
                                Wesprzyj nas
                            </button>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Dostępne wkrótce
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="mt-16 text-center text-blue-700">
                    <p>©
                        {new Date().getFullYear()} Moje Repertorium. Wszystkie prawa zastrzeżone.
                    </p>
                </footer>
            </div>

            {showContactOverlay && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
                        <button
                            onClick={() => setShowContactOverlay(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-3xl font-bold text-blue-900 mb-8">Skontaktuj się z nami</h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <Phone size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-600 font-semibold">Numer telefonu</p>
                                    <p className="text-lg font-semibold text-blue-900 hover:text-blue-600 transition-colors">
                                        +48 603 66 00 81
                                    </p>
                                    <p className="text-lg font-semibold text-blue-900 hover:text-blue-600 transition-colors">
                                        +48 579 590 845
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <Mail size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-600 font-semibold">Adres email</p>
                                    <a className="text-lg font-semibold text-blue-900 hover:text-blue-600 transition-colors break-all">
                                        mojerepertorium@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowContactOverlay(false)}
                            className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:cursor-pointer hover:bg-blue-700 transition-all"
                        >
                            Zamknij
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
