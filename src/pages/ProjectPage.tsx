import Project from "../components/project"
import { Link } from "react-router-dom";

export default function projectPage() {
    const Stack_evergreen = ['Javascript', 'Node.js', 'Next.js', 'React.js', 'MongoDB', 'NoSql', 'HTML', 'CSS'];
    const Stack_pis = ['Javascript', 'Node.js', 'express', 'React.js', 'WebHooks'];
    const Stack_pixel = ['Javascript', 'Node.js', 'WebSocket', 'express', 'React.js'];
    const Stack_leafSync = ['Typescript','Javascript', 'Node.js', 'Electron', 'Express', 'SQL Server', 'MySql', 'React.js', 'HTML', 'CSS'];
    const Stack_waifu = ['Javascript', 'Node.js', 'HTML', 'CSS', 'React.js'];
    const Stack_hwnr = ['Python', 'Tensor Flow'];

  return (
    <>
    <div className="all_project_container">
      <Link to="/" className="section_header">Back</Link>
        <div id="projectPage_container" className="section_container">
        <Project repo="https://github.com/ryzxxn/LeafSync" stack={Stack_leafSync} link="https://github.com/ryzxxn/LeafSync/releases/tag/v0.0.1" ProjectName="LeafSync" description="DataBase manager: run & execute queies on your SQL database" thumbnail="https://i.ibb.co/J3TM5cN/leafsync.png"/>
            <Project repo="https://github.com/ryzxxn/evergreen.next" stack={Stack_evergreen} link="https://plantio.vercel.app/" ProjectName="Evergreen" description="Plant listing/selling" thumbnail="https://i.ibb.co/TRVVrVX/evergreen.png"/>
            <Project repo="https://github.com/ryzxxn/pixel-io" stack={Stack_pixel} link="https://pixel-io.eltoncosta.xyz/" ProjectName="Pixel-IO" description="Draw in realtime and share across multiple users" thumbnail="https://i.ibb.co/g7fDz9V/Desktop-2024-03-13-19-40-20-03.gif"/>
            <Project repo="https://github.com/ryzxxn/PIS-bucket" stack={Stack_pis} link="https://pis.eltoncosta.xyz/" ProjectName="PIS-Bucket(Personal Image Storage😋)" description="Who dosen't like Free Storage? -all images on this website are cached from here" thumbnail="https://i.ibb.co/TRVsKhc/upload.png"/>
            <Project repo="https://github.com/ryzxxn/WAIFU" stack={Stack_waifu} link="https://mywaifu.eltoncosta.xyz/" ProjectName="Waifu Gen" description="Dont judge me 😅 (i was learning to fetch and use Webhooks)" thumbnail="https://i.ibb.co/18QZpBH/waifu.png"/>
            <Project repo="https://github.com/ryzxxn/elton-web" stack={Stack_waifu} link="https://eltoncosta.xyz/" ProjectName="eltoncosta" description="hi! 👋" thumbnail="https://i.ibb.co/Lp7g1KG/proto.png"/>
            <Project repo="https://github.com/ryzxxn/AI/tree/main/Hand-written-number-recorgnition" stack={Stack_hwnr} link="#" ProjectName="Hand-Written Number Classifier" description="Trained a Model to recorgnize number written by Humans" thumbnail="https://i.ibb.co/zSbRMjg/hwnc.png"/>
        </div>
    </div>
    </>
  )
}
