type DisposeListener = () => void

type MediaQueryTypes =
  | '(prefers-contrast: more)'
  | '(prefers-reduced-motion: reduce)'

export const mediaQuery = (
  type: MediaQueryTypes,
  cb: (b: boolean) => void
): DisposeListener => {
  const mediaQuery = window?.matchMedia(type)

  const handleMediaQuery = () => {
    cb(!mediaQuery || mediaQuery.matches)
  }

  mediaQuery.addEventListener('change', handleMediaQuery)
  handleMediaQuery()

  return () => {
    mediaQuery.removeEventListener('change', handleMediaQuery)
  }
}
