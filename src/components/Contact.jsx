import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import emailjs from '@emailjs/browser'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import github from '../assets/github.png'
import linkedin from '../assets/linkedIn.png'
import twitter from '../assets/twitter.jpg'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields before submitting.')
      return
    }

    setLoading(true)
    emailjs.send(
      'service_68olyxe',
      'template_b46ot7j',
      {
        from_name: form.name,
        to_name: 'Raymond Madara',
        from_email: form.email,
        to_email: 'calebmadara58@gmail.com',
        message: form.message,
        reply_to: form.email,
      },
      'oV6PMkgvQK7ELNB9b'
    )
    .then(() => {
      setLoading(false)
      setShowPopup(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setShowPopup(false), 5000)
    }, (error) => {
      setLoading(false)
      console.error(error)
      alert('Something went wrong. Please try again later.')
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] p-8 rounded-2xl' style={{ backgroundColor: styles.bgColor }}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='font-medium mb-4' style={{ color: styles.whiteColor }}>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
              style={{ backgroundColor: styles.darkBgColor, color: styles.whiteColor }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4' style={{ color: styles.whiteColor }}>Your email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
              style={{ backgroundColor: styles.darkBgColor, color: styles.whiteColor }}
            />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium mb-4' style={{ color: styles.whiteColor }}>Your Message</span>
            <textarea 
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium'
              style={{ backgroundColor: styles.darkBgColor, color: styles.whiteColor }}
            />
          </label>
          <div className='flex items-center'>
            <button
              type='submit'
              className={`py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl mr-4 relative overflow-hidden`}
              style={{ 
                backgroundColor: loading ? styles.subLightColor : styles.darkBgColor, 
                color: loading ? styles.darkBgColor : styles.whiteColor,
                transition: 'all 0.3s ease'
              }}
            >
              <style>{`
                button:hover span {
                  color: ${styles.bgColor} !important;
                }
              `}</style>
              <span className={`relative z-10 transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                {loading ? 'Sending...' : 'Send'}
              </span>
              <span className={`absolute inset-0 flex items-center justify-start overflow-hidden ${loading ? 'w-full' : 'w-0'}`} style={{transition: 'width 0.3s ease'}}>
                <span className={`h-full w-full flex items-center justify-between px-3 transition-all duration-500 ease-out`}>
                  <span>Sending...</span>
                  <div className="flex items-center justify-center h-full w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={styles.darkBgColor}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </span>
              </span>
            </button>
            <style>{`
              @keyframes moveRight {
                0% { width: 0; }
                100% { width: 100%; }
              }
              @keyframes fadeInOut {
                0%, 100% { opacity: 0; }
                10%, 90% { opacity: 1; }
              }
            `}</style>
            <a href="https://www.linkedin.com/in/raymond-caleb-6588a9266" target="_blank" rel="noopener noreferrer" className='mx-2'>
              <img src={linkedin} alt="LinkedIn" className='w-8 h-8 rounded-full' />
            </a>
            <a href="https://github.com/Raymond9734" target="_blank" rel="noopener noreferrer" className='mx-2'>
              <img src={github} alt="GitHub" className='w-8 h-8 rounded-full' />
            </a>
            <a href="https://x.com/RayMadara2" target="_blank" rel="noopener noreferrer" className='mx-2'>
              <img src={twitter} alt="Twitter" className='w-8 h-8 rounded-full' />
            </a>
          </div>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className={`bg-[${styles.darkBgColor}] p-8 rounded-lg shadow-lg flex flex-col items-center`} style={{animation: 'fadeInOut 5s ease-in-out'}}>
            <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="text-lg font-semibold text-white">Thank you for your message!</p>
            <p className="text-white">I will get back to you shortly.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default SectionWrapper(Contact, "contact")