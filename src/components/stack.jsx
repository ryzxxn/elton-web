import React from 'react'
import { IoLogoJavascript, IoLogoCss3, IoLogoFirebase, IoLogoElectron } from "react-icons/io5";
import { FaHtml5, FaJava, FaPhp, FaPython, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaAws, FaWordpress, FaDocker } from "react-icons/fa";
import { SiTypescript, SiMysql, SiExpress, SiTailwindcss, SiBlender, SiVite, SiSocketdotio, SiTensorflow } from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs, TbFileTypeXml, TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
import { PiWebhooksLogo } from "react-icons/pi";
import { BiLogoGoogleCloud } from "react-icons/bi"
import memoryState from 'memory-state';

export default function Stack() {
    const stack = memoryState.getState('stack');

    const icons = {
        IoLogoJavascript,
        IoLogoCss3,
        IoLogoFirebase,
        IoLogoElectron,
        FaHtml5,
        FaJava,
        FaPhp,
        FaPython,
        FaReact,
        FaNodeJs,
        FaGitAlt,
        FaFigma,
        FaAws,
        FaWordpress,
        FaDocker,
        SiTypescript,
        SiMysql,
        SiExpress,
        SiTailwindcss,
        SiBlender,
        SiVite,
        SiSocketdotio,
        SiTensorflow,
        TbBrandCpp,
        TbBrandNextjs,
        TbFileTypeXml,
        TbBrandFramerMotion,
        TbBrandReactNative,
        DiMongodb,
        BsFiletypeJson,
        PiWebhooksLogo,
        BiLogoGoogleCloud
      };
  
    return (
        <>
        <div style={{boxShadow: '0px 0px .5rem rgb(0,0,0,0.3) inset', padding: '2rem', margin: '0rem 1rem', borderRadius: '1rem' }}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', padding: '0rem 0rem',}}>
                {stack.map((item, index) => {
                const IconComponent = icons[item.icon];
                return (
                    <div key={index} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <IconComponent color={item.color} fontSize={'2rem'}/>
                    <p style={{color: 'white', fontSize: '1.1rem'}}>{item.name}</p>
                    </div>
                );
                })}
            </div>
        </div>
      </>
    );
  }
