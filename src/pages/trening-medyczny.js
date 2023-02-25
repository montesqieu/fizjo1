import React from 'react'
import { Link } from 'gatsby'
import LayoutGlobal from '../components/LayoutGlobal'

export default function TreningMedyczny() {
  return (
    <LayoutGlobal>
      <div className='page_box'>
        <h1 className='page_h1'>Trening Medyczny</h1>
        <Link className='page_link' to='../wizyta'>http://www.fizjopersonalny.pl/wizyta</Link>
      </div>
    </LayoutGlobal>
  )
}