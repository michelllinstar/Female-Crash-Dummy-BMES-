import ucla from "../assets/ucla.png";
import bmes from "../assets/ucla_bmes.png";

const Footer = () => {
    return (
        <footer className="website-footer">
            <img src={ucla} alt="UCLA" className="footer-img" style={{ height: '200px', width: 'auto', maxHeight: '200px' }} />

            <p className="footer-text">Made with ♡ by UCLA BMES Design Team!</p>

            <img src={bmes} alt="UCLA BMES" className="footer-img" style={{ height: '200px', width: 'auto', maxHeight: '200px' }} />

            <div style={{display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end'}} className="footer-links">
                <a href="/about_us">About Us</a>
                <a href="/simulator">Simulator</a>
                <a href="/real_data">Real Data</a>
                <a href="/info">Info</a>
            </div>
        </footer>
    );
};

export default Footer;