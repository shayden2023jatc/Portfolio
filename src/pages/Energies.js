
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../components/Mobile.css';
import { Helmet } from 'react-helmet';

function Energies() {
    return (

        <div>
            <Helmet>
                <title>Energies - Leaf Light</title>
            </Helmet>


            <Nav />
            <main class="energies_main">
                <div class="solar_energy_box">
                    <h1 class="energy_box">Solar</h1>
                    <div class="linkWrap">
                        <a href="/solar">
                            <button class="link style-7">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">More</span>
                            </button>
                        </a>
                    </div>
                </div>

                <div class="wind_energy_box">
                    <h1 class="energy_box">Wind</h1>
                    <div class="linkWrap">
                        <a href="/wind">
                            <button class="link style-7">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">More</span>
                            </button>
                        </a>
                    </div>
                </div>

                <div class="geo_energy_box">
                    <h1 class="energy_box">Geothermal</h1>
                    <div class="linkWrap">
                        <a href="/geo">
                            <button class="link style-7">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">More</span>
                            </button>
                        </a>
                    </div>
                </div>

                <div class="bio_energy_box">
                    <h1 class="energy_box">Biomass</h1>
                    <div class="linkWrap">
                        <a href="/bio">
                            <button class="link style-7">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">More</span>
                            </button>
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    );
}

export default Energies;
