import React from 'react'
import HeaderStart from './HeaderStart'
import FooterGlobal from '../FooterGlobal'
import '../../styles/global.css'

export default function LayoutStart({ children }) {
  return (
    <div className='layout'>
        <HeaderStart />
        <div className='content'>
            { children }
        </div>
        <FooterGlobal />
    </div>
  )
}