import Green_energy_logo from '../components/Green_energy_logo.svg';
import './Nav.css';
import './nav_javascript';




function Nav() {
    return (
        <body>
            <nav>
                <div class="logo">
                    <a href="/home">
                        <img src={Green_energy_logo} alt="Logo Image" />
                    </a>
                </div>
                <div class="company_name">Leaf</div>
                <div class="company_name">Light</div>
                <div class="hamburger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <ul class="nav-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/Energies">Energies</a></li>
                    <li><a href="/About">About</a></li>
                </ul>
            </nav>
            <script src="nav_javascript.js"></script>
        </body>
    );
}
export default Nav;