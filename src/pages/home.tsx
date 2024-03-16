import Profile from "../components/profile"
import Bento from "../components/bento"

export default function Home() {
  return (
    <>
      <div className='main_container'>
        <div className='main_container_left'>
        <Profile/>
        </div>
        <div className='main_container_right'>
        <Bento/>
        </div>
      </div>
    </>
  )
}
