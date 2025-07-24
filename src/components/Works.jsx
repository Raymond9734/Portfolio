import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { styles } from '../style';
import { github } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <>
      <motion.div 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setShowModal(true)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
          style={{ 
            backgroundColor: styles.bgColor,
            height: '500px', // Standardized height
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
            <div className='absolute inset-0 flex justify-end items-end m-3 card-img_hover gap-2'>
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }} 
                className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                style={{ backgroundColor: styles.darkBgColor }}
              >
                <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
              </div>
              {live_link && (
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(live_link, "_blank");
                  }} 
                  className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  style={{ backgroundColor: styles.darkBgColor }}
                >
                  <span className="text-white text-xs">Live</span>
                </div>
              )}
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='font-bold text-[20px] sm:text-[24px]' style={{ color: styles.whiteColor }}>{name}</h3>
            <p className='mt-2 text-[12px] sm:text-[14px] line-clamp-3' style={{ color: styles.hoverDarkWhiteTxtColor }}>
              {description}
            </p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name} className='text-[12px] sm:text-[14px]' style={{ color: generateRandomColor() }}>
                #{tag.name}
              </p>
            ))}
          </div>
          
          {/* View Details Overlay */}
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 rounded-2xl"
            style={{ 
              opacity: isHovering ? 0.7 : 0,
              pointerEvents: isHovering ? 'auto' : 'none'
            }}
          >
            <span 
              className="px-4 py-2 bg-white text-black rounded-md transform scale-0 transition-transform duration-300"
              style={{ transform: isHovering ? 'scale(1)' : 'scale(0)' }}
            >
              View Details
            </span>
          </div>
        </Tilt>
      </motion.div>

      {/* Project Modal */}
      {showModal && (
        <ProjectModal 
          project={{ index, name, description, tags, image, source_code_link, live_link }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const { name, description, tags, image, source_code_link, live_link } = project;
  
  const generateRandomColor = () => {
    // Generate mid-bright colors by using HSL
    const hue = Math.floor(Math.random() * 360); // Random hue (0-359)
    const saturation = 70 + Math.floor(Math.random() * 30); // Saturation between 70-100%
    const lightness = 45 + Math.floor(Math.random() * 15); // Lightness between 45-60%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
      onClick={onClose}
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#2b2b2b] p-6 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-white text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center rounded-full"
          onClick={onClose}
          style={{ backgroundColor: styles.darkBgColor }}
        >
          &times;
        </button>
        
        <div className="flex flex-col gap-6">
          <div className="w-full rounded-xl overflow-hidden flex justify-center items-center" style={{ maxHeight: '500px' }}>
            <img 
              src={image} 
              alt={name} 
              className="w-full object-contain max-h-[500px]" 
            />
          </div>
          
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-4" style={{ color: styles.whiteColor }}>{name}</h2>
            <p className="text-base mb-6" style={{ color: styles.hoverDarkWhiteTxtColor }}>
              {description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag) => {
                const tagColor = generateRandomColor();
                return (
                  <span 
                    key={tag.name} 
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      color: tagColor,
                      border: `1px solid ${tagColor}`
                    }}
                  >
                    #{tag.name}
                  </span>
                );
              })}
            </div>
            
            <div className="flex gap-4">
              <a 
                href={source_code_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                style={{ 
                  backgroundColor: styles.darkBgColor,
                  color: styles.whiteColor,
                  border: `1px solid ${styles.subLightColor}`
                }}
              >
                <img src={github} alt="GitHub" className="w-5 h-5" />
              </a>
              
              {live_link && (
                <a 
                  href={live_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                  style={{ 
                    backgroundColor: styles.subLightColor,
                    color: styles.darkBgColor
                  }}
                >
                  <span>🌐</span>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
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