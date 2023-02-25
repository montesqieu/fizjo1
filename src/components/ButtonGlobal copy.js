import React from 'react'
import { Link } from 'gatsby'
import { FaRegCalendarAlt } from "react-icons/fa"
import '../styles/global.css'

const ButtonGlobal = ({ slug, name }) => (

  <Link
    to={slug}
    className="button_global"
  >
    {name} <FaRegCalendarAlt className='icon_global'/>
  </Link>
  );

export default ButtonGlobal;