import { AnimatedIcon } from '@/components/lottie/AnimatedIcon'
// import { section, wrapper } from '../page.css'
import clsx from 'clsx'
// import { col } from '@/style/theme.css'
// import { p } from '@/style/typography.css'
import { AnimationName } from '@/components/lottie/animations'
import { card, container, header, section } from '@/components/dev/AppUI.css'
import { h3 } from '@/style/typography.css'

interface Wrapper {
    animation: AnimationName
}

const AnimatedIconPreview = ({ animation }: Wrapper) => (
    <section className={section}>
        <h1 className={clsx(header, h3)}>{animation}</h1>
        <article className={card}>
            <AnimatedIcon animation={animation} />
        </article>
    </section>
)

const page = () => (
    <section className={section}>
        <section className={container}>
            <AnimatedIconPreview animation="car" />
            <AnimatedIconPreview animation="cart" />
            <AnimatedIconPreview animation="charge" />
            <AnimatedIconPreview animation="cloud" />
            <AnimatedIconPreview animation="computer" />
            <AnimatedIconPreview animation="electricMoney" />
            <AnimatedIconPreview animation="leaf" />
            <AnimatedIconPreview animation="lightning" />
            <AnimatedIconPreview animation="shield" />
            <AnimatedIconPreview animation="traceGrocery" />
        </section>
    </section>

)

export default page
