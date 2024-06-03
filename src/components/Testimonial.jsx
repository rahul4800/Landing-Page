import testmonial_Img from "../assets/peopleGroup.png";
import people from "../assets/people2.png";
import blur_img from "../assets/blurImg.png"

const Testimonial = () => {
    return (
        <div className="Test-container">
            <div className="heading">
                <span>TESTIMONIAL</span>
                <h3>What Our Users Say About Us?</h3>
            </div>

            <div className="details">
                <div className="img-testimonial">
                    <img src={testmonial_Img} alt="" />
                    <img src={blur_img} alt="" className="blur-img" />
                </div>

                <div className="content">
                    <h5>The Best Financial Accpunting App Ever!</h5>
                    <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
                    <img src={people} alt="" />
                    <span>Nick Jonas</span>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;