import React from 'react'
import ButtonGlobal from './ButtonGlobal'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import '../styles/global.css'

export default function FooterGlobal() {
  return (
    <footer className='footer_box'>
      <div className='footer_up'>
        <div className='footer_box_item'>
          <div className='footer_logo'>
            <Link to="/">
              <StaticImage src="../images/logo-50x225.png" alt="Fizjoterapia i Trening Personalny | Warszawa"/>
            </Link>
          </div>
          <div className='fotter_newsletter'>Dołącz do newsletter'a i otrzymuj wiadomości o nowych materiałach.</div>
          <ButtonGlobal slug ="/newsletter" name="Zapisuję się" />
        </div>
        <div className='footer_box_item'>
          <div className='footer_header'>Użyteczne Linki</div>
          <ul className='footer_list'>
            <li className='footer_item'>
              <Link className="footer_link" to="/wizyta">Pierwsza wizyta</Link>
            </li>
            <li className='footer_item'>
              <Link className="footer_link" to="/cennik">Cennik</Link>
            </li>
            <li className='footer_item'>
              <a className="footer_link" href="https://www.facebook.com/FizjoPersonalny/">Facebook</a>
            </li>
          </ul>
        </div>
        <div className='footer_box_item'>
          <div className='footer_header'>Usługi</div>
            <ul className='footer_list'>
              <li className='footer_item'>
                <a className="footer_link" href="https://www.instagram.com/FizjoPersonalny/">Instagram</a>
              </li>
              <li className='footer_item'>
                <a className="footer_link" href="https://www.youtube.com/c/fizjopersonalny">YouTube</a>
              </li>
              <li className='footer_item'>
                <a className="footer_link" href="https://www.facebook.com/FizjoPersonalny/">Facebook</a>
              </li>
            </ul>
        </div>
        <div className='footer_box_item'>
          <div className='footer_header'>Social Media</div>
            <ul className='footer_list'>
              <li className='footer_item'>
                <a className="footer_link" href="https://www.instagram.com/FizjoPersonalny/">Instagram</a>
              </li>
              <li className='footer_item'>
                <a className="footer_link" href="https://www.youtube.com/c/fizjopersonalny">YouTube</a>
              </li>
              <li className='footer_item'>
                <a className="footer_link" href="https://www.facebook.com/FizjoPersonalny/">Facebook</a>
              </li>
            </ul>
        </div>
      </div>
      <hr className='footer_line'/>
      <div className='footer_down'>
        <div className='footer_copyright'>2023 © Prawa autorskie należą do firmy FizjoPersonalny</div>
        <div>
          <ul className='footer_list_docs'>
            <li className='footer_item_docs'>
              <Link className="footer_link_docs" to="/regulamin-studia">Regulamin Studia</Link>
            </li>
            <li className='footer_item_docs'>
              <Link className="footer_link_docs" to="/polityka-prywatnosci">Polityka Prywatności</Link>
            </li>
            <li className='footer_item_docs'>
              <Link className="footer_link_docs" to="/dokumenty">Dokumenty</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}