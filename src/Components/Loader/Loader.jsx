import React from 'react';
import { motion as m } from 'framer-motion';

function Loader() {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-7'>
            <div><m.h2
                className="text-white w-fit text-xl"
                animate={{
                    y: [0, -20, 0],
                    opacity: [1, 0],
                    transition: { duration: 1, repeat: Infinity }
                }}>
                ManagedCMS
            </m.h2>
            </div>

            <div className='flex gap-3'>
                <m.span
                    className="w-4 h-4 mx-1 bg-white rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [1, 0],
                        transition: { duration: 1, repeat: Infinity }
                    }}
                />
                <m.span
                    className="w-4 h-4 mx-1 bg-white rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [1, 0],
                        transition: { duration: 1, repeat: Infinity, delay: 0.2 }
                    }}
                />
                <m.span
                    className="w-4 h-4 mx-1 bg-white rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [1, 0],
                        transition: { duration: 1, repeat: Infinity, delay: 0.4 }
                    }}
                />
                <m.span
                    className="w-4 h-4 mx-1 bg-white rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [1, 0],
                        transition: { duration: 1, repeat: Infinity, delay: 0.6 }
                    }}
                />
                <m.span
                    className="w-4 h-4 mx-1 bg-white rounded-full"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [1, 0],
                        transition: { duration: 1, repeat: Infinity, delay: 0.8 }
                    }}
                />

            </div>
        </div>
    )
}

export default Loader;