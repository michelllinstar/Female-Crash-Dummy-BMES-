import { NavLink } from 'react-router-dom';
import Home from '../Home.js';
import "./header.css";
import logo from '../assets/logo.png';

export interface NavItem {
    label: string;
    path: string;
};

export type HeaderProps = {
    title: string;
    links: NavItem[];
};

const Header: React.FC<HeaderProps> = ({ title, links }) => {
    return (
        <header className="website-header">
            <div className="logo">
                {/* Wrap your logo/image in a NavLink pointing to "/" */}
                <NavLink to="/">
                    <img src={logo} alt="logo" style={{ maxWidth: '36px', height: 'auto' }} />
                </NavLink>
            </div>
        
            <nav className="nav-NavLinks">
                <ul>
                    { links.map((link) => (
                        <li key={link.path}>
                            <NavLink 
                                to = {link.path}
                                className = {({ isActive }) => isActive ? "active" : ""}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;