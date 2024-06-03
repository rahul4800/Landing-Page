import Logo from "../assets/Group.png"
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="items">
                <div className="contact">
                    <img src={Logo} alt="logo" />
                    <span><MdOutlineEmail className="icons" /> help@frybix.com</span>
                    <span><BsFillTelephoneFill className="icons" /> +1 234 456 678 89</span>
                </div>

                <div className="Info">
                    <h3>Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Bookings</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="Info">
                    <h3>Legal</h3>
                    <ul>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>

                <div className="Info">
                    <h3>Product</h3>
                    <ul>
                        <li>Take Tour</li>
                        <li> Live Chat</li>
                        <li>Reviews</li>

                    </ul>
                </div>
                <div className="Info">
                    <h3>Newsletter</h3>
                    <span>Stay Up To Date</span>
                    <div className="subscribe">
                        <input type="text" placeholder="Your email" />
                        <button>Subscribe</button>
                    </div>
                </div>


            </div>
            <footer>
                <hr className="line" />
                <span>Copyright 2022 uifry.com all rights reserved</span>
            </footer>
        </div>
    );
}

export default Footer;