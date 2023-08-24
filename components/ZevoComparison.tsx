import { h2, h3 } from '@/style/typography.css'
import { header, item, section } from './ZevoComparison.css'
import clsx from 'clsx'
import { interactable } from '@/style/interactable.css'

export const ZevoComparisonSection = () => (
    <section className={section}>
        <header className={clsx(header)}>
            <h1 className={clsx(h3, item, interactable)}>BrightDrop Zevo 600</h1>
            <h1 className={clsx(h3, item, interactable)}>BrightDrop Zevo 400</h1>
        </header>
    </section>
)
