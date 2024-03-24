import { PiPlugsConnected } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { FaCode } from "react-icons/fa6";

import Social from "./social"; // Adjust the import path based on your file structure
import Util from "./util";
import Project from "./project";

import { Link } from "react-router-dom";
import { useState } from "react";
import GitHubCalendar from 'react-github-calendar';

import { socialData } from './Data/social_data';
import { utilData } from './Data/util_data';
import { projectData } from './Data/project_data'; // Adjust the import path based on your file structure


export default function Bento() {
    const [ShowProject, setShowProject] = useState<boolean>(false);

    function project() {
        setShowProject(!ShowProject);
    }
  return (
    <>
      <div className="bento_container">
        <h2 className="section_header"><PiPlugsConnected /> Connect</h2>
        <div id="social_container" className="section_container">
        {socialData.map((social, index: number) => (
                        <Social
                            key={index}
                            color={social.color}
                            link={social.link}
                            name={social.name}
                            text={social.text}
                            icon={social.icon}
                        />
                    ))}
        </div>

        <h2 className="section_header"><BsLightningCharge /> Stack</h2>
        <div id="util_container" className="section_container">
        {utilData.map((util, index: number) => (
                        <Util
                            key={index}
                            color={util.color}
                            name={util.name}
                            icon={util.icon}
                        />
                    ))}
        </div>

        <h2 className="section_header" onClick={project}><GoProjectRoadmap /> Projects </h2>
        {ShowProject && (
          <div id="project_container" className="section_container">
            {projectData.slice(0, 3).map((project, index: number) => (
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
            <div className="show_more_section">
            <Link to="/project" className="view_more_button">View More</Link>
            </div>
          </div>
        )}

          <h2 className="section_header"><FaCode /> Github</h2>
          <div className="parent_github_container">
            <div id="github_container" className="section_container">
            <GitHubCalendar style={{margin : '0px', padding: '0px'}} username="ryzxxn" colorScheme='light' year='last'/>
            </div>
          </div>
      </div>
    </>
  );
}