import React from 'react'
import ButtonGlobal from './ButtonGlobal'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { FaCaretDown } from "react-icons/fa"
import '../styles/global.css'

export default function NavbarGlobal() {

  const subMenu = [
    {title: "Fizjoterapia Bólu Pleców", slug: "/fizjoterapia-bolu-plecow"},
    {title: "Trening Personalny", slug: "/trening-personalny"},
    {title: "Trening Medyczny", slug: "/trening-medyczny"},
    {title: "Masaż leczniczy", slug: "/masaz-leczniczy"}
  ];

  return (
    <div className='header_box'>
      <div className='logo_box'>
        <Link to="/">
          <StaticImage src="../images/logo-82x350.png" alt="Fizjoterapia i Trening Personalny | Warszawa"/>
        </Link>
      </div>
      <div className='menu_mobile'>
        <input type='checkbox' />
        <span className='mobile_line_1'></span>
        <span className='mobile_line_2'></span>
        <span className='mobile_line_3'></span>
        <div className='mobile_slide_box'>
          <div className='mobile_content'>
            <Link className='mobile_link' to="/o-mnie">O MNIE</Link>
            <div className='mobile_sub'>
              <Link className='mobile_link' to="#">OFERTA <FaCaretDown />
               <div className='mobile_dropdown'>
                {subMenu.map((menu, index) => {
                  return (<Link to={menu.slug} key={index} className='mobile_sub_link'>{menu.title}</Link>)
                })}
               </div>
              </Link>
            </div>
            <Link className='mobile_link' to="/blog">BLOG</Link>
            <a className='mobile_link' href="https://fizjopersonalny.sklep.pl/" target="_blank" rel="noreferrer">SKLEP</a>
            <Link className='mobile_link' to="/kontakt">KONTAKT</Link>
            <div className='mobile_button'>
              <ButtonGlobal slug ="/rezerwacja" name="Umów wizytę" />
            </div>
          </div>
        </div>
      </div>
      <div className='menu_box'>
        <Link className='menu_link' to="/o-mnie">O MNIE</Link>
        <div className='menu_sub'>
          <Link className='menu_link' to="#">OFERTA <FaCaretDown />
            <div className='menu_dropdown'>
              {subMenu.map((menu, index) => {
                return (<Link to={menu.slug} key={index} className='menu_sub_link'>{menu.title}</Link>)
              })}
            </div>
          </Link>
        </div>
        <Link className='menu_link' to="/blog">BLOG</Link>
        <a className='menu_link' href="https://fizjopersonalny.sklep.pl/" target="_blank" rel="noreferrer">SKLEP</a>
        <Link className='menu_link' to="/kontakt">KONTAKT</Link>
      </div>
    </div>
  )
}