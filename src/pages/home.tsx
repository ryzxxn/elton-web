import Profile from "../components/profile"
import Bento from "../components/bento"
import WakeupProtocol from "../components/wakeup_protocol"

export default function Home() {
  return (
    <>
    <WakeupProtocol/>
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
