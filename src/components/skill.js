import '../styles/reset.css';
import '../styles/style.css';

import ProjectFocus from './projectFocus'

const Skill = ({
    title,
    description
}) => {
    return (
        <section className="skill">
            <img src="https://picsum.photos/400/200" 
            className="skill__img" 
            alt={title}></img>
            <section className="skill__cardBody">
                <h5 className="skill__title">{title}</h5>
                <p className="skill__script">{description}</p>
            </section>
        </section>
    )
}

export default Skill;