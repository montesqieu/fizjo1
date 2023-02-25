import React from 'react'
import { Link } from 'gatsby'
import LayoutGlobal from '../components/LayoutGlobal'
import '../styles/global.css'

export default function TreningPersonalny() {
  return (
    <LayoutGlobal>
      <div className='page_box'>
        <h1 className='page_h1'>Trening Personalny</h1>
        <Link className='page_link' to='../wizyta'>http://www.fizjopersonalny.pl/wizyta</Link>
      </div>
    </LayoutGlobal>
  )
}