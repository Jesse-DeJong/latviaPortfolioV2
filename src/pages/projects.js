import '../styles/reset.css';
import '../styles/style.css';

import React, { useState } from 'react';

import ProjectCard from '../components/projectCard';
import ProjectFocus from '../components/projectFocus';

const Projects = () => {

    // less 75 pixels to compensate for the navbar
    const windowHeight = document.documentElement.clientHeight;
  
    const styles = {
        div: {
          height: windowHeight
        }
    }

    // Probably should have just added a DB and been done with it //
    // Initialise a counter system to toggle return
    const [count, setCount] = useState(0);
    
    return (

        <>
            <section style={styles.div} class="projects">
                <h1 className="projects__heading">Projects</h1>
                <div className="projects__div">
            
                    {count == 0 ? 
                        <>
                            <ProjectCard
                                title="Portfolio"
                                description="A portfolio to introduce myself and my work to others."
                                repo="https://github.com/Jesse-DeJong/portfolio-latvia"
                                live="https://jesse-dejong.github.io/portfolio-latvia"
                                setCount={setCount}
                                projectNumber="1"
                            ></ProjectCard>

                            <ProjectCard
                                title="Basic Calculator"
                                description="A basic calculator to handle simple arithmatic."
                                repo="google.com.au"
                                live="google.com.au"
                                setCount={setCount}
                                projectNumber="2"
                            ></ProjectCard>
                        </>
                    : count == 1 ?
                        <>
                            <ProjectFocus
                                title="Portfolio"
                                description="A portfolio built in react to introduce myself and my work to others. React was utilised to take advantage of the 'onepage' style and clean use of space"
                                tools={["HTML", "CSS", "JS", "React"]}
                                repo="https://github.com/Jesse-DeJong/portfolio-latvia"
                                live="https://jesse-dejong.github.io/portfolio-latvia"
                                setCount={setCount}
                            ></ProjectFocus>
                        </>
                    : count == 2 ?
                        <>
                            <ProjectFocus
                                title="Basic Calculator"
                                description="A basic calculator to handle simple arithmatic."
                                tools={["HTML", "CSS", "JS", "React"]}
                                repo="google.com.au"
                                live="google.com.au"
                                setCount={setCount}
                            ></ProjectFocus>
                        </>
                    : <p>Whoops! Something went wrong. {console.log(count)}</p> 
                    }
                </div>
            </section>
        </>
    )
}

export default Projects;