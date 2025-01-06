import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { motion } from "motion/react";
import '../components/CSS/energies_pages.css';
import '../components/CSS/Mobile.css';
import leadershipIcon from "../components/leadershipIcon.svg";
import serviceIcon from "../components/serviceIcon.svg";
import scholarshipIcon from "../components/scholarshipIcon.svg";



function Leadership() {
    return (

        <div>
            <Helmet>
                <title>Leadership-Portfolio</title>
            </Helmet>

            <Nav />

            <main class="all_energy_main">

                <motion.h1
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay:.1,
                        duration: 0.4,
                        scale: {once: true, type: "spring", visualDuration: 0.8, bounce: .3 },
                    }}
                    class="heading_energy animated-glow"> Leadership </motion.h1>
                <div className="section">
                    <div className="vhcf-row">
                        <div className="vhcf-column" style={{backgroundColor: '#ffffff'}}>
                            <div className="vhcf-module">
                                <img src="/images/TSA-team.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2
                                        className="paragraph_heading_white">
                                        About TSA</h2></h2>

                                    <p className="left"> The Technology Student Association (TSA) is a national student
                                        organization centered on career and technical since 1988. Middle and high school
                                        students engaged in (STEM) activities in science, technology, engineering, and
                                        mathematics. 300,000 students participate in TSA’s various competitions, service
                                        opportunities, and leadership roles. TSA the oldest student membership
                                        organization technology and engineering education in high school and middle
                                        school years. It has been around for more than 4 decades not including the 30
                                        years this organization has been run before being TSA, when it was the American
                                        Industrial Arts Student Association (AIASA). Once you meet the requirements you
                                        can enter into 1 or several of the 40 different (CTSO) competitions. With
                                        between 3 and 4 dozen competitions there are so many opportunities and chances
                                        for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">My
                                            Competition</h2></h2>
                                        <p>
                                            <b>Webmaster: </b>
                                            In 2024 I did the Webmaster Competition where competitors design, construct,
                                            and launch a website that includes and is based around the yearly topics. My
                                            topic in the year 2024 was green energy. Green energy was a current
                                            challenge and pertained well to the STEM field. Semifinalists participated
                                            in an interview to demonstrate the knowledge and expertise gained during the
                                            development of the website.
                                            After winning the Local / Region competition, I had to then create a
                                            presentation and update my website further to be ready to present in front
                                            of a judge. Months of coding and preparation finally ended when I had to
                                            travel to a UVU center for the TSA State Conference where all the websites
                                            would be judged.

                                        </p>

                                        <ul>
                                            <li><b>Team Leadership</b></li>
                                            <li><b>Time Managment</b></li>
                                            <li><b>Presenting</b></li>
                                            <li><b>Project Managment</b></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/TSA-medal.jpg"
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
                                <img src="/images/TSA-regionals.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2
                                        className="paragraph_heading_white fade_rotate">Importance of TSA</h2></h2>

                                    <p>TSA has many importances. TSA gives students the opportunity to experience real
                                        world projects, with deadlines, team projects, topics, and client like
                                        audiences. Along with this the students are able to take leadership and team
                                        roles. For my competition I was the team manager, lead coder, and lead designer.
                                        This was due to a lack of knowledge and work ethic from other team members. This
                                        is also a real world experience that everyone has to go through in the
                                        workforce. Different co-workers all affect each other differently.
                                    </p>

                                    <p>TSA caused me to step outside of my comfort zone and become a better programmer,
                                        student, and leader.</p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2
                                            className="paragraph_heading_black">Nationals</h2></h2>
                                        <p><em><strong>Nationals was held in Orlando Florida 2024</strong></em></p>
                                        <p>
                                            That day I won state and was then qualified to go to the National TSA
                                            Conference held in Orlando Florida.They would fly out all the students to a
                                            massive hotel in orlando, where we would do more presentations and judging.
                                            They do not release the score or placement each team got. However, this was
                                            a great opportunity for me to experience a real work environment and be a
                                            leader of my team. Being the team leader and the head of design and code
                                            taught me how to lead a group in finishing and developing a problem.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/TSA-nationals.jpg"
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
                                <img src="\images\ambassador-group2023.jpeg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">About
                                        Ambassadors</h2></h2>

                                    <p>Ambassadors are peer leaders for the JATC program. JATC is college level courses
                                        in a specific career field, accessible to high school students. The Ambassadors
                                        have many leadership opportunities including:

                                    </p>

                                    <p>
                                        <b>Running back to school nights:</b> Where you represent the class and
                                        demonstrate what you have learned from the class by telling students and parents
                                        stories, showing them work, and explaining the curriculum.
                                    </p>
                                    <p><b>Being a leader in the class:</b> Being known as 1 of 2 leaders in your class
                                        means that you and your partner stand one step ahead of the rest of your peers.
                                        You are asked to do any special tasks as well as show the class in a good light
                                        by being proficient in the work. Keeping up your grade in the class is highly
                                        important.
                                    </p> <p><b>Ambassador Expos:</b> You travel around to all the middle schools in your
                                    district and teach groups of 9th graders about your chosen class. Representing the
                                    class means you have to be professional, a leader, and demonstrate presentation
                                    skills. Prior to these expos you create a presentation and activities to catch the
                                    attention of the middle schoolers, while also understanding all the data of the
                                    class and teaching the students about JATC</p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">My
                                            Ambassadorship</h2></h2>

                                        <p>
                                            I have been an ambassador each year I have attended JATC. 2023-2024 Website
                                            Development and 2024-2025 Computer Programming. Both of these years I have
                                            been elected by teachers and faculty to be a leader for JATC. Me and my
                                            associate then prepare a presentation for the expos that last 15 minutes.
                                            This is a compilation of facts, stories, activities, and our personal
                                            journeys. We are also briefed on teaching skills and how to hold a classroom
                                            together. There are several scheduled expos that we go to throughout the
                                            year. Each one lasts 1 hour. This is a total of 33 presentations.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/Shayden_ambassador.jpg"
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
                                <img src="/images/ambassador2024.jpeg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2
                                        className="paragraph_heading_white">Importance of Ambassadors</h2></h2>

                                    <p> I have loved being able to lead and serve the middle schools in the distinct. I
                                        teach students about these programs because I have found the extreme advantages
                                        that these courses give you in high school. I want to give students the same
                                        opportunities I had by showing them what is accomplishable. Being an ambassador
                                        gives you a heads up on the JATC portfolio, an award that is given to super
                                        exceptional students in JATC.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black"></h2>
                                        </h2>
                                        <img src="/images/ambassador-shirts.jpg"
                                             alt=" table of least to most beneficial energies"
                                             style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/ambassador-certificate.jpg"
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
                                <img src="/images/eagle-scout-badge.png"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">About
                                        Eagle Scout</h2></h2>

                                    <p>
                                        Since 1911, the Eagle Scout program has been a highly rewarding display of
                                        leadership, service, and learning. Eagle scouts must complete various
                                        educational, community service, and leadership tasks known as “Merit badges”
                                        Through the BSA (Boy Scouts of America) only 4% of scouts get to the rank of
                                        Eagle scout. However in the US with a population of around 16 million youth are
                                        eligible to participate so the actual number of Eagles is closer to 0.3%. It's
                                        truly a rare achievement.
                                    </p>
                                    <p>
                                        Eagle Scouts must complete 21 merit badges. Each merit badge has its own set of
                                        requirements. Some can be elective and others are required like citizenship in
                                        the community, country, and world, personal finance, camping, and many many more
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">Eagle
                                            Scout Project</h2></h2>
                                        <p>The Eagle Scout project shows leadership and service for the community. The
                                            top thing you need before starting an eagle project is observance. You must
                                            be observant to your surroundings in order to find a service project that is
                                            relevant to your community. Then when you have listened to the concerns from
                                            the community you must take an official direction to solve the problem. For
                                            my Eagle Project there had been several reports of people running into the
                                            trash cans at night because of the lack of visibility. Noticing this I
                                            worked on making a financial plan, organizing groups, and working with
                                            wasatch front to get permissions to alter the trash cans. A week prior to
                                            the service day I went around and handed out fliers filling in the city of
                                            Herriman with what was happening. Then I organized and led a group of
                                            volunteers to execute the plan. We went around placing reflective tape on
                                            all the trash and recycling bins. Later that week I got many comments about
                                            how it helped so much.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/shadow-box-eagle.jpg"
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
                                <img src="/images/MRHS.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2
                                        className="paragraph_heading_white">Volleyball Captain</h2></h2>

                                    <p>Sophomore Volleyball Team Captain. Here I had to communicate to the team about
                                        practices, games, and other special events that would relate to Volleyball. Be
                                        the lead Communicator on the court when it is game time, and was designated to
                                        talk and deal with refs and calling timeouts. This was a good opportunity to be
                                        a leader in the schools in a different setting than educational. Volleyball gave
                                        me an escape from all the stresses of the world but at the same time gave me
                                        opportunities for leadership, as a team you stand out from the crowd and can
                                        make a bigger impact in schools and communities. I played Volleyball my
                                        sophomore and junior year. </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">

                            <div className="vhcf-module">
                                <img src="/images/vb-jumpset.JPG"
                                     alt=" table of least to most beneficial energies"
                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                            </div>
                            <div className="vhcf-module">
                                <img src="/images/vb-team-carry.JPG"
                                     alt=" table of least to most beneficial energies"
                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                            </div>

                            <div className="vhcf-module">

                                <img src="/images/vb-team1.JPG"
                                     alt=" table of least to most beneficial energies"
                                     style={{width: '80%', backgroundColor: '#bdbdbd'}}/>
                            </div>
                            <div className="vhcf-module">

                                <img src="/images/vb-smile.JPG"
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

export default Leadership;
