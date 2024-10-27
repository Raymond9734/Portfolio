import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import profilePic from '../assets/profile-pic.png'

const Hero = () => {
  return (
    <section className={`relative w-full md:h-[120vh] h-[120vh] mx-auto`} style={{ backgroundColor: styles.darkBgColor }}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between`}>
        <div className='w-full md:w-1/2 mt-[-80px] md:mt-0'>
          <div className='flex flex-col items-center md:items-start mt-5'>
            <div className='md:hidden w-48 h-48 rounded-full bg-transparent overflow-hidden mb-8'>
              <motion.img 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                src={profilePic} 
                alt="Raymond" 
                className='w-full h-full object-cover transition-all duration-300 hover:scale-110 brightness-90' 
              />
            </div>
            <div className='w-full md:w-auto text-center md:text-left'>
              <h1 className={`${styles.heroHeadText}`}>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  style={{ display: 'inline-block' }}
                >
                  👋
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, staggerChildren: 0.1 }}
                >
                  {"Hi, I'm ".split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
                <motion.span 
                  style={{ color: styles.subDarkTxtColor }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  Raymond
                </motion.span>
              </h1>
              <motion.p
                className={`${styles.heroSubText} mt-2`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
              >
                {["A full stack developer ", <br key="br" className='hidden md:block' />, "and a UI/UX designer"].map((text, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                  >
                    {typeof text === 'string' ? text.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 2 + index * 0.1 + charIndex * 0.05 }}
                      >
                        {char}
                      </motion.span>
                    )) : text}
                  </motion.span>
                ))}
              </motion.p>
            </div>
            <div className='flex flex-row md:flex-col justify-center items-center mx-4 mt-4 md:mt-0'>
              <div style={{ backgroundColor: styles.subDarkTxtColor }} className='w-5 h-5 rounded-full' />
              <div className='h-1 w-20 md:w-1 md:h-80 ml-2 md:ml-0 md:mt-2' style={{ background: `linear-gradient(to ${window.innerWidth >= 768 ? 'bottom' : 'right'}, ${styles.subDarkTxtColor}, transparent)` }} />
            </div>
          </div>
        </div>
        <div className='hidden md:flex w-full md:w-1/2 justify-center items-center mt-8 md:mt-0'>
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className='w-64 h-64 rounded-full bg-transparent overflow-hidden'
          >
            <img src={profilePic} alt="Raymond" className='w-full h-full object-cover transition-all duration-300 hover:scale-110 brightness-90' />
          </motion.div>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center md:mb-0'>
        <a href='#about'>
          <div style={{ borderColor: styles.whiteColor }} className='w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2'>
            <motion.div 
              animate={{ y: [0, 24, 0] }} 
              transition={{ duration: 1.9, repeat: Infinity, repeatType: 'loop' }} 
              style={{ backgroundColor: styles.whiteColor }}
              className='w-3 h-3 rounded-full mb-1' 
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero