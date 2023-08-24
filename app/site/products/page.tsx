import {AnimatedArticle} from '@/components/content/Article'
import {AnimatedHeader} from '@/components/content/Header'
import {AnimatedMain} from '@/components/content/Main'
import {Section} from '@/components/content/Section'
import {Footer} from '@/components/content/Footer'
import {h1} from '@/style/typography.css'
import Link from 'next/link'

const Page = () => {
  return (
    <AnimatedMain>
      <AnimatedHeader>
        <h1 className={h1}>All products</h1>
      </AnimatedHeader>
      <Section>
        <AnimatedArticle>
          <Link href="/products/brightdrop-zevo">
            <h1 className={h1}>Zevo</h1>
          </Link>
        </AnimatedArticle>
        <AnimatedArticle>
          <Link href="/products/brightdrop-trace-move">
            <h1 className={h1}>Trace Move</h1>
          </Link>
        </AnimatedArticle>
        <AnimatedArticle>
          <Link href="/products/brightdrop-trace-grocery">
            <h1 className={h1}>Trace Grocery</h1>
          </Link>
        </AnimatedArticle>
        <AnimatedArticle>
          <Link href="/products/brightdrop-core">
            <h1 className={h1}>Core</h1>
          </Link>
        </AnimatedArticle>
      </Section>
    </AnimatedMain>
  )
}

export default Page
