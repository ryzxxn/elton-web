import Project from "../components/project"
import { GoProjectRoadmap } from "react-icons/go";

export default function projectPage() {
    const Stack_evergreen = ['Javascript', 'Node.js', 'Next.js', 'React.js', 'MongoDB', 'NoSql', 'HTML', 'CSS'];
    const Stack_pis = ['Javascript', 'Node.js', 'express', 'React.js', 'WebHooks'];
    const Stack_pixel = ['Javascript', 'Node.js', 'WebSocket', 'express', 'React.js'];
    const Stack_leafSync = ['Typescript','Javascript', 'Node.js', 'Electron', 'Express', 'SQL Server', 'MySql', 'React.js', 'HTML', 'CSS'];
    const Stack_waifu = ['Javascript', 'Node.js', 'HTML', 'CSS', 'React.js'];
  return (
    <>
    <div>
        <h2 className="section_header"><GoProjectRoadmap />Projects</h2>
        <div id="project_container" className="section_container">
            <Project repo="https://github.com/ryzxxn/LeafSync" stack={Stack_leafSync} link="https://github.com/ryzxxn/LeafSync/releases/tag/v0.0.1" ProjectName="LeafSync" description="DataBase manager: run & execute queies on your SQL database" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_76.jpg"/>
            <Project repo="https://github.com/ryzxxn/evergreen.next" stack={Stack_evergreen} link="https://plantio.vercel.app/" ProjectName="Evergreen" description="Plant listing/selling" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_72.jpg"/>
            <Project repo="https://github.com/ryzxxn/pixel-io" stack={Stack_pixel} link="https://pixel-io.netlify.app/" ProjectName="Pixel-IO" description="Draw in realtime and share across multiple users" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_73.jpg"/>
            <Project repo="https://github.com/ryzxxn/PIS-bucket" stack={Stack_pis} link="https://pis.netlify.app/" ProjectName="PIS-Bucket(Personal CDN😋)" description="Who dosen't like Free Storage? -all images on this website are cached from here" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_74.jpg"/>
            <Project repo="https://github.com/ryzxxn/WAIFU" stack={Stack_waifu} link="https://mywaifu.netlify.app/" ProjectName="Waifu Gen" description="Dont judge me 😅 (i was learning to fetch and use Webhooks)" thumbnail="https://api.telegram.org/file/bot7167183620:AAHzEmlzEHw3fTlOgJBEr8CWs1DY54D3fuw/photos/file_75.jpg"/>
        </div>
    </div>
    </>
  )
}
