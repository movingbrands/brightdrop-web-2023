import clsx from 'clsx'
import { section } from '../page.css'
import { TypeMotion } from '@/components/typography/TypeMotion'
import { exampleWrapper } from './pathHeadline.css'
import { h4 } from '@/style/typography.css'

const page = () => (
    <section className={clsx(section, exampleWrapper)}>
        <h1 className={h4}>Scroll to reveal</h1>
        <TypeMotion title="Example headline" />
    </section>
)

export default page
