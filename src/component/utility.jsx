import React from "react";
import { IoLogoJavascript, IoLogoCss3, IoLogoFirebase, IoLogoElectron } from "react-icons/io5";
import { FaHtml5, FaJava, FaPhp, FaPython, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaAws, FaWordpress, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMysql, SiExpress, SiTailwindcss, SiBlender, SiVite, SiSocketdotio, SiTensorflow } from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs, TbFileTypeXml, TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
import { PiWebhooksLogo } from "react-icons/pi";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { utilData } from "../data/util_data";

export default function UTILITY() {

    const iconComponents = {
        IoLogoJavascript: IoLogoJavascript,
        FaHtml5: FaHtml5,
        IoLogoCss3: IoLogoCss3,
        SiTypescript: SiTypescript,
        TbBrandCpp: TbBrandCpp,
        FaJava: FaJava,
        FaPhp: FaPhp,
        FaPython: FaPython,
        DiMongodb: DiMongodb,
        SiMysql: SiMysql,
        SiExpress: SiExpress,
        FaReact: FaReact,
        FaNodeJs: FaNodeJs,
        TbBrandNextjs: TbBrandNextjs,
        SiTailwindcss: SiTailwindcss,
        SiBlender: SiBlender,
        FaGitAlt: FaGitAlt,
        FaFigma: FaFigma,
        BsFiletypeJson: BsFiletypeJson,
        TbFileTypeXml: TbFileTypeXml,
        PiWebhooksLogo: PiWebhooksLogo,
        FaAws: FaAws,
        BiLogoGoogleCloud: BiLogoGoogleCloud,
        IoLogoFirebase: IoLogoFirebase,
        SiVite: SiVite,
        SiSocketdotio: SiSocketdotio,
        TbBrandFramerMotion: TbBrandFramerMotion,
        IoLogoElectron: IoLogoElectron,
        FaWordpress: FaWordpress,
        TbBrandReactNative: TbBrandReactNative,
        FaDocker: FaDocker,
        SiTensorflow: SiTensorflow,
      };
  return (
    <>
    <div className='inset_shadow' id='social_div' style={{height: 'max-content', display: 'flex', gap: '1rem' }}>
        {utilData.map((item, index) => (
          <div key={index} style={{ display: 'flex', flex: '1', width: '100%', flexDirection: 'column', textAlign: 'center', flexWrap: 'wrap', gap: '.2rem' }}>
            {iconComponents[item.icon] && (
              <span className="util-wrapper">
                {React.createElement(iconComponents[item.icon])}
              </span>
            )}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
