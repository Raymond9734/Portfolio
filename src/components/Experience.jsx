import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { SectionWrapper } from '../hoc' 
import { textVariant } from '../utils/motion'
import { experiences } from '../constants'

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: styles.darkBgColor, color: styles.whiteColor }}
      contentArrowStyle={{ borderRight: `7px solid ${styles.subLightColor}` }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full" style={{ border: `2px solid ${styles.subLightColor}` }}>
          <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold" style={{ color: styles.whiteColor }}>{experience.title}</h3>
        <p className="text-[16px] font-semibold" style={{ color: styles.subLightColor, margin: 0 }}>{experience.company_name}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} className="text-[14px] pl-1 tracking-wider" style={{ color: styles.whiteColor }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")