import '../styles/reset.css';
import '../styles/style.css';

import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <ul className="nav">
            <li className="nav__link">
                <Link className="" to="/">Home</Link>
            </li>
            <li className="nav__link">
                <Link className="" to="/about">About Me</Link>
            </li>
            <li className="nav__link">
                <Link className="" to="/skills">Skills</Link>
            </li>
            <li className="nav__link">
                <Link className="" to="/projects">Projects</Link>
            </li>
        </ul>
    )
}

export default Nav;