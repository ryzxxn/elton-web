import Project from "../components/project"
import { Link } from "react-router-dom";
import { projectData } from "../components/Data/project_data";

export default function projectPage() {

  return (
    <>
    <div className="all_project_container">
      <Link to="/" className="section_header">Back</Link>
        <div id="projectPage_container" className="section_container">
        {projectData.map((project, index: number) => (
                        <Project
                            key={index}
                            repo={project.repo}
                            stack={project.stack}
                            link={project.link}
                            ProjectName={project.ProjectName}
                            thumbnail={project.thumbnail}
                            description={project.description}
                        />
                    ))}
        </div>
    </div>
    </>
  )
}
