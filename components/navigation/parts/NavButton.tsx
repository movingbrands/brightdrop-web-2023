import clsx from 'clsx'
import {closed, navButton, path} from './NavButton.css'
import {interactable} from '@/style/interactable.css'
import {actionButton} from '../../Button/Button.css'
import {forwardRef} from 'react'
import {motion} from 'framer-motion'

interface NavButton {
  menuOpen: boolean
  onClick: () => void
}

export const NavButton = forwardRef<HTMLButtonElement, NavButton>(
  ({menuOpen, onClick}: NavButton, ref) => (
    <button
      className={clsx(actionButton, navButton, interactable)}
      onClick={onClick}
      ref={ref}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={clsx(path, menuOpen && closed)}
          d="M7.00062 10L24.0048 10.0012C25.9735 10.0012 27.6484 9.2712 27.6484 7.57266C27.6484 5.87412 25.5034 4.49726 22.0006 8L8.00062 22"
        />
        <path
          className={clsx(path, menuOpen && closed)}
          d="M7.00062 19.9922L24.0048 19.991C25.9735 19.991 27.6484 20.721 27.6484 22.4195C27.6484 24.1181 25.5034 25.4949 22.0006 21.9922L8.00062 7.99219"
        />
      </svg>
    </button>
  )
)

NavButton.displayName = 'NavButton'

export const MotionNavButton = motion(NavButton)
