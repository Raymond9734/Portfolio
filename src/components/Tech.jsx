import React from 'react'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'

const Tech = () => {
  const iconsPerPill = 4;
  const totalPills = Math.ceil(technologies.length / iconsPerPill);

  const pillColors = ["#4ADE80", "#FDE047", "#60A5FA", "#F472B6"];
  const pillsData = [];

  for (let i = 0; i < totalPills; i++) {
    pillsData.push({
      color: pillColors[i % pillColors.length],
      rotation: 15
    });
  }

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedPills = isMobile ? pillsData.slice(0, 3) : pillsData;

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center'>
      <div className='w-full lg:w-1/3 pr-0 lg:pr-8 mb-8 lg:mb-0'>
        <p className={styles.sectionSubText}>My Stack</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
        <div className={`${styles.sectionSubText} mt-4`}>
          <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
              <span
                key={tech.name}
                className="inline-block mb-2 mr-2"
                style={{
                  color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
                }}
              >
                #{tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='w-full lg:w-2/3 flex flex-wrap justify-center gap-7'>
        {displayedPills.map((pill, index) => (
          <NavigationPill
            key={index}
            color={pill.color}
            technologies={technologies.slice(index * iconsPerPill, (index + 1) * iconsPerPill)}
            label={pill.label}
            rotation={pill.rotation}
          />
        ))}
      </div>
    </div>
  )
}

const Logo = ({ icon, className = "" }) => {
  return (
    <div className={`w-12 h-12 rounded-full bg-black flex items-center justify-center ${className}`}>
      <img src={icon} alt="technology icon" className='w-8 h-8 object-contain' />
    </div>
  );
};

const NavigationPill = ({
  color,
  technologies = [],
  label,
  rotation = 0,
}) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="pill-container">
      <div
        className={`pill rounded-full p-4 w-20 flex flex-col items-center gap-3 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
        style={{ 
          backgroundColor: 'transparent',
          border: `3px solid ${color}`,
          transform: `rotate(${rotation}deg) translateZ(0)`,
          boxShadow: `0 0 20px ${color}60`,
          height: '350px',
          justifyContent: 'space-around',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundColor: color }}
        ></div>
        {technologies.map((technology, index) => {
          const baseYPosition = index * (350 / technologies.length) + (350 / (2 * technologies.length));
          const yPosition = (baseYPosition + scrollPosition * 0.5) % 350;
          const rotationAngle = (scrollPosition * 0.5 + index * 100) % 360;
          
          return (
            <div 
              key={index} 
              className="logo-circle w-14 h-14 rounded-full bg-black flex items-center justify-center transform transition-all duration-300 overflow-hidden"
              style={{ 
                boxShadow: `0 0 10px ${color}80`,
                position: 'absolute',
                top: `${yPosition}px`,
                left: '50%',
                transform: `translateX(-50%) rotate(${rotationAngle}deg) ${hoveredIcon === index ? 'scale(1.2)' : 'scale(1)'}`,
                transition: 'top 0.5s ease-out, transform 0.5s ease-out'
              }}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img 
                src={technology.icon} 
                alt="technology icon" 
                className='w-10 h-10 object-contain'
                style={{
                  transition: 'transform 0.5s ease-out',
                  transform: hoveredIcon === index ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)'
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionWrapper(Tech, "tech")