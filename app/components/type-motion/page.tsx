import clsx from 'clsx'
import { section } from '../page.css'
import { PathHeadline } from '@/components/typography/PathHeadline'
import { exampleWrapper } from './pathHeadline.css'
import { h4 } from '@/style/typography.css'

const page = () => (
    <section className={clsx(section, exampleWrapper)}>
        <h1 className={h4}>Scroll to reveal</h1>
        <PathHeadline title="Example headline" />
    </section>
)

export default page
