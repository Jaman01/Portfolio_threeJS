import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utiles/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options ={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>

    </motion.div>

  </Tilt>
  )
}
const About = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
      >Présentation</p>
      <h2 className={styles.sectionHeadText}>À propos</h2>
    </motion.div>



    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      Étudiant en Master Cybersécurité & Cloud à l'IPSSI, je suis passionné par la sécurité informatique.
      <strong> Curieux, autonome</strong> et <strong>force de proposition</strong>, je dispose de bonnes <strong>capacités analytiques, rédactionnelles</strong> et de <strong>communication</strong>.
      Abordant les défis avec une approche <strong>proactive</strong>, je me distingue par ma <strong>discrétion</strong>, ma pugnacité et mon <strong>esprit d'équipe</strong>.
      <br/><br/>Mon objectif est de devenir testeur d'intrusion, tout en restant ouvert à toute opportunité dans le domaine de la sécurité informatique.
      Je suis à la recherche d'un environnement de travail dynamique et stimulant, où je pourrais continuer à apprendre et à évoluer aux côtés de professionnels expérimentés et d'experts du secteur.<br/>
      Disposant du C1 en anglais, je suis pleinement préparé à collaborer avec des <strong>équipes internationales</strong>.
      <br/><br/>Disponible dès <strong>octobre 2024 pour une alternance</strong>, je suis prêt à apporter mes compétences et ma capacité d'adaptation à une équipe ambitieuse.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index= {index} {...service}/>
      ))}

    </div>
    
    </>
  )
}

export default SectionWrapper(About, "about");