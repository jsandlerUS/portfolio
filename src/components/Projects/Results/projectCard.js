import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import {openWindow} from '../../Reusable/openWindow';

const ProjectCard = ({project}) =>{
    const {name, github, techStack, team, image, description, viewLink} = project
    return(
        <div className='projectCard'>
            <img src={image} alt={name}></img>
            <div className="cardName">{name}</div>
            <div className="hiddenContent">
                <div className="cardDescription">{description}</div>
                <div className="cardbottom">
                    <div className="cardStack">Tech Stack: {techStack.map(item => item + ' | ')}</div>
                    <div className="cardLinks">
                        <a className="githubLink" href={github}><GitHubIcon/>&nbsp;Github</a>&nbsp;|&nbsp; 
                        {viewLink ? 
                            <button className="githubLink" onClick={() => openWindow(viewLink)}>Live site&nbsp;<LaunchIcon/></button>
                            : 'Live site not available'}
                    </div>
                    <div>Team: {team}</div>
                </div>
            </div>
        </div>
    )

}

export default ProjectCard