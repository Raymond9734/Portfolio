import React from 'react';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { styles } from '../style';
import { github } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-5 rounded-2xl sm:w-[360px] w-full'
        style={{ backgroundColor: styles.bgColor }}
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end items-end m-3 card-img_hover'>
            <div 
              onClick={() => window.open(source_code_link, "_blank")} 
              className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              style={{ backgroundColor: styles.darkBgColor }}
            >
              <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='font-bold text-[20px] sm:text-[24px]' style={{ color: styles.whiteColor }}>{name}</h3>
          <p className='mt-2 text-[12px] sm:text-[14px]' style={{ color: styles.hoverDarkWhiteTxtColor }}>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className='text-[12px] sm:text-[14px]' style={{ color: generateRandomColor() }}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="sm:px-16 px-8 sm:py-16 py-10 max-w-7xl mx-auto">
      <motion.div variants={textVariant()} className="text-left">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full mt-3 flex justify-start'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)} 
          className='text-[15px] sm:text-[17px] max-w-3xl leading-[30px]'
          style={{ color: styles.hoverDarkWhiteTxtColor }}
        >
          The following projects highlight my skills and experience through real-world applications of my work. Each project includes a brief description, along with links to code repositories, demonstrating my ability to solve complex problems, adapt to diverse technologies, and manage projects effectively from start to finish.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap justify-start gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};


// export default SectionWrapper(Works, "works");
export default Works