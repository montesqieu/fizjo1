import React from 'react'
import NavbarGlobal from '../NavbarGlobal'
import ButtonGlobal from '../ButtonGlobal'
import { StaticImage } from "gatsby-plugin-image"
import { FaCalendarAlt, FaSortDown } from "react-icons/fa"
import '../../styles/global.css'
import '../../styles/page_index.css'

export default function HeaderStart() {
  return (
    <div className='header_gradient'>
      <NavbarGlobal />
      <div className='s1_box'>
        <div className='s1_left'>
          <span className='s1_subheader'>Odbuduj codzienną sprawność</span>
          <h1 className='s1_header'>Fizjoterapia i trening personalny zgrane z Twoimi potrzebami</h1>
          <p className='s1_description'>Jestem wyspecjalizowanym fizjoterapeutą i trenerem personalnym, który koncentruje się na tym, aby pomóc Ci odzyskać sprawność i dobre samopoczucie.</p>
          <div className='s1_button_box'>
            <div className='s1_button'>
              <ButtonGlobal
                slug ='/rezerwacja'
                style='btn'
                name='Umów wizytę'
                icon={<FaCalendarAlt />}
              />
            </div>
            <div className='s1_button'>
              <ButtonGlobal
                slug ='#s2'
                style='btn2'
                name='Przewiń dalej'
                icon={<FaSortDown />}
              />
            </div>
          </div>
        </div>
        <div className='s1_right'>
          <StaticImage src="../../images/lukasz.png" alt="Fizjoterapia i Trening Personalny | Warszawa" />
        </div>
      </div>
    </div>
  )
}