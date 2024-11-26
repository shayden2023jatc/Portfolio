import Nav from '../components/Nav';
import solar_icon from '../components/solar_icon.svg';
import wind_icon from '../components/wind_icon.svg';
import geo_icon from '../components/geo_icon.svg';
import bio_icon from '../components/bio_icon.svg';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import '../components/energies_pages.css';
import '../components/Mobile.css';


function Geo() {
    return (
        <div>
            <Helmet>
                <title>Geothermal - Leaf Light</title>
            </Helmet>
            <Nav />
            {/* Geothermal code */}
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
                <h1 class="heading_energy">Geothermal</h1>
                <hr></hr>
                <div class="section">
                    <div class="vhcf-row">
                        <div class="vhcf-column" style={{ backgroundColor: '#ffffff' }}>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Geothermal4.jpg" alt=" table of least to most beneficial energies" style={{ width: '70%' }} />
                            </div>
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">About Geothermal</h2></h2>

                                    <p> Geothermal energy <b>harnesses heat</b> from <b>beneath the Earth's surface</b> to <b>generate electricity and provide heating and cooling for buildings.</b> It's a <b>clean, renewable source of energy</b> because it <b>doesn't involve burning fossil fuels</b> and has a minimal environmental footprint. Geothermal systems can range from <b>large power plants to small-scale pumps for individual homes.</b> They are <b>efficient and reliable,</b> offering a <b>constant energy supply regardless of weather conditions.</b></p>

                                    <ul>
                                        <p>Geothermal energy is both renewable and sustainable, drawing from the Earth's internal heat. It's used for:</p>

                                        <li><b>Electricity production:</b> Large-scale geothermal plants convert underground steam or hot water to electricity.</li>
                                        <li><b>Direct heating and cooling:</b> Pipes circulate water underground, where it's heated or cooled, then pumped back to provide heating or cooling to buildings.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="vhcf-column">
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Pros of Geothermal</h2></h2>
                                    <ul>
                                        <li><b>Energy Efficiency:</b> Uses up to 50% less electricity than conventional systems.</li>
                                        <li><b>Cost-Effective:</b> Lower operating costs save money over time.</li>
                                        <li><b>Environmentally Friendly:</b> Reduces greenhouse gas emissions.</li>
                                        <li><b>Reliability:</b> Operates 24/7, regardless of weather conditions.</li>
                                    </ul>

                                    <h2 class="paragraph_heading">Effectiveness</h2>
                                    <p>
                                        Geothermal energy stands out as an <b>exceptionally effective and sustainable energy source.</b> Its reliability stems from the <b>Earth's constant underground temperature,</b> making it a <b>dependable option regardless of weather conditions.</b> Geothermal systems boast <b>impressive efficiency rates,</b> often converting up to <b>600%</b> of the input energy into heating, far <b>surpassing traditional heating methods.</b> Moreover, the <b>operational and maintenance costs</b> are <b>significantly lower</b> after the initial setup, providing long-term economic benefits. Additionally, geothermal energy's minimal environmental impact, with a lower carbon footprint than fossil fuels, makes it a key player in efforts to combat climate change. This combination of <b>reliability, efficiency, cost-effectiveness, and environmental friendliness underscores the effectiveness</b> of geothermal energy as a green solution.
                                    </p>
                                </div>
                            </div>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Geothermal2.jpg" alt=" table of least to most beneficial energies" style={{ width: '80%', backgroundColor: '#bdbdbd' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="vhcf-row">
                        <div class="vhcf-column" style={{ backgroundColor: '#ffffff' }}>
                            <div class="vhcf-module">
                                <img src="images/Edited_media/Geothermal1.jpg" alt=" table of least to most beneficial energies" style={{ width: '80%' }} />
                            </div>
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Cons of Geothermal</h2></h2>
                                    <ul>
                                        <li><b>Initial exploration and drilling:</b> can be expensive and risky,with no guarantee of finding viable resources.</li>

                                        <li><b>Geothermal plants:</b> limited to areas near tectonic plate boundaries, restricting their widespread use.</li>

                                        <li><b>Drilling process:</b> may release harmful gases from underground, albeit in lower quantities than fossil fuels.</li>

                                        <li><b>Induced seismicity:</b> small earthquakes due to the alteration of the Earth's crust.</li>

                                        <li><b>High Initial Costs:</b> Setting up geothermal systems, especially for electricity generation, can be expensive due to drilling and installation.</li>

                                        <li><b>Location Specific:</b> Effective mostly in regions with high geothermal activity. Not all areas can feasibly harness geothermal energy.</li>

                                        <li><b>Environmental Concerns:</b> Can lead to land subsidence and release of greenhouse gases trapped beneath the surface, though much lower compared to fossil fuels.</li>

                                        <li><b>Water Use:</b> Geothermal power plants can require significant amounts of water for cooling and steam production.</li>

                                        <li><b>Potential for Seismic Activity:</b> The process of drilling for geothermal energy can sometimes trigger small earthquakes, although this is relatively rare and usually minor.</li>

                                        <li><b>Sustainability Questions:</b> Overuse of a geothermal source can deplete its heat faster than it can naturally replenish, though proper management can mitigate this.</li>

                                        <li><b>Infrastructure Disruption:</b> Installation of geothermal systems, particularly large-scale ones, may require significant changes to the land, potentially disrupting ecosystems.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="vhcf-column">
                            <div class="vhcf-module">
                                <div class="vhcf-promo_description">
                                    <h2 class="vhcf-module_header"><h2 class="paragraph_heading">Installation Process</h2></h2>
                                    <ol>
                                        <li><b>Site Assessment:</b> A professional evaluates your property to ensure it's suitable for a geothermal system.</li>
                                        <li><b>Design and Planning:</b> Tailoring the system to your home's heating and cooling needs.</li>
                                        <li><b>Permitting:</b> Obtaining necessary permits from local authorities.</li>
                                        <li><b>Installation:</b> Digging and installing the underground loop system, then connecting it to your home’s HVAC.</li>
                                        <li><b>Testing and Commissioning:</b> Ensuring the system works efficiently.</li>
                                    </ol>
                                    <h2 class="paragraph_heading">Tax incentives include</h2>
                                    <ul>
                                        <li><b>Federal Tax Credits:</b> Homeowners can often claim a percentage of the installation cost as a tax credit. (Check current rates as they can change.)</li>
                                        <li><b>State and Local Incentives:</b> Vary by location; may include additional tax credits, rebates, and low-interest loans.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="vhcf-module">
                                <h2 class="paragraph_heading">Geothermic Cost</h2>
                                <table class="Geo_stat_table">
                                    <tr>
                                        <th> Item</th>
                                        <th>Quantity</th>
                                        <th>Fair Price</th>
                                    </tr>
                                    <tr>
                                        <td>Radiant Heating Cost</td>
                                        <td>215 Square Feet</td>
                                        <td>$726.49</td>
                                    </tr>
                                    <tr>
                                        <td>Radiant Heating Labor</td>
                                        <td>18.7 Hours</td>
                                        <td>$979.82</td>
                                    </tr>
                                    <tr>
                                        <td>Radiant Hearing Job Materials and Supplies</td>
                                        <td>200 Square Feet</td>
                                        <td>$103.14</td>
                                    </tr>
                                    <tr>
                                        <td>Totals - Cost to Install Radiant Floor Heating - 215 Square Feet</td>
                                        <td></td>
                                        <td>$1,809.45</td>
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
export default Geo;