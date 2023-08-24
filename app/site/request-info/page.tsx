import {AnimatedArticle} from '@/components/content/Article'
import {AnimatedHeader} from '@/components/content/Header'
import {AnimatedMain} from '@/components/content/Main'
import {Section} from '@/components/content/Section'
import {Footer} from '@/components/content/Footer'
import {h1} from '@/style/typography.css'

const Page = () => {
  return (
    <AnimatedMain>
      <AnimatedHeader>
        <h1 className={h1}>Get in touch</h1>
      </AnimatedHeader>
      <Section>
        <AnimatedArticle>
          <h1 className={h1}>Item 1</h1>
        </AnimatedArticle>
        <AnimatedArticle>
          <h1 className={h1}>Item 2</h1>
        </AnimatedArticle>
        <AnimatedArticle>
          <h1 className={h1}>Item 3</h1>
        </AnimatedArticle>
      </Section>
    </AnimatedMain>
  )
}

export default Page
