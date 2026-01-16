import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="website-header">
            <div className="logo">
                <NavLink to="/">frontpage</NavLink>
            </div>
        
            <nav className="nav-NavLinks">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">About Us</NavLink></li>
                    <li><NavLink to="/">Simulator</NavLink></li>
                    <li><NavLink to="/">Real Data</NavLink></li>
                    <li><NavLink to="/">Info</NavLink></li>
                </ul>
            </nav>

            {/* change this to an onClick function??? */}
            <div className="cta">
                <button className="btn-primary">Get Started</button>
            </div>
        </header>
    );
};

export default Header;