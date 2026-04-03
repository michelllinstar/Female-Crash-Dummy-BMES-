import ucla from "../assets/ucla.png";
import bmes from "../assets/ucla_bmes.png";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="website-footer">
             <div className="footer-hstack">
                <div className="vstack">
                    <img src={ucla} alt="UCLA" className="footer-img1" style={{ height: '100px', width: 'auto', maxHeight: '100px' }} />
                    <p className="footer-text">Made with ♡ by UCLA BMES Design Team!</p>
                </div>
                
                <img src={bmes} alt="UCLA BMES" className="footer-img2" style={{ height: '100px', width: 'auto', maxHeight: '100px' }} />
                
                <div className="links-side">
                    <div className="footer-links">
                        <a href="/about_us">About Us</a>
                        <a href="/simulator">Simulator</a>
                        <a href="/real_data">Real Data</a>
                        <a href="/info">Info</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;