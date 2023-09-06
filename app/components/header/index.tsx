import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex items-center'>
        <div>
            <img src='/logo.png' width="50" height="50" alt="Logo"/>
        </div>
        <div>orta kısım</div>
        <div>login</div>
    </div>
  )
}

export default Header