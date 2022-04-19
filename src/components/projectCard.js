import '../styles/reset.css';
import '../styles/style.css';

const ProjectCard = ({
    title,
    description,
    repo,
    live,
    setCount,
    projectNumber
}) => {
    const handleClick = (e) => {
        setCount(projectNumber)
    };

    return (
        <section className="project">
            <img src="https://picsum.photos/400/200" 
            className="project__img" 
            alt={title}></img>
            <section className="project__cardBody">
                <h5 className="project__title">{title}</h5>
                <p className="project__script">{description}</p>

                <br></br>

                <button className="project__button" onClick={handleClick}>View</button>
            </section>
        </section>
    )
}

export default ProjectCard;