import {useEffect, useLayoutEffect, useRef, useState} from 'react'
// import { debounce } from "./debounce";

const THRESHOLD = 1

type Direction = 'up' | 'down' | null

export const useScrollDirection = (): [
  number,
  Direction,
  boolean,
  boolean,
  number
] => {
  const [scrollDirection, setScrollDirection] = useState<Direction>(null)
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [atStart, setAtStart] = useState<boolean>(true)
  const [atEnd, setAtEnd] = useState<boolean>(false)

  const blocking = useRef(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    prevScrollY.current = window.scrollY
    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      setScrollPosition(scrollY)
      setAtStart(scrollY === 0)
      setAtEnd(window.innerHeight + scrollY >= document.body.offsetHeight)

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up'
        setScrollDirection(newScrollDirection)
        prevScrollY.current = scrollY > 0 ? scrollY : 0
      }

      blocking.current = false
    }

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true
        window.requestAnimationFrame(updateScrollDirection)
      }
    }

    updateScrollDirection()
    // const debounced = debounce(onScroll, 16)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [scrollDirection])

  const onResize = () => {
    setHeight(document.body.offsetHeight)
  }

  useLayoutEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      window.addEventListener('resize', onResize)
    }
  })

  return [scrollPosition, scrollDirection, atStart, atEnd, height]
}
