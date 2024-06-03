import feature from "../assets/feature.png";
import blur from "../assets/blurImg.png";
//import advantage from "../assets/advantage.png";
import AdvantageImage from "../assets/advant.png";
import { IoNotifications } from "react-icons/io5";
import custom from "../assets/custom.png"
import star from "../assets/Star.png";


const Detail = () => {
    return (
        <div className="details-container">
            <div className="features">
                <div className="imgs">
                    <img src={feature} alt="feature" />
                    <img src={blur} alt="blur" className="back-img" />
                </div>

                <div className="detail">
                    {/* <img src={blur} alt="blur" className="back2-img" /> */}
                    <h6>features</h6>
                    <h2>Uifry Premium</h2>

                    <div>
                        <span>Budgeting Intervals</span>
                        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>

                    </div>
                    <div>
                        <span>Budgeting Intervals</span>
                        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>

                    </div>
                    <div>
                        <span>Budgeting Intervals</span>
                        <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>

                    </div>
                </div>
            </div>

            <div className="advantage-container">
                <div className="advantage">
                    <div className="heading">
                        <span>ADVANTAGES</span>
                        <h2>Why Choose Urify?</h2>
                    </div>
                    <div className="down">
                        <span><IoNotifications className="bell-icon" /> Clever Notifications</span>
                        <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>

                    </div>

                </div>
                <img src={AdvantageImage} alt="" />
            </div>

            <div className="custom-container">
                <div className="left-img">
                    <img src={blur} alt="blur" className="back3-img" />
                    <img src={custom} alt="" className="image" />
                </div>

                <div className="custom-right">
                    <div className="custom-heading">
                        <img src={star} alt="" />
                        <span>Fully Customizable</span>
                    </div>
                    <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>

                </div>
            </div>
        </div>
    );
}

export default Detail;