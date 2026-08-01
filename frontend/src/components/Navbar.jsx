import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <h2>🩺 Medicare</h2>
            </div>

            <ul className="nav-links">

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/doctors">Doctors</Link>
                </li>

                {/* <li>
                    <Link to="/appointment">Appointment</Link>
                </li> */}

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>

            <div className="buttons">

                <Link to="/login">
                    <button className="login-btn">
                        Login
                    </button>
                </Link>

                <Link to="/register">
                    <button className="register-btn">
                        Register
                    </button>
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;