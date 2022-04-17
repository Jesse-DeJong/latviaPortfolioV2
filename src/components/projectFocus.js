import '../styles/reset.css';
import '../styles/style.css';

const ProjectFocus = ({
    title,
    description,
    repo,
    live
}) => {
    return (
        <section className="projectFocus">
            <img src="https://picsum.photos/400/200" 
            className="projectFocus__img" 
            alt={title}></img>
            <section className="projectFocus__cardBody">
                <h5 className="projectFocus__title">{title}</h5>
                <p className="projectFocus__script">{description}</p>

                <br></br>

                <a className="projectFocus__anchor" 
                href={repo} 
                target="_target" 
                alt="repo link" 
                rel="noopener noreferrer"
                >Repository Link</a>



                <a className="projectFocus__anchor" 
                href={live} 
                target="_target" 
                alt="live link" 
                rel="noopener noreferrer"
                >View it live</a>
            </section>
        </section>
    )
}

export default ProjectFocus;