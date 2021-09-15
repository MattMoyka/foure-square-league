import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h1><Link to='/'>Four Square League</Link></h1>
      <ul>
        <li><Link to='/teams'>All Teams</Link></li>
        <li><Link to='/new'>Add New Team</Link></li>
      </ul>
    </nav>
  )
}
