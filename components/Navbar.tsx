import React from 'react'
import { useScrollTrigger } from 'libs/hooks/scrollTrigger'

type Props = {}

export default function Navbar({}: Props) {
  const isVisible = useScrollTrigger()

  return (
    <nav
      className={`fixed w-screen h-[70px] ${
        isVisible ? '-top-[70px]' : 'top-0'
      } left-0 bg-white transition-all duration-300`}
    >
      <div>SP</div>
      <div>
        <a href='#about'></a>
      </div>
    </nav>
  )
}
