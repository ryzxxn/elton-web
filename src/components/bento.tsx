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

import Social from "./social";
import Util from "./util";
import Project from "./project";

import { Link } from "react-router-dom";

export default function Bento() {
    const Stack_evergreen = ['Javascript', 'Node.js', 'Next.js', 'React.js', 'MongoDB', 'NoSql', 'HTML', 'CSS'];
    const Stack_pis = ['Javascript', 'Node.js', 'express', 'React.js', 'WebHooks'];
    const Stack_pixel = ['Javascript', 'Node.js', 'WebSocket', 'express', 'React.js'];
    const Stack_leafSync = ['Typescript','Javascript', 'Node.js', 'Electron', 'Express', 'SQL Server', 'MySql', 'React.js', 'HTML', 'CSS'];
    const Stack_waifu = ['Javascript', 'Node.js', 'HTML', 'CSS', 'React.js'];


  return (
    <>
      <div className="bento_container">
        <h2 className="section_header"><PiPlugsConnected /> Connect</h2>
        <div id="social_container" className="section_container">
            <Social color='#242424' link='https://github.com/ryzxxn' name='Github' icon={FaGithubSquare} />
            <Social color='#038cfc' link='https://www.linkedin.com/in/elton-costa-ab8500219/' name='LinkedIn' icon={FaLinkedin} />
            <Social color='red' link='https://www.youtube.com/channel/UCaezFkINkWciXDTwrkABDhw' name='Youtube' icon={FaYoutube} />
            <Social color='magenta' link='https://www.instagram.com/eltoncosta_45/' name='Instagram' icon={FaSquareInstagram} />
        </div>

        <h2 className="section_header"><BsLightningCharge /> Stack</h2>
        <div id="util_container" className="section_container">
            <Util color="#242424" name='Javascript' icon={IoLogoJavascript}/>
            <Util color="#242424" name='HTML' icon={FaHtml5}/>
            <Util color="#242424" name='CSS' icon={IoLogoCss3}/>
            <Util color="#242424" name='Typescript' icon={SiTypescript}/>
            <Util color="#242424" name='C++' icon={TbBrandCpp}/>
            <Util color="#242424" name='Java' icon={FaJava}/>
            <Util color="#242424" name='PHP' icon={FaPhp}/>
            <Util color="#242424" name='Python' icon={FaPython}/>
            <Util color="#242424" name='Mongo DB' icon={DiMongodb}/>
            <Util color="#242424" name='MySql' icon={SiMysql}/>
            <Util color="#242424" name='Express' icon={SiExpress}/>
            <Util color="#242424" name='React' icon={FaReact}/>
            <Util color="#242424" name='Node.js' icon={FaNodeJs}/>
            <Util color="#242424" name='Next.js' icon={TbBrandNextjs}/>
            <Util color="#242424" name='Tailwind' icon={SiTailwindcss}/>
            <Util color="#242424" name='Blender' icon={SiBlender}/>
            <Util color="#242424" name='Git' icon={FaGitAlt}/>
            <Util color="#242424" name='Premier Pro' icon={SiAdobepremierepro}/>
            <Util color="#242424" name='Photoshop' icon={SiAdobephotoshop}/>
            <Util color="#242424" name='Figma' icon={FaFigma}/>
            <Util color="#242424" name='Json' icon={BsFiletypeJson}/>
            <Util color="#242424" name='Xml' icon={TbFileTypeXml}/>
            <Util color="#242424" name='Webhooks' icon={PiWebhooksLogo}/>
            <Util color="#242424" name='AWS' icon={FaAws}/>
            <Util color="#242424" name='GCP' icon={BiLogoGoogleCloud}/>
            <Util color="#242424" name='Firebase' icon={IoLogoFirebase}/>
            <Util color="#242424" name='Vite' icon={SiVite}/>
            <Util color="#242424" name='Office' icon={SiMicrosoftoffice}/>
            <Util color="#242424" name='WebSocket' icon={SiSocketdotio}/>
            <Util color="#242424" name='framer Motion' icon={TbBrandFramerMotion}/>
            <Util color="#242424" name='Electron' icon={IoLogoElectron}/>
        </div>

        <h2 className="section_header"><GoProjectRoadmap /> Projects</h2>
        <div id="project_container" className="section_container">
            <Project repo="https://github.com/ryzxxn/LeafSync" stack={Stack_leafSync} link="https://github.com/ryzxxn/LeafSync/releases/tag/v0.0.1" ProjectName="LeafSync" description="DataBase manager: run & execute queies on your SQL database" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_77.jpg"/>
            <Project repo="https://github.com/ryzxxn/evergreen.next" stack={Stack_evergreen} link="https://plantio.vercel.app/" ProjectName="Evergreen" description="Plant listing/selling" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_72.jpg"/>
            <Project repo="https://github.com/ryzxxn/pixel-io" stack={Stack_pixel} link="https://pixel-io.eltoncosta.xyz/" ProjectName="Pixel-IO" description="Draw in realtime and share across multiple users" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_73.jpg"/>
            <Project repo="https://github.com/ryzxxn/PIS-bucket" stack={Stack_pis} link="https://pis.eltoncosta.xyz/" ProjectName="PIS-Bucket(Personal CDN😋)" description="Who dosen't like Free Storage? -all images on this website are cached from here" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_74.jpg"/>
            <Project repo="https://github.com/ryzxxn/WAIFU" stack={Stack_waifu} link="https://mywaifu.eltoncosta.xyz/" ProjectName="Waifu Gen" description="Dont judge me 😅 (i was learning to fetch and use Webhooks)" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_75.jpg"/>
            <div className="show_more_section">
              <Link to="/project" className="view_more_button">View More</Link>
            </div>
        </div>

      </div>
    </>
  );
}
