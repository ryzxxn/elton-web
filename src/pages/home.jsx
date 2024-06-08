import React from 'react'
import Social from '../component/social'
import UTILITY from '../component/utility'
import Project from '../component/project'
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
  return (
    <div className='main' style={{height: '100dvh', display: 'flex',}}>
        <div className='main_left' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', gap: '1rem'}}>
            <img style={{height: '11rem', width: '11rem', borderRadius: '50%'}} src='./picture.png'></img>
            <p style={{color: 'black', textAlign: 'left', fontSize: '2.4rem'}}>Elton Costa</p>
            <p style={{color: 'black'}}>
            A software engineer from Goa currently completing my BTech degree. I specialize in crafting innovative solutions to tech challenges and enjoy exploring new ideas and technologies. Sharing knowledge is important to me, and I'm always eager to spread what I've learned.
            </p>
        </div>

        <div className='main_right'>
          <div>
          <h3>Connect</h3>
          <Social/>
          </div>

          <div>
            <h3>Stack</h3>
            <UTILITY/>
          </div>

          <GitHubCalendar colorScheme='light' year= 'last' username="ryzxxn" />

          <div>
            <h3>Project</h3>
            <Project/>
          </div>
        </div>
    </div>
  )
}
