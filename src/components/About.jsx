import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full p-[1px] rounded-[20px] shadow-lg'
        style={{
          backgroundColor: styles.subLightColor,
          boxShadow: '0 4px 6px rgba(255, 255, 255, 0.3), 0 1px 3px rgba(255, 255, 255, 0.3)',
        }}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          style={{ backgroundColor: styles.bgColor }}
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-[20px] font-bold text-center' style={{ color: styles.whiteColor }}>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
        style={{ color: styles.whiteColor }}
      >
        I'm a versatile software developer with experience in building both web and desktop applications. My projects range from custom user registration systems and profile management platforms to full-featured desktop applications, always focused on creating user-friendly, efficient solutions. I prioritize clean design, responsiveness, and functionality, ensuring each project offers a polished and reliable experience.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")