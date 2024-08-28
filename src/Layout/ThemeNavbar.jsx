//import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.webp'
import { Link } from 'react-scroll'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
const ThemeNavbar = () => {
  const navlist = (

    <>
      <ul className="flex lg:flex-row flex-col list-none lg:gap-7  gap-4 text-white">
        <li className='hover:text-primary'>
          <Link to='banner' offset={-50} duration={500} smooth={true} spy={true}>Home</Link>
        </li>
        <li className='hover:text-primary'>
          <Link to="works" smooth={true} duration={500} offset={-50} spy={true}>Works</Link>
        </li>
        <li className='hover:text-primary'>
          <Link to='skills' offset={-50} duration={500} smooth={true} spy={true}>skills</Link>
        </li>
        <li className='hover:text-primary'>
          <Link to='about' offset={-280} duration={500} smooth={true} spy={true}>About</Link>
        </li>
        <li className='hover:text-primary'>
          <Link to='contact' offset={-50} duration={500} smooth={true} spy={true}>Contact</Link>
        </li>
        <li className='hover:text-primary'>
          <Link to={'/'}><button className='navbtn rounded-full px-6 py-1 text-md text-light border border-light lg:hidden'>Hire me!</button></Link>
        </li>
      </ul>
    </>

  )
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className='w-full p-4 relative bg-black'>
        <div className="container mx-auto">
          <div className="w-full flex justify-between items-center">
            {/* Logo and Email Section */}
            <div className="flex items-center gap-3">
              <img src={logo} alt='logo' className='h-[50px]' />
              <Link to={'mailto:muskanvision2019@gmail.com'} className='text-light text-md'>
                muskanvision2019@gmail.com
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="lg:inline-block lg:mx-auto hidden">
              {navlist}
            </div>
            <div className="lg:block hidden">
              <Link to={'/'}><button className='navbtn rounded-full px-6 py-1 text-md text-light border border-light'>Hire me!</button></Link>
            </div>
            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className='lg:hidden block text-white'>
              {open ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation List */}
        {open && (
          <div className="w-full bg-slate-200 text-black  top-full left-0 lg:hidden block text-center">
            {navlist}
          </div>
        )}
      </section>

    </>
  )
}

export default ThemeNavbar