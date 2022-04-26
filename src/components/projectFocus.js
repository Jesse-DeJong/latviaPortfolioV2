import '../styles/reset.css';
import '../styles/style.css';

import Badge from './badge';

const ProjectFocus = ({
    title,
    description,
    tools,
    repo,
    live,
    setCount
}) => {
    const handleClick = (e) => {
        setCount(0)
    };

    const toolsArr = [];
    
    const toolBadges = () => {


        tools.map(tool => {
            toolsArr.push(
                <Badge tool={tool} />
            )
        })
        return toolsArr;
    };
    toolBadges();

    return (
        <section className="projectFocus">
            <img src="https://picsum.photos/400/200" 
            className="projectFocus__img" 
            alt={title}></img>
            <section className="projectFocus__cardBody">
                <h5 className="projectFocus__title">{title}</h5>
                <ul className='projectFocus__tools'>{toolsArr}</ul>
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

                <br></br>

                <button className="projectFocus__button" onClick={handleClick}>Return</button>
            </section>
        </section>
    )
}

export default ProjectFocus;