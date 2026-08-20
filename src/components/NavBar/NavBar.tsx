import "./NavBar.css";
import logo from "../../assets/ole.e94be128.svg";

function NavBar() {
    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="navbar-logo">
                <img
                    src={logo}
                    alt="Online Express"
                />
            </div>

            {/* Search Bar */}
            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Search construction parts..."
                />

                <button type="button" aria-label="Search">
                    <span className="search-icon"></span>
                </button>
            </div>

            {/* Right Side */}
            <div className="navbar-actions">

                {/* Sign In */}
                <button className="signin-btn" type="button">
                    Sign In
                </button>

                {/* Cart */}
                <button className="cart-btn" type="button">
                    <span className="cart-icon">🛒</span>
                    <span>Cart</span>
                    <span className="cart-count">2</span>
                </button>

            </div>

        </nav>
    );
}

export default NavBar;