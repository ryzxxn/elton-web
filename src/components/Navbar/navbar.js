import './navbar.css'
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div className='navbar'>
        <div className='left_nav'>
          <Link className='redirect_link' to='/'>Elton costa</Link>
        </div>
        <div className='right_nav'>
          <Link className='redirect_link' to='/resume'>Resume</Link>
        </div>
    </div>
  )
}
