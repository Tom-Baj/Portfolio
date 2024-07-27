import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    return (
        <nav id="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" className="nav__lien" href="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/about" className="nav__lien" href="/profil">
                        A propos
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/projects"
                        className="nav__lien"
                        href="/projects"
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="contact" className="nav__lien" href="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
