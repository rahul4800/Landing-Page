import leftImg from "../assets/home_left.png";
//import spehere from "../assets/spehere.png";
import spehereFrame from "../assets/Frame 1.png";
import Phone from "../assets/phone.png"
import Middleimg from "../assets/middlePhone.png";
const Home = () => {
    return (
        <div className="home-container">
            <div className="left">
                <h3>
                    Make The Best Financial Decisions
                </h3>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>

                <div className="buttons">
                    <button className="btn1">Get Started --</button>
                    <button className="video-btn">Watch Video</button>
                </div>
                <img src={leftImg} alt="leftimg" />
            </div>
            <div className="right">
                <img src={spehereFrame} alt="spehere" className="right-img" />
                <img src={Middleimg} alt="phone" className="phone1" />
                <img src={Phone} alt="phone" className="phone2" />
            </div>
        </div>
    );
}


export default Home;