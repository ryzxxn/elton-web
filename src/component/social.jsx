import React from 'react';
import { socialData } from '../data/social_data'; // Importing the social data
import { FaGithubSquare, FaYoutube, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

export default function Social() {
  // Map of icon names to corresponding React icon components
  const iconComponents = {
    FaGithubSquare: FaGithubSquare,
    FaYoutube: FaYoutube,
    FaInstagramSquare: FaInstagramSquare,
    FaLinkedin: FaLinkedin,
    IoIosDocument: IoIosDocument,
  };

  return (
    <>
      <div className='inset_shadow' id='social_div' style={{height: 'max-content', display: 'flex', gap: '1rem' }}>
        {socialData.map((item, index) => (
          <div key={index} style={{ display: 'flex', flex: '1', width: '100%', flexDirection: 'column', textAlign: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            {iconComponents[item.icon] && (
              <span className="icon-wrapper">
                {React.createElement(iconComponents[item.icon])}
              </span>
            )}
            <p>{item.name}</p>
            <a className='follow-button' href={item.link} style={{borderRadius: '.5rem', textDecoration: 'none' }}>{item.text ? item.text : 'Follow'}</a>
          </div>
        ))}
      </div>
    </>
  );
}
