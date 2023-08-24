'use client'

import classNames from 'clsx'
import {footer, section, ul, visible} from './Footer.css'
import {h1, h2, p} from '@/style/typography.css'
import Link from 'next/link'
import {Route} from '@/sitemap'
import {Logo} from '../Navigation/parts/Logo'
import {useAppStore} from '@/utils/app-store'

export const Footer = () => {
  const progress = useAppStore((state) => state.progress)

  return (
    <footer className={classNames(footer, progress > 0.75 && visible)}>
      <h1 className={h2}>Footer</h1>
      {/* <Logo />
        <section className={section}>
            <h2>Explore BrightDrop</h2>
            <ul className={ul}>
                {getRoutes('products').map((product) => (
                    <FooterLink key={`footer-${product.path}`} {...product} />
                ))}
            </ul>
        </section>
        <section className={section}>
            <h2>Company</h2>
            <ul className={ul}>
                <FooterLink {...getRoute('newsroom')} />
                <FooterLink {...getRoute('about')} />
                <FooterLink {...getRoute('events')} />
                <FooterLink {...getRoute('support')} />
            </ul>
        </section>
        <section className={section}>
            <h2>Work with us</h2>
            <ul className={ul}>
                <FooterLink {...getRoute('newsroom')} />
                <FooterLink {...getRoute('about')} />
                <FooterLink {...getRoute('events')} />
                <FooterLink {...getRoute('support')} />
            </ul>
        </section>
        <section className={section}>
            <h2>Legal</h2>

        </section> */}
    </footer>
  )
}

const FooterLink = ({path, title}: Partial<Route>) =>
  path ? (
    <li>
      <Link href={path}>{title}</Link>
    </li>
  ) : null
