import '../styles/reset.css';
import '../styles/style.css';

const Badge = ({
    tool
}) => {

    return (
        <li className='badge'>{tool}</li>
    )
}

export default Badge;