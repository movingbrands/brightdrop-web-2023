import clsx from 'clsx'
import {baseNewsCard, newsGrid} from './NewsLayout.css'

interface NewsLayout {
  children: React.ReactNode
}

export const NewsLayout = ({children}: NewsLayout) => (
  <section className={clsx(newsGrid)}>{children}</section>
)

export const NewsCard = ({children}: NewsLayout) => (
  <article className={baseNewsCard}>{children}</article>
)
