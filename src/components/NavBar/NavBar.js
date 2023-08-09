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
                    <NavLink to={`/category/MEN'S SHOES`} style={{ color: "black" }} isActive={(match, location) => match && location.pathname === `/category/MEN'S SHOES`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}> MEN'S SHOES</NavLink>
                </a>
                <a className="navbar-item">
                    <NavLink to={`/category/WOMEN'S SHOES`} style={{ color: "black" }} isActive={(match, location) => match && location.pathname === `/category/WOMEN'S SHOES`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>WOMEN'S SHOES</NavLink>
                </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link has-text-black" style={{ color: "black" }}>
                             MORE
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                ABOUT US
                            </a>
                            <a class="navbar-item">
                                CONTACT
                            </a>
                            <hr class="navbar-divider"/>
                            <a class="navbar-item">
                                OUR BRANDS
                            </a>
                         </div>
                     </div>
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