import { NavLink } from 'react-router-dom';

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
                <NavLink to="/">frontpage</NavLink>
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