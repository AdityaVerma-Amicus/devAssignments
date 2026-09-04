import { useState } from "react";

import "./App.css";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
// import ShippingForm from "./components/ShippingForm/ShippingForm";

function App() {
    // const [showCheckout, setShowCheckout] = useState(false);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query: string) => {
        const trimmedQuery = query.trim();

        if (!trimmedQuery) {
            return;
        }

        setSearchQuery(trimmedQuery);
        setShowSearchResults(true);
    };

    const renderPage = () => {
        // if (showCheckout) {
        //     return <ShippingForm />;
        // }

        if (showSearchResults) {
            return <SearchResults searchQuery={searchQuery} />;
        }

        return <Home onSearch={handleSearch} />;
    };

    return (
        <div className="app">
            <Navbar
                // onCheckout={() => setShowCheckout(true)}
                onSearch={handleSearch}
            />

            <main className="app-content">
                {renderPage()}
            </main>

            <Footer />
        </div>
    );
}

export default App;