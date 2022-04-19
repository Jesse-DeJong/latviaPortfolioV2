import '../styles/reset.css';
import '../styles/style.css';

import Skill from '../components/skill';

const Skills = () => {

    // less 75 pixels to compensate for the navbar
    const windowHeight = document.documentElement.clientHeight;
  
    const styles = {
        div: {
          height: windowHeight
        }
    }

    return (
        <section style={styles.div} class="skills">
            <h1 className="skills__heading">Skills</h1>
            <div className="skills__div">
                <Skill
                title="HTML"
                description="HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables."
                ></Skill>

                <Skill
                title="CSS"
                description="Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
                ></Skill>

                <Skill
                title="Javascript"
                description="JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions."
                ></Skill>

                <Skill
                title="React"
                description="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook)."
                ></Skill>
            </div>
        </section>
    )
}

export default Skills;