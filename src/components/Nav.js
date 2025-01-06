import shaydenIcon from '../components/shaydenIcon.svg';
import './CSS/Nav.css';
import './nav_javascript';






function Nav() {
    return (
        <body>
            <nav>
                <div class="logo">
                    <a href="/home">
                        <img src={shaydenIcon} alt="Logo Image" />
                    </a>
                </div>
                <div class="hamburger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <ul class="nav-links">
                    <li><a href="/Leadership">Leadership</a></li>
                    <li><a href="/Service">Service</a></li>
                    <li><a href="/Scholarship">Scholarship</a></li>
                </ul>
            </nav>
            <script src="nav_javascript.js"></script>
        </body>
    );
}
export default Nav;