'use client'

import clsx from 'clsx'
import {useAppStore} from '@/utils/app-store'
import {actionButton} from '../Button.css'
import {scrollButton, visible} from './ScrollToTopButton.css'
import {interactable} from '@/style/interactable.css'
import {midblue} from '@/style/colors'

const scrollToTop = (smooth: boolean = false): void => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    document.documentElement.scrollTop = 0
  }
}

const viewBox = '0 0 256 256'
const svgPath =
  'M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z'
const width = '20'
const height = '20'

interface ScrollToTopButton {
  smooth?: boolean
  threshold?: number
}

export const ScrollToTopButton = ({
  smooth = true,
  threshold = 0.95
}: ScrollToTopButton) => {
  const buttonVisible = useAppStore((state) => state.progress > threshold)

  return (
    <button
      className={clsx(
        actionButton,
        scrollButton,
        interactable,
        buttonVisible && visible
      )}
      onClick={() => scrollToTop(smooth)}
      aria-label="Scroll to top"
    >
      <svg width={width} height={height} stroke={midblue} viewBox={viewBox}>
        <path d={svgPath} strokeWidth={10} />
      </svg>
    </button>
  )
}
