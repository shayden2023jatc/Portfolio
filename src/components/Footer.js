import './CSS/Footer.css';
import shaydenIcon from '../components/shaydenIcon.svg';



function Footer() {
    return (

        <footer>
            <a href="/home"><img src={shaydenIcon} class="Home_logo" alt="Scorpion S" width="60em" height="60em" /> </a>
            <div className="Footer-CLeft">
                <h4>Contact info</h4>
                <p>385-271-3255</p>
                <p>shaydenoliver5@gmail.com</p>
            </div>
            <div className="Footer-CRight">
            </div>
            <div className="Footer-Right">
                <p><a href="/home">Home</a></p>
                <p><a href="/Leadership">Leadership</a></p>
                <p><a href="/Service">Service</a></p>
                <p><a href="/Scholarship">Scholarship</a></p>
            </div>
        </footer>


    );
}

export default Footer;