import { useEffect, useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from 'libs/hooks/dimensions'
import { MenuToggle } from 'components/MenuToggle'

type Props = {}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export default function HamburgerMenu({}: Props) {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  console.log(isOpen, 'isOpen')

  useEffect(() => {
    const closeMenu = (e: any) => {
      if (e.path[0] !== containerRef.current) {
        toggleOpen()
      }
      document.body.addEventListener('click', closeMenu)
      return () => document.body.addEventListener('click', closeMenu)
    }
  }, [])

  return (
    <motion.nav
      className='w-[300px] bg-stone-500 absolute top-0 left-0 bottom-0'
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className='w-[300px] bg-black absolute top-0 left-0 bottom-0'
        variants={sidebar}
      />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
