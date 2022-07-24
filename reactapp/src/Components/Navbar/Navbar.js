import './Navbar.css';
import logo from '../../shared/images/logo.svg';

export default function Navbar(){
    return <nav className="nav">
        <a href="/" className= "site-title"><img src={logo} className="App-logo" alt="logo" />Routes</a>
        <ul>
            <li>
                <a href="/">Home</a>
                <a href="/search">Search</a>
                <a href="/notes">Notes</a>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </nav>
        
}