import * as React from 'react'
import { motion } from 'framer-motion'

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
)

type Props = {
  toggle: () => void
}

export const MenuToggle = ({ toggle }: Props) => (
  <div className='w-[50px] h-[50px] rounded-[50%] relative bg-white'>
    <button
      onClick={toggle}
      className='outline-none border-none cursor-pointer w-[30px] h-[30px] bg-transparent rounded-[50%] absolute top-[12px] left-[14px]'
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  </div>
)
