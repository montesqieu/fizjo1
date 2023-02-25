import React from 'react'
import LayoutGlobal from '../components/LayoutGlobal'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import '../styles/page_about.css'

export default function OMnie() {
  return (
    <LayoutGlobal>

      <div className='about_intro'>
        <div className='about_intro_left'>
          <span className='about_subheader'>Nazywam się</span>
          <h1 className='about_header'>Łukasz Kaleńczuk</h1>
          <p className='about_description'>Lubię o sobie mówić, że jestem przedsiębiorcą, konsultantem i edukatorem. Prowadzę szkolenia, warsztaty i projekty doradcze, podczas których pomagam firmom poukładać marketing i sprzedaż. Moje kilkunastoletnie doświadczenie pozwoliło mi zdobyć kompetencje w wielu obszarach – od poziomu tworzenia strategicznego (planowanie działań, komunikacji, rozumienie grupy docelowej) po umiejętności typowo wykonawcze – uczę również reklamy na Facebooku/Google, komunikacji w social media czy copywritingu. Za mną tysiące godzin spędzonych na tego typu projektach.</p>
          <p className='about_description'>Sprawdź, co ja i mój zespół możemy zrobić właśnie dla Ciebie.</p>
        </div>
        <div className='about_intro_right'>
          <StaticImage src="../images/o-mnie.png" alt="Łukasz Kaleńczuk" />
        </div>
      </div>

      <div className='about_menu'>
        <Link to="#about_2">kwalifikacje</Link>
        <Link to="#about_3">szkolenia i warsztaty</Link>
        <Link to="#about_4">artykuły gościnne i media</Link>
        <Link to="#about_5">w czasie wolnym</Link>
      </div>

      <section id="about_2">
      <div className='about_intro'>
        <div className='about_intro_left'>
          <span className='about_subheader'>Nazywam się</span>
          <h1 className='about_header'>Łukasz Kaleńczuk</h1>
          <p className='about_description'>Lubię o sobie mówić, że jestem przedsiębiorcą, konsultantem i edukatorem. Prowadzę szkolenia, warsztaty i projekty doradcze, podczas których pomagam firmom poukładać marketing i sprzedaż. Moje kilkunastoletnie doświadczenie pozwoliło mi zdobyć kompetencje w wielu obszarach – od poziomu tworzenia strategicznego (planowanie działań, komunikacji, rozumienie grupy docelowej) po umiejętności typowo wykonawcze – uczę również reklamy na Facebooku/Google, komunikacji w social media czy copywritingu. Za mną tysiące godzin spędzonych na tego typu projektach.</p>
          <p className='about_description'>Sprawdź, co ja i mój zespół możemy zrobić właśnie dla Ciebie.</p>
        </div>
        <div className='about_intro_right'>
          <StaticImage src="../images/o-mnie.png" alt="Łukasz Kaleńczuk" />
        </div>
      </div>
      </section>

      <section id="about_3">
      <div className='about_intro'>
        <div className='about_intro_left'>
          <span className='about_subheader'>Nazywam się</span>
          <h1 className='about_header'>Łukasz Kaleńczuk</h1>
          <p className='about_description'>Lubię o sobie mówić, że jestem przedsiębiorcą, konsultantem i edukatorem. Prowadzę szkolenia, warsztaty i projekty doradcze, podczas których pomagam firmom poukładać marketing i sprzedaż. Moje kilkunastoletnie doświadczenie pozwoliło mi zdobyć kompetencje w wielu obszarach – od poziomu tworzenia strategicznego (planowanie działań, komunikacji, rozumienie grupy docelowej) po umiejętności typowo wykonawcze – uczę również reklamy na Facebooku/Google, komunikacji w social media czy copywritingu. Za mną tysiące godzin spędzonych na tego typu projektach.</p>
          <p className='about_description'>Sprawdź, co ja i mój zespół możemy zrobić właśnie dla Ciebie.</p>
        </div>
        <div className='about_intro_right'>
          <StaticImage src="../images/o-mnie.png" alt="Łukasz Kaleńczuk" />
        </div>
      </div>
      </section>

      <section id="about_4">
      <div className='about_intro'>
        <div className='about_intro_left'>
          <span className='about_subheader'>Nazywam się</span>
          <h1 className='about_header'>Łukasz Kaleńczuk</h1>
          <p className='about_description'>Lubię o sobie mówić, że jestem przedsiębiorcą, konsultantem i edukatorem. Prowadzę szkolenia, warsztaty i projekty doradcze, podczas których pomagam firmom poukładać marketing i sprzedaż. Moje kilkunastoletnie doświadczenie pozwoliło mi zdobyć kompetencje w wielu obszarach – od poziomu tworzenia strategicznego (planowanie działań, komunikacji, rozumienie grupy docelowej) po umiejętności typowo wykonawcze – uczę również reklamy na Facebooku/Google, komunikacji w social media czy copywritingu. Za mną tysiące godzin spędzonych na tego typu projektach.</p>
          <p className='about_description'>Sprawdź, co ja i mój zespół możemy zrobić właśnie dla Ciebie.</p>
        </div>
        <div className='about_intro_right'>
          <StaticImage src="../images/o-mnie.png" alt="Łukasz Kaleńczuk" />
        </div>
      </div>
      </section>

      <section id="about_5">
      <div className='about_intro'>
        <div className='about_intro_left'>
          <span className='about_subheader'>Nazywam się</span>
          <h1 className='about_header'>Łukasz Kaleńczuk</h1>
          <p className='about_description'>Lubię o sobie mówić, że jestem przedsiębiorcą, konsultantem i edukatorem. Prowadzę szkolenia, warsztaty i projekty doradcze, podczas których pomagam firmom poukładać marketing i sprzedaż. Moje kilkunastoletnie doświadczenie pozwoliło mi zdobyć kompetencje w wielu obszarach – od poziomu tworzenia strategicznego (planowanie działań, komunikacji, rozumienie grupy docelowej) po umiejętności typowo wykonawcze – uczę również reklamy na Facebooku/Google, komunikacji w social media czy copywritingu. Za mną tysiące godzin spędzonych na tego typu projektach.</p>
          <p className='about_description'>Sprawdź, co ja i mój zespół możemy zrobić właśnie dla Ciebie.</p>
        </div>
        <div className='about_intro_right'>
          <StaticImage src="../images/o-mnie.png" alt="Łukasz Kaleńczuk" />
        </div>
      </div>
      </section>

    </LayoutGlobal>
  )
}