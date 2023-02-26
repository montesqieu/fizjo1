import React from 'react'
import { Link } from 'gatsby'
import LayoutGlobal from '../components/LayoutGlobal'
import ToggleGlobal from '../components/ToggleGlobal'

export default function Kwalifikacje() {
  return (
    <LayoutGlobal>
      <div className='page_box'>
        <h1 className='page_h1'>Kwalifikacje</h1>

        <ToggleGlobal title="§1 Postanowienia ogólne">
          <ul className='page_ul'>
            <li className='page_li'>przepisów ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej;</li>
            <li className='page_li'>wpisu numer 000000212214 do Rejestru Podmiotów Wykonujących Działalność Leczniczą prowadzonego przez Krajową Radę Fizjoterapeutów;</li>
            <li className='page_li'>RODO i Ustawy o prawach pacjenta;</li>
            <li className='page_li'>niniejszego Regulaminu.</li>
          </ul>
        </ToggleGlobal>

      </div>
    </LayoutGlobal>
  )
}