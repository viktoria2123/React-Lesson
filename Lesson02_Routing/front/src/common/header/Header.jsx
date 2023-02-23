import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <ul>
          <li>
           
            <Link to='/'>Home</Link>
          </li>
          <li>
           
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
           
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
           
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </header> 
    )
}

export default Header