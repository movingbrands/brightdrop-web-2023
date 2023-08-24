import { LottieAnimation } from '@/components/lottie/LottieAnimation'
import { section, wrapper } from '../page.css'
import clsx from 'clsx'
import { col } from '@/style/theme.css'
import { p } from '@/style/typography.css'
import { AnimationName } from '@/components/lottie/animations'

interface Wrapper {
    animation: AnimationName
}

const AnimatedIconPreview = ({ animation }: Wrapper) => (
    <article className={wrapper}>
        <h1 className={clsx(p, col['black'])}>{animation}</h1>
        <LottieAnimation animation={animation} />
    </article>
)

const page = () => (
    <section className={section}>
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
)

export default page
