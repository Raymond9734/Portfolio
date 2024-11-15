import { Link } from 'react-router-dom'
import { ArrowRight } from "lucide-react";
import { navLinks } from '../constants'
import React, { useState, useEffect, useRef } from 'react';
import { styles } from '../style';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const desktopMenuRef = useRef(null);
  const prevScrollPosRef = useRef(window.pageYOffset);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Mobile menu positioning
      if (mobileMenuRef.current) {
        const newTop = Math.max(68 - currentScrollPos, 0);
        mobileMenuRef.current.style.top = `${newTop}px`;
      }

      // Desktop menu behavior
      if (desktopMenuRef.current) {
        if (prevScrollPosRef.current > currentScrollPos) {
          desktopMenuRef.current.style.transform = 'translateY(0)';
          desktopMenuRef.current.style.opacity = '1';
        } else {
          desktopMenuRef.current.style.transform = 'translateY(-100%)';
          desktopMenuRef.current.style.opacity = '0';
        }
        
        if (currentScrollPos > 100) {
          desktopMenuRef.current.style.top = '20px';
          desktopMenuRef.current.style.right = '12px';
        } else {
          desktopMenuRef.current.style.top = '0';
          desktopMenuRef.current.style.right = '0';
        }
        
        prevScrollPosRef.current = currentScrollPos;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="px-4 sm:px-6 py-4" style={{ backgroundColor: styles.darkBgColor }}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 transform -translate-y-full opacity-0 animate-slideDown"
            style={{
              animation: 'slideDown 0.5s ease-out forwards',
              animationDelay: '0.2s'
            }}
          >
            <img src={logo} alt="Treize grammes" className="h-20 sm:h-15 w-auto" />
          </Link>
          
          <div className="flex items-center">
            <button 
              className="ml-4 sm:hidden transform -translate-y-full opacity-0 animate-slideDown" 
              style={{ 
                color: styles.whiteColor,
                animation: 'slideDown 0.5s ease-out forwards',
                animationDelay: '0.3s'
              }} 
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {isMenuOpen && (
              <div 
                ref={mobileMenuRef}
                className="fixed left-0 right-0 top-20 backdrop-blur-md p-4 sm:hidden z-[9999] shadow-lg rounded-b-lg overflow-hidden"
                style={{
                  backgroundColor: `${styles.darkBgColor}80`,
                  maxHeight: isMenuOpen ? '1000px' : '0',
                  opacity: isMenuOpen ? '1' : '0',
                  transition: 'max-height 300ms ease-in-out, opacity 300ms ease-in-out, top 300ms ease-in-out',
                }}
              >
                <div 
                  className="space-y-2"
                  style={{
                    transform: 'translateY(-20px)',
                    opacity: '0',
                    transition: 'transform 500ms ease-out, opacity 300ms ease-out',
                  }}
                  ref={(el) => {
                    if (el) {
                      setTimeout(() => {
                        el.style.transform = 'translateY(0)';
                        el.style.opacity = '1';
                      }, 50);
                    }
                  }}
                >
                  {navLinks.map((link) => (
                    <a 
                      key={link.id} 
                      href={`#${link.id}`} 
                      className="block py-3 px-4 transition-colors rounded-md"
                      style={{
                        color: `${styles.whiteColor}80`,
                        backgroundColor: styles.bgColor,
                        ':hover': {
                          color: styles.whiteColor,
                          backgroundColor: styles.darkBgColor,
                        }
                      }}
                      onClick={toggleMenu}
                    >
                      {link.title.toUpperCase()}
                    </a>
                  ))}
                  <a 
                    href="#contact"
                    className="block py-3 px-4 transition-colors rounded-md"
                    style={{
                      color: `${styles.whiteColor}80`,
                      backgroundColor: styles.bgColor,
                      ':hover': {
                        color: styles.whiteColor,
                        backgroundColor: styles.darkBgColor,
                      }
                    }}
                    onClick={toggleMenu}
                  >
                    CONTACT
                  </a>
                </div>
              </div>
            )}
            
            <div 
              ref={desktopMenuRef}
              className="hidden sm:flex items-center gap-4 lg:gap-8 border border-gray-500 rounded-lg p-2 fixed mt-4 mr-4 backdrop-blur-md z-[9999] transition-all duration-500 animate-slideDown" 
              style={{ 
                backgroundColor: `${styles.darkBgColor}80`,
                transform: 'translateY(0)',
                opacity: '1',
                top: '0',
                right: '0',
                transition: 'top 0.5s ease, right 0.5s ease, transform 0.5s ease, opacity 0.5s ease'
              }}
            >
              {navLinks.map((link, index) => (
                <React.Fragment key={link.id}>
                  {index > 0 && <div className="w-px h-6 bg-gray-500"></div>}
                  <div className="relative group">
                    <a 
                      href={`#${link.id}`} 
                      className={`flex items-center justify-center gap-1 w-[90px] lg:w-[105px] rounded-lg p-2 text-sm lg:text-base font-['Poppins'] transition-colors hover:text-[${styles.hoverDarkWhiteTxtColor}]`}
                      style={{
                        color: `${styles.whiteColor}80`,
                        backgroundColor: styles.bgColor,
                      }}
                    >
                      {link.title.toUpperCase()}
                    </a>
                  </div>
                </React.Fragment>
              ))}
              
              <div className="w-px h-6 bg-gray-500"></div>
              
              <div className="relative group w-[135px] lg:w-[135px]">
                <a 
                  href="#contact"
                  className="flex items-center justify-between px-4 lg:px-5 py-2 rounded-full text-sm lg:text-base font-['Poppins'] relative overflow-hidden group"
                  style={{
                    backgroundColor: styles.bgColor,
                    color: `${styles.whiteColor}80`,
                    transition: 'all 0.5s ease',
                    width: '135px',
                    height: '38px',
                  }}
                >
                  <span 
                    className={`relative ml-7 z-10 transition-all 
                      duration-500 group-hover:translate-x-[-23px]`}  
                    style={{
                      color: `${styles.whiteColor}80`,
                      transition: 'all 0.5s ease',
                    }}
                  >
                    <style>{`
                      .group:hover span {
                        color: ${styles.darkBgColor} !important;
                      }
                    `}</style>
                    CONTACT
                  </span>
                  <div 
                    className={`absolute left-1 top-1/2 -translate-y-1/2 w-[34px] h-[34px] 
                    rounded-full flex items-center justify-center transition-all duration-500
                    group-hover:left-[calc(100%-38px)] z-20`}
                    style={{ 
                      backgroundColor: styles.subLightColor,
                      transition: 'all 1s ease',
                    }}
                  >
                    <ArrowRight 
                      className="h-4 w-4 transition-colors duration-500"
                      style={{ 
                        color: styles.darkBgColor,
                        transition: 'color 1s ease',
                      }}
                    />
                  </div>
                  <style>{`
                    .group:hover .absolute:not(.bg-fill) {
                      background-color: ${styles.darkBgColor} !important;
                    }
                    .group:hover .absolute:not(.bg-fill) svg {
                      color: ${styles.subLightColor} !important;
                    }
                    .group:hover .bg-fill {
                      width: 100%;
                    }
                  `}</style>
                
                  <div 
                    className="absolute inset-0 w-0 h-full transition-all duration-500 bg-fill group-hover:w-full"
                    style={{ 
                      backgroundColor: styles.subLightColor,
                      transition: 'all 0.8s ease',
                      filter: 'blur(0px)',
                    }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar
