import { motion as m } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function HeroSection() {
  const [rotate , setRotate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  })

  return (
    <section className='w-full overflow-hidden flex flex-col gap-10'>

      <div className='w-full grid sm:place-items-center '>

        <div className='w-full py-20 flex flex-col sm:items-center sm:justify-center gap-2 p-2'>
          <h1 className='inline-flex text-6xl sm:text-8xl xl:text-[140px] uppercase tracking-tighter overflow-hidden drop-shadow-md'>L
            <span className='inline-flex w-[55px] h-[55px] sm:w-[90px] sm:h-[90px] xl:w-[130px] xl:h-[130px] rounded-full bg-black p-3 relative'>

              <span style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)` }} className='absolute inline-flex w-[90%] h-[30%] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> <span className='inline-flex w-[14px] h-[14px] sm:w-7 sm:h-7 xl:w-10 xl:h-10 rounded-full bg-white'></span></span>

            </span>

            <span className='inline-flex w-[55px] h-[55px] sm:w-[90px] sm:h-[90px] xl:w-[130px] xl:h-[130px] rounded-full bg-black p-3 relative'>
              <span style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)` }}  className='absolute inline-flex w-[90%] h-[30%] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> <span className='inline-flex w-[14px] h-[14px] sm:w-7 sm:h-7 xl:w-10 xl:h-10 rounded-full bg-white'></span></span>
            </span>
            KING TO
            <span className='hidden sm:inline-flex pl-3'>
              BUILD
            </span>

          </h1>


          <h1 className='text-6xl uppercase tracking-tighter mt-1 sm:hidden drop-shadow-md '>BUILD</h1>

          <h1 className='text-6xl sm:text-8xl xl:text-[140px] uppercase tracking-tighter flex items-center gap-2 drop-shadow-md'>

            <m.span initial={{ width: '0' }} animate={{ width: "150px" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='inline-flex h-[70px] w-[150px] bg-gray-500 rounded-lg sm:hidden'> </m.span>

            <m.span initial={{ width: '0' }} animate={{ width: "250px" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='hidden sm:inline-flex h-[126px] w-[250px] bg-gray-500 rounded-lg'> </m.span>

            DIGITAL</h1>

          <h1 className='text-6xl sm:text-8xl xl:text-[140px] uppercase tracking-tighter mt-1 sm:mt-3 drop-shadow-md'>PRESENCE .</h1>
        </div>


      </div>


    </section>
  )
}

export default HeroSection;