import './Footer.css';
import footer_logo from '../components/footer_logo.svg';


function Footer() {
    return (

        <footer>
            <a href="/home"><img src={footer_logo} class="Home_logo" alt="Plant inside of light bulb" width="60em" height="60em" /> </a>
            <div className="Footer-Left">
                <p>Team Number - 576PG</p>
            </div>
            <div className="Footer-CLeft">
                <h4>Contact info</h4>
                <p>801-456-6789</p>
                <p>SaveTheEarth@gmail.com</p>
            </div>
            <div className="Footer-CRight">
                <p><a href="/home">Home</a></p>
                <p><a href="/Energies">Energies</a></p>
                <p><a href="/About">About</a></p>
            </div>
            <div className="Footer-Right">
                <p><a href="/Solar">Solar</a></p>
                <p><a href="/Wind">Wind</a></p>
                <p><a href="/Geo">Geothermal</a></p>
                <p><a href="/Bio">Biomass</a></p>
            </div>
        </footer>


    );
}

export default Footer;