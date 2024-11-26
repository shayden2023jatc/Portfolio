import Nav from '../components/Nav';
import solar_icon from '../components/solar_icon.svg';
import wind_icon from '../components/wind_icon.svg';
import geo_icon from '../components/geo_icon.svg';
import bio_icon from '../components/bio_icon.svg';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import '../components/energies_pages.css';
import '../components/Mobile.css';


function Wind() {
    return (
        <div>
            <Helmet>
                <title>Wind - Leaf Light</title>
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
                <h1 class="heading_energy">Wind</h1>
                <hr></hr>
                <div class="section">
                    <div class="vhcf-row">
                        <div class="vhcf-column" style={{ backgroundColor: '#ffffff' }}>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Wind4.jpg" alt=" table of least to most beneficial energies" style={{ width: '70%' }} />
                            </div>
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">About Wind</h2></h2>

                                    <p>Wind energy for homeowners typically involves installing a small wind turbine on their property. Here's a brief overview:</p>

                                    <ul>
                                        <li><b>Location:</b> Best in areas with average annual wind speeds of at least 12 miles per hour.</li>
                                        <li><b>Costs:</b> Initial installation can be high, but federal, state, or local tax incentives may reduce the price.</li>
                                        <li><b>Benefits:</b> Reduces electricity bills, decreases dependency on the power grid, and is environmentally friendly.</li>
                                        <li><b>Considerations:</b> Homeowners need to check local zoning regulations, potential impact on wildlife, and community standards.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="vhcf-column">
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Pros of Wind</h2></h2>
                                    <ul>
                                        <li><b>Renewable Energy Source:</b> Wind is plentiful and inexhaustible</li>
                                        <li><b>Environmentally Friendly:</b> No emissions during operation, reducing carbon footprint</li>
                                        <li><b>Cost-Effective:</b> After initial setup, operational costs are low. Wind energy can lower electricity bills</li>
                                        <li><b>Energy independence:</b> Reduces reliance on imported fossil fuels</li>
                                        <li><b>Land Use Efficiency:</b> Turbines have a small footprint, allowing land to be used for other purposes, like farming</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Wind2.jpg" alt=" table of least to most beneficial energies" style={{ width: '80%', backgroundColor: '#bdbdbd' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="vhcf-row">
                        <div class="vhcf-column" style={{ backgroundColor: '#ffffff' }}>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Wind1.jpg" alt=" table of least to most beneficial energies" style={{ width: '80%' }} />
                            </div>
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Cons of Wind</h2></h2>
                                    <ul>
                                        <li><b>Production & Installation:</b> Wind turbines can be costly.</li>
                                        <li><b>Wind availability:</b> It consistent, leading to variable energy output.</li>
                                        <li><b>Turbines:</b> Require significant land or offshore space, potentially impacting local ecosystems and wildlife, notably birds and bats.</li>
                                        <li><b>Noise and visual impact:</b> Are also concerns for communities near wind farms.</li>
                                        <li><b>Lifespan turbine limited:</b> Disposing of them can pose environmental challenges.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="vhcf-column">
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Installation Process</h2></h2>
                                    <ul>
                                        <li><b>Permitting:</b> Obtain necessary permits from local authorities. This might involve zoning, construction, and electrical permits</li>
                                        <li><b>Choosing a Turbine:</b> Select a turbine size that fits the energy needs and site conditions</li>
                                        <li><b>Installation:</b> Involves setting up a tower to mount the turbine, installing the turbine and generator, and connecting to the home’s electrical system</li>
                                        <li><b>Inspection and Connection:</b> After installation, an inspection is usually required before connecting the turbine to the power grid</li>
                                    </ul>

                                    <h2 class="paragraph_heading">Tax incentives</h2>
                                    <ul>
                                        <li><b>Federal Investment Tax Credit (ITC):</b> Offers a tax credit for a portion of the installation cost of a wind turbine. The credit rate can  change, so check the current rate.</li>
                                        <li> <b>Renewable Electricity production Tax Credit (PTC):</b> Provides a per-kilowatt-hour credit for electricity generated by the turbine over a set period</li>
                                        <li><b>State and Local Incentives:</b> Many states and localities offer additional incentives. Such as rebates or property tax exemptions</li>
                                        <li><b>Federal Investment Tax Credit:</b>Up to 26% of the cost of solar panel installing</li>
                                        <li> <b>State and Local Incentives:</b> Vary by location, including rebates and tax credits.</li>

                                    </ul>
                                </div>
                            </div>

                            <div class="vhcf-module">
                                <h2 class="paragraph_heading">Wind Turbine Cost</h2>
                                <table class="Geo_stat_table">
                                    <tr>
                                        <th>Wind Methods</th>
                                        <th>Power Rating</th>
                                        <th>Price</th>
                                    </tr>
                                    <tr>
                                        <td>Micro home Turbine</td>
                                        <td>500 - 4,000</td>
                                        <td>0.4 - 3 kW</td>
                                    </tr>
                                    <tr>
                                        <td>Small Turbine</td>
                                        <td>3,000 - 15,000</td>
                                        <td>3 - 5 kW</td>
                                    </tr>
                                    <tr>
                                        <td>Standard Turbines</td>
                                        <td>20,000 - 80,000</td>
                                        <td>5 - 15 kW</td>
                                    </tr>
                                    <tr>
                                        <td>Commercial Turbines</td>
                                        <td>2.5m - 4m</td>
                                        <td>2 - 4 mW</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </div>

    );
}
export default Wind;
