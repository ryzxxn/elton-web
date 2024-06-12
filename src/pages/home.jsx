import React from 'react'
import Navbar from '../components/navbar'
import ResumeButton from '../components/resumeButton'
import Stack from '../components/stack'
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
  return (
    <>
    <div style={{height: '100vh', overflowY: 'hidden'}}>
        <div className='page_main' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Navbar/>
            <div style={{display: 'flex', height: '100%',flexDirection: 'column', flex: '1', gap: '6%'}}>
                <img className='cloud' src='./cloudtop.svg' alt=''></img>
                <div style={{ display: 'flex',  justifyContent: 'center', alignItems: 'start', width: '100%', flexDirection: 'column', padding: '0rem 0rem'}}>
                    <p style={{fontFamily: 'monospace', fontWeight: '800', fontStyle: 'italic', fontSize: '2rem', color: 'white', padding: '0rem 1rem'}}>Hi! my name is Elton Costa</p>
                    <div style={{fontFamily: 'monospace', fontWeight: '800', fontStyle: 'italic', fontSize: '1.5rem', color: 'white', width: 'auto', padding: '0rem 1rem'}}>A software engineer from Goa currently completing my BTech degree in Computer Science and Engineering. I specialize in crafting innovative solutions to tech challenges and enjoy exploring new ideas and technologies. Sharing knowledge is important to me, and I'm always eager to spread what I've learned.</div>
                </div>
                <ResumeButton/>
                <Stack/>
                <div className='gradient' style={{display: 'flex', padding: '2rem 1rem'}}>
                    <GitHubCalendar colorScheme='light' year= 'last' username="ryzxxn" loading={false}  style={{color: 'black'}}/>
                </div>
            </div>
        </div>


    </div>
    </>
  )
}
