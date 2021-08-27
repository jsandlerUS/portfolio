import { useSelector } from 'react-redux';

import ProjectCard from "./projectCard"

const Results = () =>{
    const filters = useSelector(state => state.filterSelection);
    let projects = useSelector(state => state.projects);

    let filteredProjects = filters.length > 0 ? projects.filter(project => {
        return filters.some(filter => {
            return project.techStack.some(tech => tech === filter)
        })
    }) : projects

    return (
        <div className="results">
            {filteredProjects.map(project => <ProjectCard project={project} key={project.id}/>)}
        </div>
    )
}
export default Results