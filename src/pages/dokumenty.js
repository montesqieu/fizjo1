import React from 'react'
import LayoutGlobal from '../components/LayoutGlobal'
import ToggleGlobal from '../components/ToggleGlobal'
import { FaFileAlt, FaClipboardCheck } from "react-icons/fa"
import { GrAttachment } from "react-icons/gr"

export default function Dokumenty() {
  return (
    <LayoutGlobal>
      <div className='page_box'>
        <h1 className='page_h1'>Dokumenty</h1>

        <ToggleGlobal title="Regulamin Studia">
          <ul className='docs_ul'>
            <li><FaFileAlt /><a href="regulamin-studia.pdf" target="_blank" rel="noreferrer">Regulamin organizacyjny Studia Medyczno-Treningowego</a></li>
            <li><GrAttachment /><a href="zgoda-na-realizacje-uslugi.pdf" target="_blank" rel="noreferrer">Zgoda na realizację usługi (załącznik 1)</a></li>
            <li><GrAttachment /><a href="zgoda-na-przetwarzanie-danych.pdf" target="_blank" rel="noreferrer">Zgoda na przetwarzanie danych osobowych (załącznik 2)</a></li>
            <li><GrAttachment /><a href="zgoda-przedstawiciela-ustawowego.pdf" target="_blank" rel="noreferrer">Zgoda przedstawiciela ustawowego na realizację usługi (załącznik 3)</a></li>
          </ul>
        </ToggleGlobal>

        <ToggleGlobal title="Regulamin Sklepu">
          <ul className='docs_ul'>
            <li><FaFileAlt /><a href="regulamin-sklepu.pdf" target="_blank" rel="noreferrer">Regulamin Sklepu</a></li>
            <li><GrAttachment /><a href="formularz-zgloszenia-reklamacyjnego.pdf" target="_blank" rel="noreferrer">Formularz zgłoszenia reklamacyjnego (załącznik 1)</a></li>
            <li><GrAttachment /><a href="formularz-odstapienia-od-umowy.pdf" target="_blank" rel="noreferrer">Formularz odstapienia od umowy (załącznik 2)</a></li>
          </ul>
        </ToggleGlobal>

        <ToggleGlobal title="Wyzwanie SUPERFORMA">
          <ul className='docs_ul'>
          <li><FaFileAlt /><a href="regulamin-superforma-edycja-5.pdf" target="_blank" rel="noreferrer">Regulamin wyzwania SUPERFORMA (edycja 5)</a></li>
          <li><FaFileAlt /><a href="regulamin-superforma-edycja-4.pdf" target="_blank" rel="noreferrer">Regulamin wyzwania SUPERFORMA (edycja 4)</a></li>
          <li><FaFileAlt /><a href="regulamin-superforma-edycja-3.pdf" target="_blank" rel="noreferrer">Regulamin wyzwania SUPERFORMA (edycja 3)</a></li>
          <li><FaFileAlt /><a href="regulamin-superforma-edycja-2.pdf" target="_blank" rel="noreferrer">Regulamin wyzwania SUPERFORMA (edycja 2)</a></li>
          <li><FaFileAlt /><a href="regulamin-superforma-edycja-1.pdf" target="_blank" rel="noreferrer">Regulamin wyzwania SUPERFORMA (edycja 1)</a></li>
          <li><FaClipboardCheck /><a href="wyniki-superforma-edycja-4.pdf" target="_blank" rel="noreferrer">Wyniki wyzwania SUPERFORMA (edycja 4)</a></li>
          <li><FaClipboardCheck /><a href="wyniki-superforma-edycja-3.pdf" target="_blank" rel="noreferrer">Wyniki wyzwania SUPERFORMA (edycja 3)</a></li>
          <li><FaClipboardCheck /><a href="wyniki-superforma-edycja-2.pdf" target="_blank" rel="noreferrer">Wyniki wyzwania SUPERFORMA (edycja 2)</a></li>
          <li><FaClipboardCheck /><a href="wyniki-superforma-edycja-1.pdf" target="_blank" rel="noreferrer">Wyniki wyzwania SUPERFORMA (edycja 1)</a></li>
        </ul>
        </ToggleGlobal>

      </div>
    </LayoutGlobal>
  )
}