import React from 'react'

function Header() {
  return (
    <div className='hearder'>
        //first we setup the amazon logo
        <img className='header_logo'
        src="https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png" />

        <div className='header_Search'>
            <input
            className='header_searchInput'
            type="text"/>
        </div>
    </div>
  )
}

export default Header