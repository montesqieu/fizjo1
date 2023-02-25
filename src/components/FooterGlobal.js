import React from 'react'
import ButtonGlobal from './ButtonGlobal'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { FaPaperPlane } from "react-icons/fa"
import '../styles/global.css'

export default function FooterGlobal() {
  return (
    <footer className='footer_box'>
      <div className='footer_up'>

        <div className='footer_item'>
          <div className='footer_logo'>
            <Link to="/">
              <StaticImage src="../images/logo-50x225.png" alt="Fizjoterapia i Trening Personalny | Warszawa"/>
            </Link>
          </div>
          <div className='footer_newsletter'>
            <span>Dołącz do newsletter'a i otrzymuj wiadomości o nowych materiałach.</span>
            <ButtonGlobal
              slug ="/newsletter"
              style='btn'
              name="Zapisuję się"
              icon={<FaPaperPlane />}
            />
          </div>
        </div>

        <div className='footer_item'>
          <div className='footer_header'>Użyteczne Linki</div>
          <div className='footer_menu'>
            <Link to="/wizyta">Pierwsza wizyta</Link>
            <Link to="/studio">Zobacz Studio</Link>
            <Link to="/cennik">Cennik</Link>
          </div>
        </div>

        <div className='footer_item'>
          <div className='footer_header'>Użyteczne Linki</div>
          <div className='footer_menu'>
              <a href="https://www.instagram.com/FizjoPersonalny/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.youtube.com/c/fizjopersonalny" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://www.facebook.com/FizjoPersonalny/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>

        <div className='footer_item'>
          <div className='footer_header'>Media społecznościowe</div>
          <div className='footer_menu'>
              <a href="https://www.instagram.com/FizjoPersonalny/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.youtube.com/c/fizjopersonalny" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://www.facebook.com/FizjoPersonalny/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>

      </div>

      <hr className='footer_line'/>

      <div className='footer_down'>
        <div className='footer_copyright'>2023 © Prawa autorskie należą do firmy FizjoPersonalny</div>
        <div className='footer_menu_docs'>
          <Link to="/regulamin-studia">Regulamin Studia</Link>
          <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
          <Link to="/dokumenty">Dokumenty</Link>
        </div>

      </div>
    </footer>
  )
}