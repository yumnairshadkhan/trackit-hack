import React, { useContext } from 'react'
import { useAuth } from '../context/ContextProvider'

export default function Navbar() {
    const {user, logout} = useAuth();
    console.log(user)

  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-2xl font-bold">TractIt</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <p className='mr-4'>{!user ? "username" : user.name}</p>
      <button className='bg-red-600 text-white p-3 rounded' onClick={logout()}>Logout</button>
    </nav>
  </div>
</header>
  )
}