import '../styles/reset.css';
import '../styles/style.css';

const Skill2 = ({
    icon,
    title,
    description
}) => {
    return (
        <section className="skill">
            <div className="skill__icon"><i 
            className={icon} 
            alt={title}></i></div>
            <section className="skill__cardBody">
                <h5 className="skill__title">{title}</h5>
                <p className="skill__script">{description}</p>
            </section>
        </section>
    )
}

export default Skill2;