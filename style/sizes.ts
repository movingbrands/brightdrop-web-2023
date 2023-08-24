type CSSSize = {
  small: string | number
  large: string | number
}

type NumberSize = {
  small: number
  large: number
}

export const variableNames = {
  docHeight: `--doc-height`
}

// Main breakpoints
export const breakpoints: NumberSize = {
  small: 640,
  large: 1200
}

// The CSS padding for the nav
export const padding: NumberSize = {
  small: 16,
  large: 32
}

// The CSS height of the nav bar in its default state
export const navHeight: NumberSize = {
  small: 64,
  large: 80
}

// The base height of the total nav when expanded (% of viewport height)
const expandedNavHeight: NumberSize = {
  small: 100,
  large: 60
}

// The CSS height of the total nav when expanded
export const navExpanded: CSSSize = {
  small: `calc(var(${variableNames.docHeight}) - ${padding.small * 2}px)`,
  large: `${expandedNavHeight.large}vh`
}

// The CSS height of the submenu when expanded
export const submenuExpanded: CSSSize = {
  small: `calc(var(${variableNames.docHeight}) - ${padding.small * 2 + navHeight.small}px)`,
  large: `calc(${expandedNavHeight.large}vh - ${navHeight.large}px)`
}

// The CSS pixel height of buttons
export const buttonHeight: NumberSize = {
  small: 48,
  large: 48
}

// The CSS pixel height of the footer
export const footerHeight: CSSSize = {
  small: `75vh`,
  large: `75vh`
}
