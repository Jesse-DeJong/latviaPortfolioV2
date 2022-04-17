import '../styles/reset.css';
import '../styles/style.css';

import ProjectCard from '../components/projectCard';

const Projects = () => {

    // less 75 pixels to compensate for the navbar
    const windowHeight = document.documentElement.clientHeight;
  
    const styles = {
        div: {
          height: windowHeight
        }
    }

    return (
        <section style={styles.div} class="projects">
            <h1 className="projects__heading">Projects</h1>
            <div className="projects__div">
                <ProjectCard
                    title="Portfolio"
                    description="A portfolio to introduce myself and my work to others."
                    repo="https://github.com/Jesse-DeJong/portfolio-latvia"
                    live="https://jesse-dejong.github.io/portfolio-latvia"
                ></ProjectCard>

                <ProjectCard
                    title="Basic Calculator"
                    description="A basic calculator to handle simple arithmatic."
                    repo="google.com.au"
                    live="google.com.au"
                ></ProjectCard>
            </div>
        </section>
    )
}

export default Projects;