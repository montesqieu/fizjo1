import React from 'react'
import LayoutStart from '../components/start/LayoutStart'
import ButtonGlobal from '../components/ButtonGlobal'
import { graphql, Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { GiBackPain, GiShrimp, GiStopSign } from "react-icons/gi"
import { FaUserInjured, FaFlagCheckered, FaRunning, FaStar, FaCalendarAlt, FaSortDown, FaUserCheck } from "react-icons/fa"

// Randomowe sortowanie referencji algorytmem Fisher-Yates'a
function shuffle(array) {
  const length = array == null ? 0 : array.length;

  if (!length) {
    return [];
  }

  let index = -1;

  const lastIndex = length - 1;
  const result = [...array];

  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }

  return result;
}

export default function Home({ data }) {

  const feedback = shuffle(data.feedback.nodes).slice(0, 1);
  
  return (
    <LayoutStart>

      {/* sekcja 2 - kim jest klient? */}
      <div className='index_box' id="s2">
        <h2 className='index_header'>Fizjoterapia i trening dla zasiedzianych</h2>
        <div className='index_subheader'>Czy jesteś we właściwym miejscu?</div>
        <p className='index_paragraph'>Fizjoterapia i trening to kompletny zestaw terapeutyczno-ruchowy, którego potrzebujesz. Skąd to wiem? Zbudowałem to miejsce dla osób takich jak Ty. Mogę się mylić, dlatego sprawdźmy czy faktycznie jesteś we właściwym miejscu. Jeśli chociaż jedno z poniższych stwierdzeń dotyczy Ciebie to zostajesz tu na dłużej i czytasz dalej, zgoda?</p>
        <div className='s2_grid_box'>
          <div className='s2_grid_item'>
            <span className='s2_grid_icon'><GiBackPain size="2em"/></span>
            <span className='s2_grid_signature'>cierpisz z powodu bólu pleców</span>
          </div>
          <div className='s2_grid_item'>
            <span className='s2_grid_icon'><FaUserInjured size="2em"/></span>
            <span className='s2_grid_signature'>nękają Cię kontuzje i/lub urazy</span>
          </div>
          <div className='s2_grid_item'>
            <span className='s2_grid_icon'><FaFlagCheckered size="2em"/></span>
            <span className='s2_grid_signature'>posiadasz ulotną motywację do ćwiczeń</span>
          </div>
          <div className='s2_grid_item'>
            <span className='s2_grid_icon'><FaRunning size="2em"/></span>
            <span className='s2_grid_signature'>Twoja technika ćwiczeń wymaga poprawy</span>
          </div>
          <div className='s2_grid_item'>
            <span className='s2_grid_icon'><GiShrimp size="2em"/></span>
            <span className='s2_grid_signature'>irytuje Cię Twoja zgarbiona sylwetka</span>
          </div>
          <div className='s2_grid_item'>
            <span className='s2_grid_icon'><GiStopSign size="2em"/></span>
            <span className='s2_grid_signature'>masz opór przed wykonywaniem ćwiczeń</span>
          </div>
        </div>
        <p className='index_paragraph'>Wielu za nas nie potrafi samodzielnie poradzić sobie z bólem, niewiedzą czy motywacją. To normalne. Jesteśmy ludźmi, mamy swoje wzloty i upadki. Czasem potrzebujemy kogoś, kto poprowadzi nas i wesprze na drodze ku byciu zdrowszym i szczęśliwszym.</p>
        <div className='index_button_box'>
          <div className='index_button'>
            <ButtonGlobal
              slug='/rezerwacja'
              name='Umów wizytę'
              icon={<FaCalendarAlt />}
            />
          </div>
          <div className='index_button'>
            <ButtonGlobal
              slug='/#s3'
              name='Przewiń dalej'
              bc='var(--color-6)'
              fc='var(--color-7)'
              hbc='var(--color-3)'
              icon={<FaSortDown />}
            />
          </div>
        </div>
      </div>

      {/* sekcja 3 - czego potrzebuje klient? */}
      <div className='index_box s3_box' id="s3">
        <h2 className='index_header'>Fizjoterapia i trening - zestaw kompletny</h2>
        <div className='index_subheader'>Odzyskaj kontrolę nad sprawnym ciałem</div>
        <div className='offer_box'>
          <div className='offer_item'>
            <StaticImage className='offer_image' src="../images/oferta/fizjoterapia-bol-plecow.jpg" alt="Fizjoterapia i Trening Personalny | Warszawa" />
            <div className='offer_content'>
              <h3 className='offer_title'>Fizjoterapia bólu pleców</h3>
              <p className='offer_description'>To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem. <Link to='fizjoterapia-bolu-plecow' className='offer_link'>czytaj dalej</Link>
              </p>
            </div>
          </div>
          <div className='offer_item'>
            <StaticImage className='offer_image' src="../images/oferta/trening-medyczny.jpg" alt="Trening medyczny z fizjoterapeutą" />
            <div className='offer_content'>
              <h3 className='offer_title'>Trening medyczny</h3>
              <p className='offer_description'>To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem. <Link to='trening-medyczny' className='offer_link'>czytaj dalej</Link>
              </p>
            </div>
          </div>
          <div className='offer_item'>
            <StaticImage className='offer_image' src="../images/oferta/trening-personalny.jpg" alt="Trening personalny z fizjoterapeutą" />
            <div className='offer_content'>
              <h3 className='offer_title'>Trening personalny</h3>
              <p className='offer_description'>To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem. <Link to='trening-personalny' className='offer_link'>czytaj dalej</Link>
              </p>
            </div>
          </div>
        </div>
        <div className='index_button_box'>
          <div className='index_button'>
            <ButtonGlobal
              slug='/rezerwacja'
              name='Umów wizytę'
              icon={<FaCalendarAlt />}
            />
          </div>
          <div className='index_button'>
            <ButtonGlobal
              slug='/#s4'
              name='Przewiń dalej'
              bc='var(--color-8)'
              fc='var(--color-7)'
              hbc='var(--color-6)'
              icon={<FaSortDown />}
            />
          </div>
        </div>
      </div>

      {/* sekcja 4 - rekomendacje klientów */}
      <div className='index_box s4_box' id="s4">
        <h2 className='index_header'>Fizjoterapia i trening w praktyce</h2>
        <div className='index_subheader s4_header'>Rekomendacje osób, które już skorzystały z usług*</div>
        <div className='feed_box'>
          {feedback.map((feedback, index) => (
            <div key={index}>
              <div className='feed_stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
              <div className='feed_text'>{feedback.frontmatter.opinion}</div>
              <div className='feed_client'>{feedback.frontmatter.client}</div>
              <div className='feed_job'>{feedback.frontmatter.profession}</div>
            </div>
            ))}
        </div>
        <p className='index_paragraph s4_paragraph'>*Cytowane słowa pochodzą z wizytówki umieszczonej w serwisie Google Maps; profilów w serwisie Facebook, Instagram, Znany Lekarz oraz wiadomości prywatnych.</p>
        <div className='index_button_box'>
          <div className='index_button'>
            <ButtonGlobal
              slug='/rezerwacja'
              name='Umów wizytę'
              icon={<FaCalendarAlt />}
            />
          </div>
          <div className='index_button'>
            <ButtonGlobal
              slug='/#s4'
              name='Losowa rekomendacja'
              bc='var(--color-8)'
              fc='var(--color-7)'
              hbc='var(--color-3)'
              icon={<FaUserCheck />}
            />
          </div>
        </div>
      </div>

      {/* sekcja 4 - rekomendacje klientów */}
      <div className='index_box' id="s5">
        <h2 className='index_header'>Fizjoterapia i trening w mediach społecznościowych</h2>
        <div className='index_subheader'>Opinie osób, które już skorzystały z usług*</div>
      </div>
    </LayoutStart>
  );
}

export const query = graphql`
query Home {
  feedback: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(feedback)/"}}) {
    nodes {
      frontmatter {
        client
        profession
        opinion
        source
      }
    }
  }
}
`