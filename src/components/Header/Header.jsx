import Nav from '../Nav/Nav';
import logo from '../../assets/logo.webp'; // Importer l'image ici
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="logo" />{' '}
                    {/* Utiliser la variable logo ici */}
                </Link>
            </div>
            <Nav />
        </div>
    );
}

export default Header;
