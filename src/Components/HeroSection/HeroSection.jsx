import { motion as m } from 'framer-motion';
import React from 'react';

function HeroSection() {
  return (
    <section className='w-full min-h-screen overflow-hidden flex flex-col gap-10'>

      <div className='w-full grid gap-2 lg:gap-0 xl:grid-cols-12'>

        <div className='xl:col-span-7 pl-[8px] sm:pl-[16px] pr-[6px] py-3 sm:py-14 flex flex-col gap-2'>
          <h1 className='text-4xl sm:text-8xl uppercase tracking-tighter'>Build Digital</h1>

          <h1 className='text-4xl sm:text-8xl uppercase tracking-tighter flex items-center gap-2'>

            <m.span initial={{ width: '0' }} animate={{ width: "100px" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='inline-flex h-[50px] w-[100px] bg-gray-500 rounded-lg sm:hidden'> </m.span>

            <m.span initial={{ width: '0' }} animate={{ width: "200px" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='hidden sm:inline-flex h-[126px] w-[200px] bg-gray-500 rounded-lg'> </m.span>

            Presence</h1>

          <h1 className='text-4xl sm:text-8xl uppercase tracking-tighter mt-1 sm:mt-3'>With Us</h1>
        </div>

        <div className='xl:col-span-5 grid place-items-center'>

          <div className='bg-red-600 flex flex-col h-[250px] sm:h-[300px] w-[90%] xl:w-[90%] xl:h-[80%] rounded-lg overflow-hidden'>
            <m.picture initial={{y:"0"}} animate={{y:"-100%"}} transition={{ease:"linear", repeat:"Infinity", duration:5}} className='w-full min-h-full  bg-orange-500'></m.picture>
            <m.picture initial={{y:"100"}} animate={{y:"-200%"}} transition={{ease:"linear", repeat:"Infinity", duration:5}} className='w-full min-h-full  bg-green-500'></m.picture>
            <m.picture initial={{y:"200"}} animate={{y:"-300%"}} transition={{ease:"linear", repeat:"Infinity", duration:5}} className='w-full min-h-full  bg-blue-500'></m.picture>
          </div>

        </div>

      </div>

      <div className='w-full border-t-2 border-zinc-300'>

      </div>

    </section>
  )
}

export default HeroSection;