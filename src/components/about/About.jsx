import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conozcan</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>1 año trabajando</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>15</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projectos</h5>
              <small>20+ Completados</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos voluptatem eius dolorem maiores nihil ducimus at rem ullam reprehenderit quidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
          </p>

          <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default About