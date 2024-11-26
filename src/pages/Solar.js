import Nav from '../components/Nav';
import solar_icon from '../components/solar_icon.svg';
import wind_icon from '../components/wind_icon.svg';
import geo_icon from '../components/geo_icon.svg';
import bio_icon from '../components/bio_icon.svg';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import '../components/energies_pages.css';
import '../components/Mobile.css';



function Solar() {
    return (

        <div>
            <Helmet>
                <title>Solar - Leaf Light</title>
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
                <h1 class="heading_energy">Solar</h1>
                <hr></hr>

                <div class="section">
                    <div class="vhcf-row">
                        <div class="vhcf-column" style={{ backgroundColor: '#ffffff' }}>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Solar1.jpg" alt=" table of least to most beneficial energies" style={{ width: '70%' }} />
                            </div>
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">About Solar</h2></h2>

                                    <p> Solar panels convert <b>sunlight into electricity.</b> As sunlight hits the panels, it excites electrons in the cells, creating direct current (DC) electricity. An inverter then converts DC into alternating current (AC) for home use. This process allows <b>homeowners</b> to generate their own clean energy.</p>

                                    <p>Solar panel efficiency refers to how well they convert sunlight into electricity. On average, solar panels have an efficiency of <b>about 15-20%.</b> Factors affecting efficiency include the type of solar cell, orientation, temperature, and shading. New technologies are constantly improving efficiency, making solar energy a more viable option for homeowners.</p>
                                </div>
                            </div>
                        </div>
                        <div class="vhcf-column">
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Pros of Solar</h2></h2>
                                    <p><em><strong>Solar is an enviormental saving energy with many positive aspects </strong></em></p>
                                    <p>
                                        <b>How to start Solar panels:</b>
                                        Do your research and understand the benefits,
                                        Assess your home energy needs, Look how the bills will work
                                        Incentives, research the federal, state and local taxes credits and rebates Installation, see how is going to handle permits and hook up to the grid
                                        Inspection and approval There will be a Inspection and connection to the power grid.
                                    </p>

                                    <ul>
                                        <li><b>Reduced Energy Bills:</b> Significantly lowers costs associated with heating water.</li>
                                        <li><b>Eco-friendly:</b> Reduces carbon footprint by using the sun’s energy.</li>
                                        <li><b>Reliability:</b> Provides hot water throughout the year.</li>
                                        <li><b>Space Efficiency:</b> Requires less roof space than photovoltaic panels for equivalent energy output.</li>
                                        <li><b>Site Assessment:</b> Determining the best location and angle for the panels to maximize sunlight exposure.</li>
                                        <li><b>System Selection:</b> Choosing the right size and type of system for your household needs.</li>
                                        <li><b>Permitting:</b> Securing necessary permissions from local authorities.</li>
                                        <li><b>Installation:</b> Mounting the panels, connecting them to the water storage system, and integrating them into the existing plumbing.</li>
                                        <li><b>Inspection and Activation:</b> Ensuring the system meets safety standards and is properly connected.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Solar2.jpg" alt=" table of least to most beneficial energies" style={{ width: '80%', backgroundColor: '#bdbdbd' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="vhcf-row">
                        <div class="vhcf-column" style={{ backgroundColor: '#ffffff' }}>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Solar4.jpg" alt=" table of least to most beneficial energies" style={{ width: '80%' }} />
                            </div>
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Cons of Solar</h2></h2>
                                    <p><em><strong>Although there are many pros for solar panels, they come with a handful of cons as listed below. </strong></em></p>
                                    <ul>

                                        <li><b>High upfront costs:</b> installation can deter homeowners despite long-term savings.</li>

                                        <li><b>Efficiency hinges:</b> geographic location, weather, and the time of day, leading to inconsistent energy production.</li>

                                        <li><b>Manufacturing process:</b> solar panels involves hazardous materials, posing environmental concerns.</li>

                                        <li>
                                            <b>High Initial Cost:</b> Installation and initial setup can be expensive.

                                        </li>

                                        <li>
                                            <b>Weather Dependent:</b> Efficiency drops on cloudy days and at night.

                                        </li>

                                        <li>
                                            <b>Space Requirements:</b> Requires a lot of space for optimal energy production.
                                        </li>

                                        <li>
                                            <b>Energy Storage Costs:</b> Storing solar energy for later use requires expensive batteries.
                                        </li>

                                        <li>
                                            <b>Manufacturing Impact:</b> Producing solar panels can harm the environment.
                                        </li>

                                        <li>
                                            <b>Installation Impact:</b> Installation can affect the structural integrity of buildings.
                                        </li>

                                        <li>
                                            <b>Recycling Challenges:</b> Not all solar panel materials are easily recyclable.
                                        </li>

                                        <li>
                                            <b>Intermittency:</b> Solar energy isn't always available when needed.
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="vhcf-column">
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Installation Process</h2></h2>
                                    <ul>
                                        <li><b>Assessment:</b>Determining if electrical systems and roof are qualified to hold solar panels</li>
                                        <li> <b>Design:</b>Design for your specific home is created</li>
                                        <li><b>Permitting:</b>Obtain necessary permits for solar home installation</li>
                                        <li> <b>Installation:</b>MOunt panels and connect to the electiral system</li>
                                        <li><b>Inspection:</b>Ensure compliance with regualtions</li>
                                        <li> <b>Activation:</b>Start generating solar power for your home</li>
                                    </ul>
                                </div>

                                <h2 class="paragraph_heading">Tax incentives</h2>
                                <ul>
                                    <li><b>Federal Investment Tax Credit (ITC):</b>Up to 26% of the cost of solar panel installing</li>
                                    <li> <b>State and Local Incentives:</b> Vary by location, including rebates and tax credits.</li>
                                </ul>
                            </div>
                            <div class="vhcf-module">
                                <h2 class="paragraph_heading">Solar Panel Cost</h2>
                                <table class="Geo_stat_table">
                                    <tr>
                                        <th>Solar System Size</th>
                                        <th>Energy Used (kwh per month)</th>
                                        <th>Pice</th>
                                    </tr>
                                    <tr>
                                        <td>5 kW</td>
                                        <td>5 kWh</td>
                                        <td>15,750</td>
                                    </tr>
                                    <tr>
                                        <td>6 kW</td>
                                        <td>6 kWh</td>
                                        <td>18,900</td>
                                    </tr>
                                    <tr>
                                        <td>7 kW</td>
                                        <td>7 kWh</td>
                                        <td>22,050</td>
                                    </tr>
                                    <tr>
                                        <td>8 kW</td>
                                        <td>8 kWh</td>
                                        <td>25,200</td>
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
export default Solar;
