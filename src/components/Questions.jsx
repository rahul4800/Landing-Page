import lastImg from "../assets/last_img.png"
const Questions = () => {
    return (
        <>
            <div className="question-container">
                <div className="question-head">
                    <span>FAQ</span>
                    <h3>Frequently Asked Questions</h3>
                </div>
                <div className="Questions">
                    <div className="quest">
                        <h5>The Best Financial Accounting App Ever!</h5>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div>
                        <h5>The Best Financial Accounting App Ever!</h5>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div>
                        <h5>The Best Financial Accounting App Ever!</h5>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="quest">
                        <h5>The Best Financial Accounting App Ever!</h5>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div className="quest">
                        <h5>The Best Financial Accounting App Ever!</h5>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                    <div>
                        <h5>The Best Financial Accounting App Ever!</h5>
                        <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
                    </div>
                </div>

            </div>
            <div className="last-img">
                <img src={lastImg} alt="" />
            </div>
        </>
    );
}

export default Questions