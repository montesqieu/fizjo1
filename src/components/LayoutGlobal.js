import React from 'react'
import HeaderGlobal from './HeaderGlobal'
import FooterGlobal from './FooterGlobal'
import '../styles/global.css'

export default function LayoutGlobal({ children }) {
  return (
    <div className='layout'>
      <HeaderGlobal />
        <div className='content'>
            { children }
        </div>
      <FooterGlobal />
    </div>
  )
}