import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className='flex justify-end p-10'>
      <nav className="flex gap-10">
        {location.pathname !== "/" && <NavLink to="/">Home</NavLink>}
        <NavLink
          className={({ isActive }) => `text-${isActive ? 'blue-500 ' : 'black'} no-underline`}
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) => `text-${isActive ? 'blue-500 ' : 'black'} no-underline`}
          to="/albums"
        >
          Albums
        </NavLink>
      </nav>
    </header>
  )
}

export default React.memo(Header)