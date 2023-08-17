import "./Menubar.scss";
import logo from "../../assets/logo.svg";
import {FaSearch} from "react-icons/fa";

const Menubar = () => {
  return (
    <div className="container menu_container">
        
        <div className="logo">
            <span>wildie<img src={logo} alt="stuff"/></span>
        </div>

        <ul className="menu_links">
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li><FaSearch /></li>
        </ul>
    </div>
  )
}

export default Menubar
