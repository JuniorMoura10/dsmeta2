import logo from '../../assets/img/logo.svg'

import './style.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="Logo DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://www.linkedin.com/in/juniormoura10/" target="_blank">@Júnior Moura</a></p>
                </div>
            </header>
        </>
    )
}

export default Header
