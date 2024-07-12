import React from 'react';
import { MessageSquareMore} from 'lucide-react';

function Header() {
  return (
    <div className='w-full px-2 lg:p-3'>
      <nav className='w-full h-[55px] sm:h-[60px] border-b border-b-white px-1 lg:border lg:border-white lg:rounded-lg lg:px-3 flex items-center justify-between '>
        <div>LOGO</div>

        <div className='flex gap-5 lg:flex-row-reverse'>
          <button className='w-fit text-white'><MessageSquareMore /></button>
          <ul className='flex gap-5'>
            <li>Services</li>
            <li>Resolutions</li>
            <li>About</li>
            <li>Insights</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;