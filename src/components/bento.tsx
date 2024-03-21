import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiPlugsConnected } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { BsFiletypeJson } from "react-icons/bs";
import { TbFileTypeXml } from "react-icons/tb";
import { PiWebhooksLogo } from "react-icons/pi";
import { FaAws } from "react-icons/fa";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { SiMicrosoftoffice } from "react-icons/si";
import { GoProjectRoadmap } from "react-icons/go";
import { SiSocketdotio } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";
import { IoLogoDiscord } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

import Social from "./social";
import Util from "./util";
import Project from "./project";

import { Link } from "react-router-dom";
import { useState } from "react";
import GitHubCalendar from 'react-github-calendar';

export default function Bento() {
    const Stack_evergreen = ['Javascript', 'Node.js', 'Next.js', 'React.js', 'MongoDB', 'NoSql', 'HTML', 'CSS'];
    const Stack_pis = ['Javascript', 'Node.js', 'express', 'React.js', 'WebHooks'];
    const Stack_pixel = ['Javascript', 'Node.js', 'WebSocket', 'express', 'React.js'];
    const Stack_leafSync = ['Typescript','Javascript', 'Node.js', 'Electron', 'Express', 'SQL Server', 'MySql', 'React.js', 'HTML', 'CSS'];
    const Stack_waifu = ['Javascript', 'Node.js', 'HTML', 'CSS', 'React.js'];

  const [ShowProject, setShowProject]= useState<boolean>(false)

  function project()
  {
    if (ShowProject === true) {
      setShowProject(false)
    }
    else{
      setShowProject(true)
    }
  }
  return (
    <>
      <div className="bento_container">
        <h2 className="section_header"><PiPlugsConnected /> Connect</h2>
        <div id="social_container" className="section_container">
            <Social color='#242424' link='https://github.com/ryzxxn' name='Github' text="" icon={FaGithubSquare} />
            <Social color='black' link='https://raw.githubusercontent.com/ryzxxn/learning/main/resume/resume/resumeEltonCosta.docx' text='Download' name='Resume' icon={IoIosDocument} />
            <Social color='#038cfc' link='https://www.linkedin.com/in/elton-costa-ab8500219/' text="" name='LinkedIn' icon={FaLinkedin} />
            <Social color='red' link='https://www.youtube.com/channel/UCaezFkINkWciXDTwrkABDhw' text="" name='Youtube' icon={FaYoutube} />
            <Social color='magenta' link='https://www.instagram.com/eltoncosta_45/' name='Instagram' text="" icon={FaSquareInstagram} />
            <Social color='#681cff' link='https://discord.com/users/Ryzxxn#5664' name='Discord' text="Message" icon={IoLogoDiscord} />
            <Social color='#002b75' link='https://steamcommunity.com/id/ryzxxn' name='Steam' text="" icon={FaSteam} />
        </div>

        <h2 className="section_header"><BsLightningCharge /> Stack</h2>
        <div id="util_container" className="section_container">
            <Util id="util1" color="#242424" name='Javascript' icon={IoLogoJavascript}/>
            <Util id="util2" color="#242424" name='HTML' icon={FaHtml5}/>
            <Util id="util3" color="#242424" name='CSS' icon={IoLogoCss3}/>
            <Util id="util4" color="#242424" name='Typescript' icon={SiTypescript}/>
            <Util id="util5" color="#242424" name='C++' icon={TbBrandCpp}/>
            <Util id="util6" color="#242424" name='Java' icon={FaJava}/>
            <Util id="util7" color="#242424" name='PHP' icon={FaPhp}/>
            <Util id="util8" color="#242424" name='Python' icon={FaPython}/>
            <Util id="util9" color="#242424" name='Mongo DB' icon={DiMongodb}/>
            <Util id="util10" color="#242424" name='MySql' icon={SiMysql}/>
            <Util id="util11" color="#242424" name='Express' icon={SiExpress}/>
            <Util id="util12" color="#242424" name='React' icon={FaReact}/>
            <Util id="util13" color="#242424" name='Node.js' icon={FaNodeJs}/>
            <Util id="util14" color="#242424" name='Next.js' icon={TbBrandNextjs}/>
            <Util id="util15" color="#242424" name='Tailwind' icon={SiTailwindcss}/>
            <Util id="util16" color="#242424" name='Blender' icon={SiBlender}/>
            <Util id="util17" color="#242424" name='Git' icon={FaGitAlt}/>
            <Util id="util18" color="#242424" name='Premier Pro' icon={SiAdobepremierepro}/>
            <Util id="util19" color="#242424" name='Photoshop' icon={SiAdobephotoshop}/>
            <Util id="util20" color="#242424" name='Figma' icon={FaFigma}/>
            <Util id="util21" color="#242424" name='Json' icon={BsFiletypeJson}/>
            <Util id="util22" color="#242424" name='Xml' icon={TbFileTypeXml}/>
            <Util id="util23" color="#242424" name='Webhooks' icon={PiWebhooksLogo}/>
            <Util id="util24" color="#242424" name='AWS' icon={FaAws}/>
            <Util id="util26" color="#242424" name='GCP' icon={BiLogoGoogleCloud}/>
            <Util id="util27" color="#242424" name='Firebase' icon={IoLogoFirebase}/>
            <Util id="util28" color="#242424" name='Vite' icon={SiVite}/>
            <Util id="util29" color="#242424" name='Office' icon={SiMicrosoftoffice}/>
            <Util id="util30" color="#242424" name='WebSocket' icon={SiSocketdotio}/>
            <Util id="util31" color="#242424" name='framer Motion' icon={TbBrandFramerMotion}/>
            <Util id="util32" color="#242424" name='Electron' icon={IoLogoElectron}/>
            <Util id="util33" color="#242424" name='Wordpress' icon={FaWordpress}/>
            <Util id="util34" color="#242424" name='React Native' icon={TbBrandReactNative}/>
            <Util id="util35" color="#242424" name='Docker' icon={FaDocker}/>
        </div>

        <h2 className="section_header" onClick={project}><GoProjectRoadmap /> Projects </h2>
        {ShowProject && (
          <div id="project_container" className="section_container">
            <Project repo="https://github.com/ryzxxn/LeafSync" stack={Stack_leafSync} link="https://github.com/ryzxxn/LeafSync/releases/tag/v0.0.1" ProjectName="LeafSync" description="DataBase manager: run & execute queies on your SQL database" thumbnail="https://i.ibb.co/J3TM5cN/leafsync.png"/>
            <Project repo="https://github.com/ryzxxn/evergreen.next" stack={Stack_evergreen} link="https://plantio.vercel.app/" ProjectName="Evergreen" description="Plant listing/selling" thumbnail="https://i.ibb.co/TRVVrVX/evergreen.png"/>
            <Project repo="https://github.com/ryzxxn/pixel-io" stack={Stack_pixel} link="https://pixel-io.eltoncosta.xyz/" ProjectName="Pixel-IO" description="Draw in realtime and share across multiple users" thumbnail="https://i.ibb.co/g7fDz9V/Desktop-2024-03-13-19-40-20-03.gif"/>
            <Project repo="https://github.com/ryzxxn/PIS-bucket" stack={Stack_pis} link="https://pis.eltoncosta.xyz/" ProjectName="PIS-Bucket(Personal CDN😋)" description="Who dosen't like Free Storage? -all images on this website are cached from here" thumbnail="https://i.ibb.co/TRVsKhc/upload.png"/>
            <Project repo="https://github.com/ryzxxn/WAIFU" stack={Stack_waifu} link="https://mywaifu.eltoncosta.xyz/" ProjectName="Waifu Gen" description="Dont judge me 😅 (i was learning to fetch and use Webhooks)" thumbnail="https://i.ibb.co/18QZpBH/waifu.png"/>
            <Project repo="https://github.com/ryzxxn/elton-web" stack={Stack_waifu} link="https://eltoncosta.xyz/" ProjectName="eltoncosta" description="hi! 👋" thumbnail="https://i.ibb.co/Lp7g1KG/proto.png"/>
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