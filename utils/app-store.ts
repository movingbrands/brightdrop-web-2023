import { breakpoints, variableNames } from '@/style/sizes'
import { create } from 'zustand'

export type UserPreferences = {
  reducedMotion: boolean
  increasedContrast: boolean
}

export type WindowSize = [number, number]

export type ScreenSize = 'small' | 'large'

interface AppStore {
  ready: boolean
  size: ScreenSize
  windowSize: WindowSize
  scrollY: number
  progress: number
  navVisible: boolean
  navExpanded: boolean
  belowFold: boolean
  activeNavSection: string
  menuOpen: boolean
  setMenuOpen: (mo: boolean) => void
  setActiveNavSection: (s: string) => void
  setScroll: (s: number, p: number) => void
  setWindowSize: (w: number, h: number) => void
}

const scrollThreshold = {
  small: 80,
  large: 120
}

export const useAppStore = create<AppStore>()((set) => ({
  ready: false,
  size: 'large',
  windowSize: [0, 0],
  scrollY: 0,
  progress: 0,
  navVisible: true,
  navExpanded: false,
  activeNavSection: '',
  menuOpen: false,
  belowFold: false,
  setMenuOpen: (menuOpen: boolean) =>
    set((state) => ({
      menuOpen: state.size === 'small' ? menuOpen : false
    })),
  setActiveNavSection: (activeNavSection: string) => {
    set(() => ({
      activeNavSection,
      navExpanded: !!activeNavSection
    }))
  },
  setWindowSize: (width: number, height: number) =>
    set((state) => {
      const size = width < breakpoints.large ? 'small' : 'large'
      document.documentElement?.style.setProperty(variableNames.docHeight , `${height}px`)
      return {
        ready: true,
        size,
        menuOpen: state.size === 'small' ? state.menuOpen : false,
        windowSize: [width, height]
      }
    }),
  setScroll: (scrollY, progress) =>
    set((state) => ({
      progress: scrollY === 0 ? 0 : progress,
      navExpanded: false,
      activeNavSection: '',
      navVisible:
        scrollY < scrollThreshold[state.size] || state.scrollY > scrollY,
      scrollY: scrollY
    }))
}))
