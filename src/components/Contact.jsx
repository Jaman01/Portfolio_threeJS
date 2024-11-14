import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utiles/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs.send(
      'service_rofffff',
      'template_frfrf',
      {
        from_name: form.name,
        to_name: 'Adrian',
        from_email: form.email,
        to_email: 'contact@jsmastery.pro',
        message: from.message,
      },
      // 'frevvcsfvffv'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something went wrong.')
    })

  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >

        <p className='{styles.sectionSubText}'>Vous recrutez ?</p>
        <h3 className={styles.sectionHeadText}>Me Contacter</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mon courriel</span>
            <span className='bg-tertiary py-4 px-6 text-white font-bold rounded-lg'>
              jeanjacques.aman@outlook.fr
              </span>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mon LinkedIn</span>
            <span className='bg-tertiary py-4 px-6 text-white font-bold rounded-lg'>
              <a href="https://www.linkedin.com/in/jeanjacquesaman/" target="_blank" rel="noopener noreferrer" className='text-blue-400'>
              linkedin.com/in/jeanjacquesaman/
              </a>
            </span>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Mon GitHub</span>
            <span className='bg-tertiary py-4 px-6 text-white font-bold rounded-lg'>
              <a href="https://github.com/Jaman01" target="_blank" rel="noopener noreferrer" className='text-blue-400'>
              github.com/Jaman01
              </a>
            </span>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>TryHackMe</span>
            <span className='bg-tertiary py-4 px-6 text-white font-bold rounded-lg'>
              <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className='text-blue-400'>
              Mon lien Try Hack Me
              </a>
            </span>
          </label>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "")