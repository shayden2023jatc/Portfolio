import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import '../components/CSS/energies_pages.css';
import '../components/CSS/Mobile.css';
import leadershipIcon from "../components/leadershipIcon.svg";
import serviceIcon from "../components/serviceIcon.svg";
import scholarshipIcon from "../components/scholarshipIcon.svg";
import {motion} from "motion/react";


function Service() {
    return (
        <div>
            <Helmet>
                <title>Service-Portfolio</title>
            </Helmet>
            <Nav />
            <main class="all_energy_main">

                <motion.h1
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{
                        delay:.1,
                        duration: 0.4,
                        scale: {once: true, type: "spring", visualDuration: 0.8, bounce: .3},
                    }}
                    class="heading_energy animated-glow"> Service
                </motion.h1>
                <div className="section">
                    <div className="vhcf-row">
                        <div className="vhcf-column" style={{backgroundColor: '#ffffff'}}>
                            <div className="vhcf-module">
                                <img src="/images/SOS-color-fesitval2023.PNG"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">About SOS</h2></h2>

                                    <p>
                                        SOS stands for Sources of Strength. This is a 25 year program created back in 1998 in North Dakota that has spread across the nation. SOS was created to give a student body the resources and awareness of strengths in their lives to overcome mental health issues. It is a upstream Strength-Based program for Suicide Prevention. It has been placed in many highschools, including mine. Previously being in a similar school organization called “Choose Kind” in middle school I became aware of this similar program. I was the first “Full Year Sophomore” member of SOS at my highschool. Ever since I took that class I have fallen in love with it and have been able to learn and spread so much information about mental health and Suicide prevention.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">What SOS does</h2></h2>
                                        <p>
                                            Everyday I learned about mental health and strategies that can help others with their mental health. SOS’s goal is to spread that information that I have learned with the student body and faculty of our highschools. SOS does this by holding events like lunch activities, after school activities, creating videos, posters, community and school service cleanups, assemblies, and fundraisers like the yearly color festival for the whole neighborhood.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/SOS-certificate2023.jpg"
                                     alt=" table of least to most beneficial energies"
                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="vhcf-row">
                        <div className="vhcf-column" style={{backgroundColor: '#ffffff'}}>
                            <div className="vhcf-module">
                                <img src="/images/SOS-I-choose-live.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white"> SOS importance</h2></h2>
                                <p>This class and service opportunity is important to me because I know the struggles of mental health and understand the importance of knowing how to deal with these inevitable problems. The world is a stressful place and in any area of life you need to watch out for your mental health. Although I still have struggles this class lessened the impact it has on me and prepared me for times where my mental health is low. I am truly grateful to be a representative of this class and teach the whole school how to help their mental health, an ever growing problem in our society. I hope I have touched people and taught them how they can help themselves by leaning on strengths from the SOS wheel.</p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <img src="/images/SOS-pie-guy2023.PNG"
                                             alt=" table of least to most beneficial energies"
                                             style={{width: '80%', backgroundColor: '#bdbdbd'}}/>

                                        <div className="vhcf-column">

                                            <div className="vhcf-module">
                                                <img src="/images/SOS-group.jpeg"
                                                     alt=" table of least to most beneficial energies"
                                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                            </div>
                                            <div className="vhcf-module">
                                                <img src="/images/SOS-pie2023.jpeg"
                                                     alt=" table of least to most beneficial energies"
                                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                            </div>

                                            <div className="vhcf-module">

                                                <img src="/images/SOS-color-festival-ME.jpeg"
                                                     alt=" table of least to most beneficial energies"
                                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                            </div>
                                            <div className="vhcf-module">

                                                <img src="/images/SOS-color-festival2023.jpeg"
                                                     alt=" table of least to most beneficial energies"
                                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">

                                <div className="vhcf-column">

                                    <div className="vhcf-module">
                                        <img src="/images/SOS-color-festival2023.jpeg"
                                             alt=" table of least to most beneficial energies"
                                             style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                    </div>
                                    <div className="vhcf-module">
                                        <img src="/images/SOS-chalk.JPG"
                                             alt=" table of least to most beneficial energies"
                                             style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                    </div>

                                    <div className="vhcf-module">

                                        <img src="/images/SOS-group.jpeg"
                                             alt=" table of least to most beneficial energies"
                                             style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                    </div>
                                    <div className="vhcf-module">

                                        <img src="/images/SOS-hands.jpeg"
                                             alt=" table of least to most beneficial energies"
                                             style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="vhcf-row">
                        <div className="vhcf-column" style={{backgroundColor: '#ffffff'}}>
                            <div className="vhcf-module">
                                <img src="/images/odd-jobs-2024.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">About Odd Jobs</h2></h2>
                                    <p> Starting in December MRHS (Mountain Ridge High School) starts their month of service they call Season of Scarlet. Each year they choose a foundation to support. In 2022 we supported For The Kids, in 2023 we supported Hearts knit together, and in 2024 we supported millie's princess foundation. There are many ways you can support but one of the most foundational ways to support is Odd Jobs. Odd jobs is when volunteers go out into the community door to door asking for “odd jobs” you can do in return for donations for the charity.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">Odd Jobs projects</h2></h2>
                                        <p>I have gone to odd jobs for all 3 years of my high school career. These are challenging but rewarding service opportunities because of the people you can help. Whether that is helping out cleaning someone's house, taking out the trash, raking leaves, or any other chore. Out of all my experiences there is one that stands out to me the most is the 2024 Christmas lights odd job.
                                        </p>
                                        <p>
                                        This year at odd jobs me and a group of 6 gathered together for a cold night at odd jobs. At the end of the night we stumbled onto a log cabin house with one dark figure bringing out a ladder to the huge wrap around porch. Seeing this was a significant sign to us that we should go check out what we could do to help. Here we met a woman who was just about to start the massive project of hanging icicle lights around the whole face of the house. This would take several hours of her night not including the 2 christmas trees that she had to set up packed away in the basement. As a team we split up and worked as efficiently as possible getting all of the work done in 1 1/2 hours. 
                                        </p>
                                        <p>
                                        Upon completion the woman expressed her gratitude for our gesture and happily donated to Milliy’s Princess Foundation. She told us of her kindy issues and how the lifting of these objects would have been painful and hard for her. Now, instead of hanging up decorations the following day, could do what she truly wanted to do, go spend a night with her daughter. Heartwarming experiences like these is what makes service so worth it.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/odd-jobs2023(2).jpg"
                                     alt=" table of least to most beneficial energies"
                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="vhcf-row">
                        <div className="vhcf-column" style={{backgroundColor: '#ffffff'}}>
                            <div className="vhcf-module">
                                <img src="/images/national-honor-logo.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">About NHS</h2></h2>

                                    <p> National Honor Society (NHS) is a student organization dedicated to enriching culture and education based on their 4 principles: Service, Leadership, Education, and Character. One of my favorite services for the 90 hours of required service is the opportunity to deliver pies to local businesses working over the Thanksgiving Holiday. A group of service members and I gathered and led a group of many volunteers to deliver pies across Salt Lake Valley. From there we hand delivered packages to small business, construction workers, and services like police and fire departments. It was a great way for me to develop my leadership and service skills. Learning to communicate and manage a group of people, co-work with other leaders, and realize the importance of recognizing others, are skills that I will use in my future profession.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">My NHS Experiences
                                    </h2></h2>
                                        <p>
                                            I have been a part of the National Honor Society for all my years of high school. This has given me dozens and dozens of service hours. From math tutoring to making blankets, school dances to youth coaching, sock drives to church service, there were so many different people I was able to reach by just doing the simple hours occasionally. This makes me appreciate the NHS and the pillars they stand for, making the student body, community, and world a better place. 
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/national-honor_society-certificate.jpg"
                                     alt=" table of least to most beneficial energies"
                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="vhcf-row">
                        <div className="vhcf-column" style={{backgroundColor: '#ffffff'}}>
                            <div className="vhcf-module">
                                <img src="/images/team-coach.jpeg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">Volleyball Coach</h2></h2>

                                    <p>The local teenage volleyball team had been left like a fish out of water without a coach, due to a coach that never showed up and had a lack of communication skills. Observing this as well as  my love for volleyball lead to me talking to the JL sources rec center. I organized with them for me to volunteer for coaching. They were super appreciative of me willing to coach this team. From here I ran practices and games for a rec volleyball team for a month - 10 hr (2.5 hr a week * one month)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">Project Teddy Bear</h2></h2>
                                            <p>Project Teddy Bear is an organization that...
            
                                            </p>
                                            <p>Me and my family have supported Project Teddy Bear for many years. Each time donating dozens of stuffed animals to these children. One of my fondest memories is setting up all the stuffed animals around a local bank that supported this program. Then seeing the faces of all the workers of the bank as they showed their appreciation for this kind act with hundreds of stuffed animals round about the walls.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/project-teddy.jpg"
                                     alt=" table of least to most beneficial energies"
                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="icon_container">
                    <div className="icon">
                        <a href="/Leadership">
                            <img className="icons" src={leadershipIcon} alt="Sun in green circle" width="130em"
                                 height="130em"/>
                            <p className="iconName">Leadership</p>
                        </a>
                    </div>

                    <div className="icon">
                        <a href="/Service">
                            <img className="icons" src={serviceIcon} alt="Sun in green circle" width="130em"
                                 height="130em"/>
                            <p className="iconName">Service</p>
                        </a>
                    </div>

                    <div className="icon">
                        <a href="/Scholarship">
                            <img className="icons" src={scholarshipIcon} alt="Sun in green circle" width="130em"
                                 height="130em"/>
                            <p className="iconName">Scholarship</p>
                        </a>
                    </div>

                </div>
            </main>
            <Footer/>

        </div>

    );
}

export default Service;
