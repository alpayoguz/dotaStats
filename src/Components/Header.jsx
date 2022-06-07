import React from 'react'

const Header = ({text, cls}) => {
  return (
    <h2 className={`${cls}`}>{text}</h2>
  )
}

export default Header