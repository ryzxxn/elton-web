interface ProjectProps {
  ProjectName: string;
  thumbnail: string;
  description: string;
  link: string;
  repo: string;
  stack: string[];
}

export default function Project(props: ProjectProps) {
  const { ProjectName, thumbnail, description, link, stack, repo } = props;

  return (
    <div className="project_tab">
      <img className="project_thumbnail" src={thumbnail} alt="Project Thumbnail" />
      <div className="project_details">
        <h2 className="project_name">{ProjectName}</h2>
        <p className="project_description">{description}</p>
        <div className="stack">
          {stack.map((word, index) => (
            <p className="stack_element" key={index}>{word}</p>
          ))}
        </div>
        <div className="project_link_container">
          <a className="project_link" href={link}>Visit Website</a>
          <a className="project_link" href={repo}>Github</a>
        </div>
      </div>
    </div>
  );
}
