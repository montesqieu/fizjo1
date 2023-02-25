import React from 'react'
import { Link } from 'gatsby'

export default function Button({ slug, style, name, icon, children }) {
  return (
    <Link to={slug} className={style}>
      {name}
      <span>{children} {icon}</span>
    </Link>
  )
}