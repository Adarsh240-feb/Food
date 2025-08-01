import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, MapPin, Search, ShoppingCart, Menu, X, LogIn } from 'lucide-react';
import './Nav.css';

const Nav = ({ allFoods, cartItemCount, addToCart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(null);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value.trim() === '') {
            setResult(null);
            return;
        }
        const found = allFoods.find(food =>
            food.name.toLowerCase().includes(value.toLowerCase())
        );
        setResult(found ? found : 'notfound');
    };

    return (
        <header className="navbar-header">
            <div className="navbar-container">
                {/* Left Section */}
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">
                        <Flame className="navbar-logo-icon" />
                        <span className="navbar-logo-text">FoodFleet</span>
                    </Link>
                    {/* Login link next to logo */}
                    <Link to="/login" className="icon-link login-link" style={{ marginLeft: "18px", display: "flex", alignItems: "center", color: "#ff8800", fontWeight: 600 }}>
                        <LogIn style={{ marginRight: 6 }} size={20} />
                        Login
                    </Link>
                    <div className="navbar-location">
                        <MapPin height="16" width="16" style={{ marginRight: '4px' }} />
                        <span>Prayagraj, UP</span>
                    </div>
                </div>

                {/* Center Section */}
                <nav className="navbar-center">
                    <Link to="/" className="nav-link">Home</Link>
                </nav>

                {/* Right Section */}
                <div className="navbar-right">
                    <div className="search-container">
                        <Search height="20" width="20" color="#6b7280" />
                        <input
                            type="text"
                            placeholder="Search for food..."
                            className="search-input"
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                    <Link to="/cart" className="icon-link">
                        <ShoppingCart height="24" width="24" />
                        {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
                    </Link>
                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
                        {isMenuOpen ? <X height="24" width="24" /> : <Menu height="24" width="24" />}
                    </button>
                </div>
            </div>

            {/* Search Result */}
            {search && (
                <div style={{ background: "#fffbe6", padding: "0.5rem", textAlign: "center" }}>
                    {result === 'notfound' ? (
                        <span>Item not available</span>
                    ) : result ? (
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                            <Link
                                to={`/food/${encodeURIComponent(result.name)}`}
                                style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}
                            >
                                <img src={result.img} alt={result.name} style={{ height: 40, verticalAlign: "middle", marginRight: 8 }} />
                                {result.name} - {result.price}
                            </Link>
                            <button
                                style={{
                                    background: "#ff8800",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "6px 16px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: "1rem"
                                }}
                                onClick={() => addToCart(result)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ) : null}
                </div>
            )}

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="mobile-nav-link">Home</Link>
                {/* Login link in mobile menu */}
                <Link to="/login" className="mobile-nav-link" style={{ display: "flex", alignItems: "center", color: "#ff8800", fontWeight: 600 }}>
                    <LogIn style={{ marginRight: 6 }} size={20} />
                    Login
                </Link>
                <div className="mobile-search-container" style={{ margin: "16px 0" }}>
                    <Search height="20" width="20" color="#6b7280" />
                    <input
                        type="text"
                        placeholder="Search for food..."
                        className="search-input"
                        value={search}
                        onChange={handleSearch}
                        style={{ width: "80%" }}
                    />
                </div>
            </div>
        </header>
    );
};

export default Nav;