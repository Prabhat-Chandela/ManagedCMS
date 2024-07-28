import React from 'react';
import { motion as m } from 'framer-motion';

function HeroBanner() {
    return (
        <section className='py-10 sm:py-14 w-full rounded-tl-xl rounded-tr-xl sm:rounded-tl-3xl sm:rounded-tr-3xl bg-orange-600'>
            <div className='border-t-2 border-b-2 border-zinc-100 flex whitespace-nowrap overflow-hidden'>
                <m.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:10}} className='text-[#fff] text-6xl sm:text-8xl xl:text-[140px] py-5 pr-5'>WE MANAGE CMS</m.h1>
                <m.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:10}} className='text-[#fff] text-6xl sm:text-8xl xl:text-[140px] py-5 pr-5'>WE MANAGE CMS</m.h1>
                <m.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity , duration:10}} className='text-[#fff] text-6xl sm:text-8xl xl:text-[140px] py-5'>WE MANAGE CMS</m.h1>
            </div>
        </section>
    )
}

export default HeroBanner;