import CartWidget from '../CartWidget/CartWidget'
import icon from './icon/icon.png'
import './NavBar.css'
import { NavLink, Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <img src={icon} alt="goat-icon" width="35" height="45"/>
                    <p className="company-name">
                        <NavLink to="/" style={{ color: "black" }}>GOAT</NavLink>
                    </p>
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                     <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <a className="navbar-item">
                    <NavLink to={`/category/Men's Shoes`} style={{ color: "black" }} isActive={(match, location) => match && location.pathname === `/category/Men'S Shoes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> MEN'S</NavLink>
                </a>
                <a className="navbar-item">
                    <NavLink to={`/category/Women's Shoes`} style={{ color: "black" }} isActive={(match, location) => match && location.pathname === `/category/Women's Shoes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>WOMEN'S</NavLink>
                </a>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="navbar-item">
                                <CartWidget />
                            </a>
                            <a class="button is-black">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar