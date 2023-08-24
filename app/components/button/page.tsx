import { card, container, header, section } from '@/components/dev/AppUI.css'
import { button } from '@/components/Button.css'
import clsx from 'clsx'
import { h3 } from '@/style/typography.css'


const page = () => (
    <section className={container}>
        <section className={section}>
            <h1 className={clsx(header, h3)}>Primary</h1>
            <article className={card}>
                <button className={button.primary}>Button text</button>
            </article>
        </section>
        <section className={section}>
            <h1 className={clsx(header, h3)}>Secondary</h1>
            <article className={card}>
                <button className={button.outline}>Button text</button>
            </article>
        </section>
    </section>
)

export default page
