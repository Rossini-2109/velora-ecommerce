import "./Header.css"
import { Link } from "react-router-dom";
function Header(){
    return(
        <header className="header">
            <nav className="nav-links">
                <Link to="/">Shop</Link>
        <Link to="/#categories">Categories</Link>
        <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
}
export default Header;