
import Logo from "../assets/Group.png";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-items">
                <img src={Logo} alt="logo" />
                <ul className="list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Pricing</li>
                    <li>Features</li>
                </ul>
            </div>

            <button>Download</button>
        </div>
    );
}

export default Navbar;