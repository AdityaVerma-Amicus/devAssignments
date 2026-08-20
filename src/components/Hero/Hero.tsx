import "./Hero.css";
import Container from "../layout/Container/Container"; 

function Hero() {
    return (
        <section className="hero">
            <Container>
                <div className="hero-content">

                    <h1>FIND CONSTRUCTION PARTS</h1>

                    <div className="hero-search">

                        <input
                            type="text"
                            placeholder="Search by part number, equipment serial number or keyword"
                        />

                        <button type="button" aria-label="Search">
                            <span className="search-icon"></span>
                        </button>

                    </div>

                </div>
            </Container>

            

        </section>
    );
}

export default Hero;