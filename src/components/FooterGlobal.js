import React from 'react'
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
          <div className='footer_news'>
            <p>Dołącz do newsletter'a i otrzymuj wiadomości o nowych materiałach.</p>
            <a href="https://fizjopersonalny.sklep.pl/newsletter/" target="_blank" rel="noreferrer" className='btn'>
              Zapisuję się <span><FaPaperPlane /></span>
            </a>
          </div>
        </div>

        <div className='footer_item'>
          <div className='footer_header'>zacznij tutaj</div>
          <div className='footer_menu'>
            <Link to="/cennik">Aktualny cennik</Link>
            <Link to="/studio">Zobacz Studio</Link>
            <Link to="/wizyta">Pierwsza wizyta</Link>
          </div>
        </div>

        <div className='footer_item'>
          <div className='footer_header'>Popularne usługi</div>
          <div className='footer_menu'>
            <Link to="/fizjoterapia-bolu-plecow">Fizjoterapia bólu pleców</Link>
            <Link to="/trening-personalny">Trening personalny</Link>
            <Link to="/masaz-leczniczy">Masaż leczniczy</Link>
          </div>
        </div>

        <div className='footer_item'>
          <div className='footer_header'>Social media</div>
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
          <Link to="/dokumenty">Mapa</Link>
        </div>

      </div>
    </footer>
  )
}