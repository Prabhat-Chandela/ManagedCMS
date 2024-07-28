import React, { useCallback, useState } from 'react';
import { MessagesSquare, Component, Shrink, SendHorizontal } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion as m } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navitems = [
    {
      name: "Services",
      path: "/"
    },
    {
      name: "Resolutions",
      path: "/resolutions"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Perspective",
      path: "/perspective"
    }
  ]


  return (
    <div className='w-full px-2 lg:p-3 fixed z-50'>
      <nav className='w-full h-[60px] px-1 lg:px-3 flex items-center justify-between'>
        <div className=''>LOGO</div>

        <div className='flex items-center'>

          <button aria-label="Toggle menu" onClick={toggleMenu} className="lg:hidden w-fit text-[#fff] bg-black p-2 rounded-lg">
            {isOpen ? <Shrink /> : <Component />}
          </button>

          <ul className={`bg-[#fff] absolute top-[65px] right-0 w-full items-start h-screen p-2 flex flex-col gap-5 lg:gap-14 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:w-fit lg:items-center border-[0.5px] lg:rounded-3xl lg:py-2 lg:px-5 lg:h-fit  lg:flex-row lg:translate-x-0 transition-all ease-in duration-200`}>

            {
              navitems.map((item) => (
                <li key={item.name} className='w-full lg:flex lg:items-center justify-center gap-5'>
                  <span className='hidden lg:block w-[2px] h-[2px] p-[2px] bg-black rounded-full' />
                  <NavLink to={item.path} className={({ isActive }) => `w-full flex items-center justify-between border p-3 rounded-xl border-black lg:border-none lg:justify-normal lg:p-0 lg:rounded-none transition-all ease-in-out duration-200 ${isActive ? 'bg-black text-[#fff] lg:bg-transparent lg:text-black' : 'bg-transparent text-black lg:text-black/70 '} `}>
                    {item.name} <span className='lg:hidden'><SendHorizontal /></span>
                  </NavLink>
                </li>
              ))
            }

            <button className='w-fit text-[#fff] bg-black py-2 px-4 rounded-lg flex items-center justify-center gap-3 text-sm lg:hidden '><span>Contact Us</span> <MessagesSquare /></button>

          </ul>
        </div>

        <button className='hidden lg:flex w-fit text-[#fff] bg-black py-2 px-4 rounded-lg  items-center justify-center gap-3 text-sm'><span>Contact Us</span> <MessagesSquare /></button>

      </nav>
    </div>
  )
}

export default Header;