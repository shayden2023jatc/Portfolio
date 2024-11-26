import Nav from '../components/Nav';
import solar_icon from '../components/solar_icon.svg';
import wind_icon from '../components/wind_icon.svg';
import geo_icon from '../components/geo_icon.svg';
import bio_icon from '../components/bio_icon.svg';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import '../components/energies_pages.css';
import '../components/Mobile.css';

function Bio() {
    return (
        <div>
            <Helmet>
                <title>Biomass - Leaf Light</title>
            </Helmet>
            <Nav />
            <main class="all_energy_main">
                <div class="icon_container">

                    <div class="icon">
                        <a href="/solar">
                            <img class="icons" src={solar_icon} alt="Sun in green circle" width="130em" height="130em" />
                            <p class="energy_name">Solar</p>
                        </a>
                    </div>

                    <div class="icon">
                        <a href="/wind">
                            <img class="icons" src={wind_icon} alt="Sun in green circle" width="130em" height="130em" />
                            <p class="energy_name">Wind</p>
                        </a>
                    </div>

                    <div class="icon">
                        <a href="/geo">
                            <img class="icons" src={geo_icon} alt="Sun in green circle" width="130em" height="130em" />
                            <p class="energy_name">Geothermal</p>
                        </a>
                    </div>

                    <div class="icon">
                        <a href="/bio">
                            <img class="icons" src={bio_icon} alt="Sun in green circle" width="130em" height="130em" />
                            <p class="energy_name">Biomass</p>
                        </a>
                    </div>
                </div>
                <h1 class="heading_energy">Biomass</h1>
                <hr></hr>

                <div class="section">
                    <div class="vhcf-row">
                        <div class="vhcf-column" style={{ backgroundColor: '#ffffff' }}>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Biomass1.jpg" alt=" table of least to most beneficial energies" style={{ width: '70%' }} />
                            </div>
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">About Biomass</h2></h2>

                                    <p>
                                        Biomass energy is <b>produced from organic materials,</b> such as <b>plants and animal waste.</b> It is renewable, as these resources can be replenished. When these materials are used as fuel, they can generate <b>electricity or heat,</b> providing a sustainable alternative to fossil fuels.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="vhcf-column">
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Pros of Biomass</h2></h2>
                                    <p><em><strong>Biomass is an enviormental saving energy with many positive aspects </strong></em></p>
                                    <ul>
                                        <li> <b>Energy Efficiency:</b> Uses up to 50% less electricity than conventional systems.</li>
                                        <li> <b>Cost-Effective:</b> Lower operating costs save money over time. </li>
                                        <li> <b>Environmentally Friendly:</b> Reduces greenhouse gas emissions. </li>
                                        <li> <b>Reliability:</b> Operates 24/7, regardless of weather conditions.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Biomass2.jpg" alt=" table of least to most beneficial energies" style={{ width: '80%', backgroundColor: '#bdbdbd' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="vhcf-row">
                        <div class="vhcf-column" style={{ backgroundColor: '#ffffff' }}>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Biomass3.jpg" alt=" table of least to most beneficial energies" style={{ width: '80%' }} />
                            </div>
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Cons of Biomass</h2></h2>
                                    <p><em><strong>Although there are many pros for Biomass Energy, it comes with a handful of cons as listed below. </strong></em></p>
                                    <ul>

                                        <li> Burning organic material which can still release greenhouse gases albeit less than fossil fuels. </li>
                                        <li>Lead to deforestation if not managed sustainably. Additionally, biomass facilities.</li>
                                        <li>Require significant land and water, which could be used for food production. </li>
                                        <li> Cost of collecting, transporting, and processing biomass. </li>
                                        <li> Harm local ecosystems and biodiversity.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="vhcf-column">
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h1 class="paragraph_heading">Installation Process </h1></h2>

                                    <ul>
                                        <li><b>Site Assessment: </b>A professional evaluates your property to ensure it's suitable for a geothermal system.</li>
                                        <li><b>Design and Planning: </b>Tailoring the system to your home's heating and cooling needs.</li>
                                        <li><b>Permitting: </b>Obtaining necessary permits from local authorities.</li>
                                        <li><b>Installation: </b>Digging and installing the underground loop system, then connecting it to your home’s HVAC.</li>
                                        <li><b>Testing & Commissioning: </b>Ensuring the system works efficiently.</li>
                                    </ul>

                                    <h2 class="paragraph_heading">Tax incentives include</h2>
                                    <p>
                                        Low-income homeowners can receive up to a <b>$3,800 rebate</b> to convert a <b>wood burning appliance to natural gas or propane.</b> Non low-income homeowners can receive up to at <b>$2,800.</b>
                                    </p>
                                </div>
                            </div>
                            <div class="vhcf-module">
                                <h2 class="paragraph_heading">Biomass Cost</h2>
                                <table class="Geo_stat_table">
                                    <tr>
                                        <th>Biomass Method</th>
                                        <th>Heating in MJ/kg</th>
                                        <th>Price USD / tonne</th>
                                    </tr>
                                    <tr>
                                        <td>Forest Residues</td>
                                        <td>11.5</td>
                                        <td>15 - 30</td>
                                    </tr>
                                    <tr>
                                        <td>Wood Waste</td>
                                        <td>19.9</td>
                                        <td>10 - 50</td>
                                    </tr>
                                    <tr>
                                        <td>Aricultural Residues</td>
                                        <td>11.25 - 11.55</td>
                                        <td>20 - 50</td>
                                    </tr>
                                    <tr>
                                        <td>Energy Crops</td>
                                        <td>14.25 - 18.25</td>
                                        <td>39 - 60</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main >

            <Footer />

        </div >
    );
}
export default Bio;