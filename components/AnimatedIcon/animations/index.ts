import type * as keys from '.'
export type AnimationName = keyof typeof keys

export const car = async () => await import('./Car_ICON.json')

export const cart = async () => await import('./Cart_ICON.json')

export const charge = async () => await import('./Charge_ICON.json')

export const cloud = async () => await import('./Cloud_ICON.json')

export const computer = async () => await import('./Computer_ICON.json')

export const electricMoney = async () =>
  await import('./Electric Money_ICON.json')

export const leaf = async () => await import('./Leaf_ICON.json')

export const lightning = async () => await import('./Lightning_ICON.json')

export const shield = async () => await import('./Shield_ICON.json')

export const traceGrocery = async () =>
  await import('./Trace Grocery_ICON.json')
