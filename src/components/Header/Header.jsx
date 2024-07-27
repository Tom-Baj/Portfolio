import Nav from '../Nav/Nav';
import logo from '../../assets/logo.webp';
import { Link } from 'react-router-dom'; // Import the Link component from 'react-router-dom'
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="logo" />
                </Link>
            </div>
            <Nav />
            {console.log('Header')}
        </div>
    );
}

export default Header;
