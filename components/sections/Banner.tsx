import { h2 } from '@/style/typography.css'
import { banner, inner, insetBanner } from './Banner.css'
import clsx from 'clsx'

interface BannerSection {
    inset?: boolean
}
export const BannerSection = ({ inset = false }: BannerSection) => (
    <section className={clsx(banner, inset && insetBanner)}>
        <header className={clsx(inner)}>
            <h1 className={h2}>Banner</h1>
        </header>
    </section>
)
