import '../styles/reset.css';
import '../styles/style.css';

const Project = ({
    title,
    description,
    repo,
    live
}) => {
    return (
        <section className="project">
            <img src="https://picsum.photos/400/200" 
            className="project__img" 
            alt={title}></img>
            <section className="project__cardBody">
                <h5 className="project__title">{title}</h5>
                <p className="project__script">{description}</p>

                <br></br>

                <a className="project__anchor" 
                href={repo} 
                target="_target" 
                alt="repo link" 
                rel="noopener noreferrer"
                >// Repository Link</a>



                <a className="project__anchor" 
                href={live} 
                target="_target" 
                alt="live link" 
                rel="noopener noreferrer"
                >// View it live</a>
            </section>
        </section>
    )
}

export default Project;