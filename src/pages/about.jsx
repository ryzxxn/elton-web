import React from 'react'
import Navbar from '../components/navbar'

export default function About() {
  return (
    <>
    <div style={{height: '100vh'}}>
        <div className='page_main'>
            <Navbar/>
            <div style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{backgroundColor: 'white', padding: '1rem'}}>
                <h1>Hello!</h1>
                <p>My name is Elton Xavier Joseph Costa, and I am 22 years old. I was born in Goa and am currently pursuing a B.Tech degree in Computer Science and Engineering from Don Bosco College of Engineering. Prior to this, I obtained a diploma in Computer Engineering.
                  I have a deep passion for computers and the concepts they are built upon, and I am dedicated to continuously building and improving my skills in this field. I am constantly amazed by the potential of this industry and what can be achieved through technology.
                  In my free time, I enjoy cycling, reading, and video gaming. I also have a slight interest in cars, particularly from an engineering perspective. I love working on projects that keep me productive and allow me to explore new ideas. Hanging out with like-minded people to share and gain knowledge is something I value highly.
                  My goal is to develop tools and platforms that make people's lives easier, leveraging my skills and passion to create meaningful impact.
                </p>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
