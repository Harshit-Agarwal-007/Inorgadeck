import React from 'react'
import { motion } from "framer-motion"
function marquee() {
  return (
    <div className ="w-full py-10 bg-[#051526]">
        <div className='text border-t-2 border-b-2 border-zinc-380 gap-10 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeatType:"loop" , repeat:Infinity, duration:5}} className='text-[7vw] text-white tracking-[-.065em] uppercase font-[Founders Grotesk] font-semibold  -mt-[2vw]'> Inorgadeck </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeatType:"loop" ,repeat:Infinity, duration:5}} className='text-[7vw] text-white tracking-[-.065em] uppercase font-[Founders Grotesk]  font-semibold -mt-[2vw]'> Inorgadeck </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeatType:"loop" ,repeat:Infinity, duration:5}} className='text-[7vw] text-white tracking-[-.065em] uppercase font-[Founders Grotesk]  font-semibold -mt-[2vw]'> Inorgadeck </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear",repeatType:"loop" ,repeat:Infinity, duration:5}} className='text-[7vw] text-white tracking-[-.065em] uppercase font-[Founders Grotesk]  font-semibold -mt-[2vw]'> Inorgadeck </motion.h1>
        </div>
       
    </div>
  )
}

export default marquee