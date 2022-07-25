import './Navbar.css';
import logo from '../../shared/images/alLogo.png';

export default function Navbar(){
    return <nav className="nav">
        <a href="/" className= "site-title"><img src={logo} className="App-logo" alt="logo" />Azur Lane Gacha</a>
        <ul>
            <li>
                <a href="/">Home</a>
                <a href="/search">Search</a>
                <a href="/notes">Notes</a>
                <a href="/Inventory">Inventory</a>
            </li>
        </ul>
    </nav>
        
}