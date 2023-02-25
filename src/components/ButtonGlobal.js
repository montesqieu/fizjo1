import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Btn = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: ${props => props.bc || "var(--color-4)"};
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: ${props => props.fc || "var(--color-8)"};
  font-size: .875rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: 400ms ease;
  cursor: pointer;

  :hover {
    background-color: ${props => props.hbc || "var(--color-5)"};
  }
`

const BtnIcon = styled.span`
  margin-left: 0.5em;
`

export default function Button({ slug, name, bc, fc, hbc, icon, children }) {
  return (
    <Link to={slug}>
      <Btn type="button" bc={bc} fc={fc} hbc={hbc}>
        {name}
        <BtnIcon>
          {children} {icon}
        </BtnIcon>
      </Btn>
    </Link>
  )
}