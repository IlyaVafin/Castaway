import React from 'react'
import logo from './headerimg/logo.svg'
import './header.css'
export default function Header() {
  return (
    <>
    <header>
      <div className="container">
      <div className="header__inner">
        <nav className='nav'>
          <i className='nav__logo'>
            <img src = {logo}  alt="" />
          </i>
          <ul className='nav__list'>
            <li className='nav__list-item'><a href="">Home</a></li>
            <li className='nav__list-item'><a href="">Episodes</a></li>
            <li className='nav__list-item'><a href="">About</a></li>
            <li className='nav__list-item'><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
    </>
  )
}
