import React from 'react'
import HamburgerMenu from 'components/HamburgerMenu'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='bg-black'>
      <div className='h-[100px] '>
        <HamburgerMenu />
      </div>
    </header>
  )
}
