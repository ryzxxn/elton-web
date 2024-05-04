import React from 'react';
import { projectData } from '../data/project_data';

export default function Project() {
  return (
    <div className='inset_shadow' style={{justifyContent: 'space-evenly'}}>
      {projectData.map((project, index) => (
        <div key={index} className='project_tab' style={{color: 'black'}}>
          <img style={{height: 'auto', width: '50%', border: '.4rem solid black'}} src={project.thumbnail} alt={project.ProjectName} />
          <h2>{project.ProjectName}</h2>
          <p>{project.description}</p>
          <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: '.7rem'}}>
          {project.stack.map((item, index) => <p className='stack' key={index}>{item}</p>)}
          </div>

          <div style={{display: 'flex', gap: '1rem', color: 'black'}}>
            <a style={{color: 'black'}} href={project.repo}>GitHub Repo</a>
            <a style={{color: 'black'}} href={project.link}>Link to Project</a>
          </div>
        </div>
      ))}
    </div>
  );
}
