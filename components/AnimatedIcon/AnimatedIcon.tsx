'use client'

import { useEffect, useRef, useState } from 'react'
import LottieComponent from 'react-lottie-player/dist/LottiePlayerLight'

import type { AnimationName } from './animations'
import * as animations from './animations'
import { placeholder } from './AnimatedIcon.css'

const useLottieAnimation = (animation: AnimationName) => {
  const [animationData, setAnimationData] = useState<object>()

  const fetchAnimation = async (name: AnimationName) => {
    try {
      const data = await animations[name]()
      setAnimationData(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchAnimation(animation)
  }, [animation])

  return animationData
}

interface AnimatedIcon {
  animation: AnimationName
  loop?: boolean
  play?: boolean
  size?: number
}

export const AnimatedIcon = ({
  animation,
  loop = false,
  play = true,
  size = 200
}: AnimatedIcon) => {
  const animationData = useLottieAnimation(animation)
  const ref = useRef<any>()

  const handleMouseOver = () => {
    ref.current?.goToAndPlay(0, true)
  }
  const handleMouseOut = () => {
    ref.current?.goToAndPlay(60, true)
  }
  return (
    <div
      className={placeholder}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onBlur={handleMouseOut}
      style={{ width: size, height: size }}
    >
      {animationData && (
        <LottieComponent
          ref={ref}
          loop={loop}
          style={{ width: size, height: size }}
          animationData={animationData}
          play={play}
        />
      )}
    </div>
  )
}