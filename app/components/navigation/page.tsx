import clsx from 'clsx'
import { container, header, section } from '@/components/dev/AppUI.css'
import { h3 } from '@/style/typography.css'
import { Navigation } from '@/components/navigation/Navigation'
import { AppStore } from '@/components/AppStore'

const page = () => (
    <section className={section}>
        <section className={container}>
            <section className={section}>
                <h1 className={clsx(header, h3)}>Navigation</h1>
                <AppStore />
                <Navigation />
            </section>
        </section>
    </section>

)

export default page
