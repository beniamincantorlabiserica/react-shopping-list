import React from 'react'

const Footer = ({lenght}) => {
    const today = new Date();
  return (
    <footer>
        {lenght} List {lenght === 1 ? "Item" : "Items"}
    </footer>
  )
}

export default Footer