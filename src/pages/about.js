import '../styles/reset.css';
import '../styles/style.css';

import React, { useState } from 'react';

import Skill2 from '../components/skill2';

const About = () => {

    // less 75 pixels to compensate for the navbar
    const windowHeight = document.documentElement.clientHeight;
  
    const styles = {
        div: {
          height: windowHeight
        }
    }

    // Bio import from non-react portfolio, PENDING COMPATABILITY PASS //
    const bio = document.getElementById('bio');

    const bioInj = [
        "motorcycle enthusiast",
        "long time gamer",
        "movie aficionado",
        "world class warlock",
        "prolific reader",
        "open source fanatic",
        "petrichor admirer",
        "netflix devotee",
        "parody partaker",
        "eternal optimist",
        "smogon sycophant",
        "amatuer archer",
    ];
    const colors = [
        "lightblue",
        "green",
        "lightgreen",
        "red",
        "orange",
        "pink"
    ];
    // Randomly Rotating <span> for Bio
    function bioInjection () {
        setInterval(function() {

            // Generate random value
            let i = Math.floor(Math.random() * colors.length);
            let j = Math.floor(Math.random() * bioInj.length);

            // Update <span> for Bio with content and style
            bio.setAttribute("style", "color: " + colors[i]);
            bio.innerText = bioInj[j] + " ";

        // Execute once every second
        },1000);
    }
    bioInjection();
    // Bio import from non-react portfolio, PENDING COMPATABILITY PASS //

    return (
        <section style={styles.div} class="about">
            <h1 className="about__heading">Jesse DE Jong</h1>
            <p className="about__subheading">web <a href="https://github.com/Jesse-DeJong" target="_target" alt="github link"><i class="fa-brands fa-github"></i></a> dev</p>
        
            <br></br>

            <p className="about__script">A nascent software engineer and <span id="bio"></span> looking to expand my knowledge and create cool things</p>

            <br></br>

            <p className='about__heading'>Technical Skills</p>
            
            <br></br>
            
            <div className='about__skills'>
                <Skill2
                    icon="fa-brands fa-html5"
                    title="HTML"
                    description="HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables."
                ></Skill2>

                <Skill2
                    icon="fa-brands fa-css3-alt"
                    title="CSS"
                    description="Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
                ></Skill2>

                <Skill2
                    icon="fa-brands fa-sass"
                    title="SCSS"
                    description="Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
                ></Skill2>

                <Skill2
                    icon="fa-brands fa-js-square"
                    title="Javascript"
                    description="JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions."
                ></Skill2>

                <Skill2
                    icon="fa-brands fa-react"
                    title="React"
                    description="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook)."
                ></Skill2>

                <Skill2
                    icon="fa-brands fa-bootstrap"
                    title="Bootstrap"
                    description="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook)."
                ></Skill2>

                <Skill2
                    icon="fa-solid fa-code-branch"
                    title="Git"
                    description="Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems)."
                ></Skill2>
        </div>

        <br></br>

            <p className="about__script">Full Stack Web Developer with a diverse background in business, finance and government services. Bringing with me a broad set of highly transferable skills such as problem solving, taking initiative and high level communication with clients and customers alike; alongside a history of driving business objectives to achieve stakeholder outcomes.</p>
            <p className="about__script">Seeking to apply these well honed skills along with my newly developed technical skills to a field more suited to my interests and capabilities.</p>
        
        </section>
    )
}

export default About;