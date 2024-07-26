function Header() {
    return (
        <div className="header-container">
            <img src="../assets/logo.png" alt="" />
            <h1>Header</h1>
            <nav className="header-container__nav">
                <ul className="header-container__nav__list">
                    <li className="header-container__nav__list__item">
                        <a href="/">Home</a>
                    </li>
                    <li className="header-container__nav__list__item">
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="header-container__nav__list__item">
                        <a href="/projects">Projects</a>
                    </li>
                    <li className="header-container__nav__list__item">
                        <a href="/profil">Profil</a>
                    </li>
                </ul>
            </nav>
            {console.log('Header')}
        </div>
    );
}

export default Header;
