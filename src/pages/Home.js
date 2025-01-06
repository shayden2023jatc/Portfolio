import leadershipIcon from '../components/leadershipIcon.svg';
import serviceIcon from '../components/serviceIcon.svg';
import scholarshipIcon from '../components/scholarshipIcon.svg';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../components/CSS/Mobile.css';
import '../components/CSS/home.css';
import { Helmet } from 'react-helmet';
import { motion } from "motion/react"



function Home() {
    return (

        <div>
            <Helmet>
                <title>Home - Portfolio </title>
            </Helmet>
<body>
            <Nav/>
            <main class="home_main">

                <div className="section">
                    <div className="vhcf-row center">
                        <div className="vhcf-column">
                            <div className="vhcf-module">
                                <div className="vhcf-promo_description">
                                    <div className="blackContainer">

                                        <h2 className="vhcf-module_header"><h2

                                            className="flicker">Shayden Oliver</h2></h2>
                                        <motion.div
                                            style={{overflow: "hidden", whiteSpace:"nowrap"}}
                                            initial={{width:0}}
                                            whileInView={{width: "100%"}}
                                            viewport={{once: true, amount: .7 }}
                                            transition={{duration: 3, ease:"linear"}}
                                            className="titan">&lt; Developer &amp; Programmer &gt;</motion.div>
                                    </div>
                                </div>
                            </div>

                            <motion.div initial={{opacity:0}}
                                        whileInView={{opacity:1, y:0, transition: { delay: 0.5, duration:0.5} }}
                                        viewport={{once: true, amount: .7 }}
                                        className="vhcf-module">
                                < img className="trans" src="images/purpleProfilePhoto.jpg"
                                     alt="Profile Picture of Shayden Oliver"
                                     width="10vw" height="20vh"/>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="info_container" style={{padding: "2%"}}>
                    <h2 style={{color: "#555"}}>About Me
                    </h2>
                    <p>My name is Shayden Oliver, and I'm a student of computer science. I have loved computer
                        science
                        my whole life. Ever since I was a kid my family nick-name has been “I.T.”. My fascinations
                        with
                        building, design, and computers perfectly correlate to Front and Back end Development.
                        Throughout my educational journey I have sifted through all the computer science pathways
                        and
                        have fallen in love with computer programing and Web development. </p>
                </div>


                <div className="timeline">
                    <div className="outer">
                        <div className="card">
                            <div className="info">
                                < motion.h3
                                    initial={{opacity:0, x: -50}}
                                    whileInView={{opacity:1, x:0, transition: { delay: 0.5, duration:0.5} }}
                                    viewport={{once: true, amount: "all" }}
                                    className="title">Python 1  &amp; 2</motion.h3>
                                < motion.p
                                    initial={{opacity:0, x: -50}}
                                    whileInView={{opacity:1, x:0, transition: { delay: 0.5, duration:0.6} }}
                                    viewport={{once: true, amount: "all" }}>
                                    "A quality computer science curriculum not only engages
                                    students in interesting, collaborative learning activities
                                    using sound pedagogical strategies, but it also ensures that
                                    students are learning concepts vital to the deep and broad
                                    field of computer science. Creative Coding has been designed
                                    to achieve this goal by aligning with the CSTA K-12 Computer
                                    Science Standards. This course is primarily an introductory
                                    programming course, and units are grounded in an array of
                                    standards from the strands of computational thinking,
                                    collaboration, computing practice and programming, computer
                                    and communication devices, and community, global and ethical
                                    impacts."</motion.p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="info">
                                < motion.h3
                                    initial={{opacity:0, x: 50}}
                                    whileInView={{opacity:1, x:0, transition: { delay: 0.5, duration:0.4} }}
                                    viewport={{once: true, amount: .7 }} className="title">Web Development</motion.h3>
                                < motion.p
                                    initial={{opacity:0, x: 50}}
                                    whileInView={{opacity:1, x:0, transition: { delay: 0.5, duration:0.6} }}
                                    viewport={{once: true, amount: "all" }}>"This course covers the basic hands-on skills and knowledge
                                    of Internet technologies, network infrastructure, and Web
                                    authoring using HTML. Internet professionals are expected to
                                    understand and use these foundation skills. Participation in
                                    the SkillsUSA youth leadership organization may be an
                                    integral part of this course.
                                    build Web development skills and prepare students to take
                                    the CIW Site Development Foundations Module and the CIW Site
                                    Designer certifications tests. Students passing both tests
                                    will earn the CIW Associate Design Specialist
                                    Certification."</motion.p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="info">
                                < motion.h3
                                    initial={{opacity:0, x: -50}}
                                    whileInView={{opacity:1, x:0, transition: { delay: 0.5, duration:0.4} }}
                                    viewport={{once: true, amount: "all" }} className="title">TSA</motion.h3>
                                < motion.p
                                    initial={{opacity:0, x: -50}}
                                    whileInView={{opacity:1, x:0, transition: { delay: 0.5, duration:0.6} }}
                                    viewport={{once: true, amount: "all" }}>
                                    "Participants design, build, and launch a website that
                                    addresses the annual challenge. Semifinalists participate in
                                    an interview to demonstrate the knowledge and expertise
                                    gained during the development of the website."</motion.p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="info">
                                < motion.h3
                                    initial={{opacity:0, x: 50}}
                                    whileInView={{opacity:1, x:0, transition: { delay: 0.5, duration:0.4} }}
                                    viewport={{once: true, amount: "all"}}
                                    className="title">
                                    Computer Programming
                                </motion.h3>
                                < motion.p
                                    initial={{opacity:0, x: 50}}
                                    whileInView={{opacity:1, x:0, transition: { delay: 0.5, duration:0.6} }}
                                    viewport={{once: true, amount: "all" }}>"This course covers fundamental programming concepts in
                                    high-level languages: design, data types, control
                                    structures, methods, classes, Java API, IDEs. Emphasis on
                                    developing problem-solving skills by designing, implementing
                                    and executing simple programs. introduces students to
                                    dynamic data structures, advanced utilization of classes,
                                    and applications of recursion through the application of
                                    mathematical concepts. This course will also highlight the
                                    differences between the many different languages of computer
                                    programming. This course is an introduction to databases,
                                    specifically focusing on the relational database model,
                                    database design and modeling and the structured query
                                    language (SQL)"</motion.p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="info_container">
                    <motion.div initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    scale: {once: true, type: "spring", visualDuration: 0.8, bounce: 0.5 },
                                }}
                    className="features">
                        <div className="container">
                            <div className="feat">
                                <h2>Values</h2>
                                <p>I believe that the best value you can have is Gratitude. I approach
                                    every
                                    opportunity with gratitude and appreciation, realizing that any experiences,
                                    good or
                                    bad, will lead to my personal growth in becoming a better person. I have learned
                                    to
                                    love adversity because of the gift of development that comes from completion of
                                    the
                                    trial. making me Grateful for anything.
                                </p>
                            </div>
                            <div className="feat">
                                <h2>Goals</h2>
                                <p>I am pursuing this scholarship opportunity because it reflects who I am and is a
                                    perfect representation of all that I have strived to achieve in computer science
                                    as
                                    a high school student. Even though this achievement is a life goal there is
                                    still
                                    more to come. I still want to go to post secondary education at Weber State for
                                    a
                                    computer science degree.
                                </p>
                            </div>
                            <div className="feat">
                                <h2>Hobbies</h2>
                                <p>Outside of web development and computer programming, I love to spend time with my
                                    family and loved ones, ride dirt bikes and ATV’s, camping, play volleyball, and
                                    serve others. Family is the cornerstone of my life. I have grown up with great
                                    morals and values because of my strong relationship with my family. They are my
                                    teachers, guiders, self-esteem, and my escape from all the work that goes into
                                    school.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="slider_container">
                    <div className="bar learning" data-skill="Python"></div>
                    <div className="bar back basic" data-skill="SQL"></div>
                    <div className="bar back inter-advanced" data-skill="Java"></div>
                    <div className="bar basic" data-skill="JS"></div>
                    <div className="bar front advanced" data-skill="CSS3"></div>
                    <div className="bar front expert" data-skill="HTML5"></div>
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

                <div className="info_container">
                    <motion.div initial={{opacity: 0, scale: 0}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{
                                    duration: 0.4,
                                    scale: {once: true, type: "spring", visualDuration: 0.8, bounce: 0.5},
                                }}
                                className="features">
                        <div className="container">
                            <div className="feat">
                                <h2>Leadership</h2>
                                <p> In a professional and personal context, I strive to be a leader. Whether that is
                                    with my friends and family by being a good example, in the schools by being a
                                    part
                                    of various leadership and service programs, or even in my community I lead as an
                                    Eagle Scout. I try to be a leader by guiding individuals through their path as
                                    they
                                    strive to be more of a leader. This growth mindset is exactly what got me to be
                                    a
                                    leader like I am today. I was and still am stage fright in front of people. This
                                    made it hard to be an outgoing and outspoken leader because guiding a group is a
                                    main task for leadership. With my growth mindset I have become much better at
                                    these
                                    hindrances and a much better leader.

                                </p>
                            </div>
                            <div className="feat">
                                <h2>Service</h2>
                                <p>Serving is my foundation to approaching a problem. I have become a computer
                                    programmer because I love building things that help other people. A lot of
                                    computer
                                    and web programming is dealing with clients and their needs. This is a service
                                    given
                                    to them as I use creativity and compassion to make the perfect website for them.
                                    I
                                    view service not only as a way to help other people but assist myself by
                                    learning
                                    and bringing joy to myself. This is why I believe service should be a
                                    foundational
                                    principle for everyone's life and even occupation.
                                </p>
                            </div>
                            <div className="feat">
                                <h2>Scholarship</h2>
                                <p>Education is the key to achieving success in society. I firmly believe that
                                    continuous learning in school and life skills cause you to be a much better
                                    person.
                                    You not only learn education but social experiences like leadership, service,
                                    and
                                    networking by taking the right opportunities. I have taken many opportunities in
                                    my
                                    education by taking several computer courses, learning 6 coding languages, being
                                    a
                                    leader for computer science with the ambassador program, and service by being in
                                    SOS. I take opportunities because I know they will better myself and my future.
                                    Then
                                    I can impact and help society in a stronger way.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
</main>
    <Footer/>
</body>
        </div>


)
    ;
}

export default Home;
