import solar_icon from '../components/solar_icon.svg';
import wind_icon from '../components/wind_icon.svg';
import geo_icon from '../components/geo_icon.svg';
import bio_icon from '../components/bio_icon.svg';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../components/Mobile.css';
import { Helmet } from 'react-helmet';



function Home() {
    return (
        <div>
            <Helmet>
                <title>Home - Leaf Light </title>
            </Helmet>


            <body>
                <Nav />
                <main class="home_main">
                    <div>
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
                        <div class="whatGE">
                            <div>
                                <h2 class="paragraph_heading">What is Green energy?</h2>
                                <p>
                                    Green energy is energy that can be produced without causing harm to the natural environment. Like renewable energy Green energy comes from a natural source like wind, thermal, and solar power.
                                </p>
                            </div>
                            <div>
                                <h2 class="paragraph_heading">Why you should go green</h2>
                                <p>By choosing green energy, we not only support the <b>health of our planet</b> but also embrace energy independence, stimulate economic growth through new jobs in renewable sectors, and foster a <b>sustainable lifestyle for generations to come.</b>These sources are renewable, meaning they're naturally replenished. They're important because they produce <b>little to no pollution,</b> helping <b>reduce the impact of climate change.</b></p>
                            </div>
                        </div>
                    </div>


                    <div class="geusa">
                        <h2 class="paragraph_heading">Renewable Energy in the United States</h2>
                        <p> Renewable energy generates <b>over 20% of all U.S.A. electricity,</b> and that percentage continues to grow. Unfortunately the other <b>80% of US energy is Fossil fuels-petroleum, natural, gas, and coal.</b> These are the <b>States that produce the most total renewable energy</b> (millions of megawatt-hours), according to the U.S. Energy Information Administration: </p>
                        <div className='HomeList'>
                            Texas - 34 MWh<br />
                            Washington - 25 MWh<br />
                            California - 19 MWh<br />
                            Iowa - 13 MWh<br />
                            Oregon - 13 MWh<br />
                            Oklahoma - 11 MWh<br />
                            New York - 9 MWh<br />
                            Kansas - 8 MWh<br />
                            Illinois - 7 MWh<br />
                            Minnesota - 5 MWh<br />
                        </div>
                        <div class="beneficial_graph">
                            <img src="images/beneficial_graph.png" alt=" table of least to most beneficial energies" width="80%" height="30%" />
                        </div>
                    </div>




                </main>
                <Footer />
            </body >
        </div >
    );
}

export default Home;
