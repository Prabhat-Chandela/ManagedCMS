import React, { useCallback, useState } from 'react';
import { Feather,Logs,Minimize } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);


  return (
    <div className='w-full px-2 lg:p-3 fixed'>
      <nav className='w-full h-[60px] border-b border-b-white px-1 lg:border lg:border-white lg:rounded-lg lg:px-3 flex items-center justify-between '>
        <div>LOGO</div>

        <div className='flex gap-5 lg:gap-9 lg:flex-row-reverse items-center'>
          <button className='w-fit text-black bg-white p-2 rounded-lg'><Feather /></button>

          <button aria-label="Toggle menu" onClick={toggleMenu} className="lg:hidden w-fit text-black bg-white p-2 rounded-lg">
            {isOpen ?<Minimize /> : <Logs /> }
          </button>

          <ul className={`absolute top-[65px] right-0 w-full items-start h-screen p-7 flex flex-col gap-7 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:w-fit lg:items-center lg:h-fit lg:p-0 lg:flex-row lg:translate-x-0 transition-all ease-in duration-200`}>
            <li>Services</li>
            <li>Resolutions</li>
            <li>About</li>
            <li>Perspective</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;