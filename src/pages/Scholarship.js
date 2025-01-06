import Nav from '../components/Nav';

import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import '../components/CSS/energies_pages.css';
import '../components/CSS/Mobile.css';
import leadershipIcon from "../components/leadershipIcon.svg";
import serviceIcon from "../components/serviceIcon.svg";
import scholarshipIcon from "../components/scholarshipIcon.svg";
import {motion} from "motion/react";


function Scholarship() {
    return (
        <div>
            <Helmet>
                <title>Scholarship-Portfolio</title>
            </Helmet>
            <Nav/>
            {/* Geothermal code */}
            <main class="all_energy_main">
                <motion.h1
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{
                        delay:.1,
                        duration: 0.4,
                        scale: {once: true, type: "spring", visualDuration: 0.8, bounce: .3},
                    }}
                    class="heading_energy animated-glow"> Scholarship
                </motion.h1>
                <div className="section">
                    <div className="vhcf-row">
                        <div className="vhcf-column" style={{backgroundColor: '#ffffff'}}>
                            <div className="vhcf-module">
                                <img src="/images/JATC-medal.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">JATC
                                        Medallion</h2></h2>

                                    <p> The JATC Portfolio medallion is a representation of completing the JATC
                                        portfolio. The purpose of the JATC College and Career Ready Student Portfolio is
                                        to help students prepare and be in a position to make that next-step transition
                                        after high school. The JATC College and Career Ready Student Portfolio is
                                        designed to give students the opportunity to experience leadership, demonstrate
                                        competency in their program of study, develop career-ready skills and prepare
                                        for college.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">Web
                                            Development 1 Certification </h2></h2>

                                        <p>
                                            This Certification is to show the competency of the state test course of Web
                                            Development. This shows proficiency in the curriculum of Web Dev including
                                            knowing basics of Hyper Text Markup Language (HTML) and Cascading Style
                                            Sheets (CSS). Then you must take the state tests and get certified in these
                                            2 coding languages to show the proficiency needed for the Skill Certificate

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/web-dev1-certificate.png"
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
                                <img src="/images/web-dev2-certificate.png"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">Web
                                        Development 2 Certification:
                                    </h2></h2>

                                    <p> This Certification is also to show competency of the next stage of Web
                                        Development. At JATC I was able to expand past HTML and CSS, to Javascript and
                                        more advanced frameworks like ReactJS, a program that is used heavily in
                                        industry. From here I once again completed the course getting the Skill
                                        Certificate
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">CTE
                                            Pathways Certificate:</h2></h2>
                                        <p>
                                            The Career and Technical Education Pathways Certificate is a combination of
                                            competency in web 1 and web 2, along with UX UI fundamentals, web projects,
                                            and web development advanced.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/web-design-pathway-certificate.jpg"
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
                                <img src="/images/presidents-education-2022.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2
                                        className="paragraph_heading_white">Presidents Educational Award:
                                    </h2></h2>

                                    <p>“Founded in 1983, the President's Education Awards Program (PEAP) honors
                                        graduating elementary, middle and high school students for their achievement and
                                        hard work. The program has provided individual recognition from the President
                                        and the U.S. Secretary of Education to those students whose outstanding efforts
                                        have enabled them to meet challenging standards of excellence.” This is achieved
                                        by maintaining a 3.5 on a 4.0 scale.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">Top
                                            Scholar</h2></h2>
                                        <p>
                                            This award was given to me in my 9th grade year after 3 years of middle
                                            school. This award is for 4.0 status for all 3 years of middle school.
                                            Maintaining a high GPA is important to me because it reflects hard work and
                                            dedication to work that isn’t even engaging or sufficient to me. Proving
                                            that I would be strong with things I do love.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/top-scholar-award.jpg"
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
                                <img src="/images/national-society-highschool.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2
                                        className="paragraph_heading_white">NSHSS</h2></h2>

                                    <p>The National Society of High School Scholars is an award that is based on
                                        outstanding academic achievement and AP coursework while in high school. You are
                                        then selected for membership in the National Honors program by invitation only,
                                        to join a league of other outstanding high school scholars in recognition for
                                        dedication to excellence. Each year they hold an initiation ceremony. This
                                        however was a hindrance because of the finances behind the initiation, so I have
                                        only been invited and selected, not initialized.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2
                                            className="paragraph_heading_black">Engineering Plaque</h2></h2>
                                        <p>
                                            This award was given to me my 9th grade year due to outstanding academic
                                            achievement in the area of Engineering. I had taken several computer classes
                                            like exploring computer science, python 1, and python 2. Along with this I
                                            took the Engineering course which worked on several versions of engineering.
                                            At the end of this course every student had to take the state engineering
                                            test. Upon completion I got 100% on the state quiz. Out of all my
                                            instructors' years of teaching she states she had never seen a student get
                                            100% on this state test. All of these things qualified me to be the
                                            2021-2022 Engineering winner out of all Fort Herriman Middle School

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/top-engineer-FHMS-2022.jpg"
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
                                <img src="/images/honor-roll-MRHS.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                                <img src="/images/honor-roll-FHMS.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">Honor
                                        Rolls</h2></h2>

                                    <p>In my 3 years of high school I have achieved Honor Roll every quarter. Each
                                        fourth of the school year the school mails you a honor roll card if you have
                                        maintained a GPA higher than 3.5 or 4.0. I have gotten a 3.5 honor roll every
                                        single courter since sophomore year because of maintaining my 3.996 GPA. I have
                                        received a 4.0 honor roll my sophomore year as well as every quarter of middle
                                        school.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">FHMS
                                            Award</h2></h2>
                                        <p>
                                            This award was given to me my 9th grade year by the Administration and
                                            Faculty of Fort Herriman Middle School (FHMS). This was given to me because
                                            of my outstanding academic achievements and Citizenship. I was a part of the
                                            middle school's citizenship program called Choose Kind. This was what showed
                                            my Citizenship in education. This course was dedicated to helping the school
                                            and community with teaching kindness.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="vhcf-module">
                                <img src="/images/outstanding-academics-certificate.jpg"
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
                                <img src="/images/most-outstanding-student.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2 className="paragraph_heading_white">Most
                                        Outstanding Student
                                    </h2></h2>
                                    <p>Mr. Smalley is an awarded Language arts teacher for best teacher in the district
                                        as well as the head of the language arts department of FHMS. He nominated me for
                                        the Most Outstanding Student award because of the work he saw me put into his
                                        course work as well as a connection I had with other students. He watched me
                                        peer tutor math, stay after school with friends, and help others out in class.
                                        This he said made me stand out and is what ultimately made me the “Most
                                        Outstanding Student” in 9th grade.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">
                                        <h2 className="vhcf-module_header"><h2 className="paragraph_heading_black">TSA
                                            Medal</h2></h2>

                                        <p>
                                            The Jordan Academy North gave me an opportunity to join the TSA. Although
                                            this medal also shows my demonstration of Leadership, it is highly
                                            scholastic as well. It shows my months and months of work within my Web
                                            Design class. I received an A in Web 1, Web 2, Web Projects, and UX UI. All
                                            of these add together to make website design and development. I was able to
                                            have real work experience with a scholastic CTSO competition.
                                        </p>
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
                                <img src="/images/UDAMF.jpg"
                                     alt=" table of least to most beneficial energies" style={{width: '70%'}}/>
                            </div>
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <h2 className="vhcf-module_header"><h2
                                        className="paragraph_heading_white">UDMAF</h2></h2>

                                    <p>
                                        The Utah Digital Arts Media Festival is a program that is held every year that
                                        consists of various computer program arts. Photography, stop motion, 3d art,
                                        sticker and shirt designs, digital audio, and website design. “The DMAF is a
                                        yearly festival showcasing the best work of Digital Media students from across
                                        the state of Utah” I was able to visit UVU college campus and see all the
                                        different media they have there like Game Design, and Character Design. Here in
                                        the image is the award winning shirt and sticker that is given to all the
                                        participants that go to the UDMAF.

                                    </p>
                                </div>
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

export default Scholarship;