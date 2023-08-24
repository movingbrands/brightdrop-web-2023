import { AnimatedArticle } from '@/components/content/Article'
import { AnimatedHeader } from '@/components/content/Header'
import { Main } from '@/components/content/Main'
import { Section } from '@/components/content/Section'
import { Footer } from '@/components/content/Footer'
import { h1, h3, h4 } from '@/style/typography.css'
import { Placeholder } from '@/components/common/Placeholder'
import { Title } from '@/components/typography/Title'
import { Tray, TrayCard } from '@/components/content/Tray'
import { BannerSection } from '@/components/sections/Banner'

const Page = () => {
  return (
    <Main>
      <AnimatedHeader>
        <h1 className={h1}>About us</h1>
      </AnimatedHeader>
      <Section inset>
        <Title headline="We envision a better future" />
        <Placeholder>
          <h1 className={h3}>Ecosystem diagram</h1>
        </Placeholder>
      </Section>
      <Section inset split>
        <Placeholder blank>
          <h1 className={h4}>Example text</h1>
        </Placeholder>
        <Placeholder>
          <h1 className={h3}>Ecosystem diagram</h1>
        </Placeholder>
      </Section>
      <Section inset>
        <Title headline="Zevo in the news" />
        <Tray behavior="grid">
          <TrayCard />
          <TrayCard />
          <TrayCard />
          <TrayCard />
          <TrayCard />
        </Tray>
      </Section>
      <BannerSection />

    </Main>
  )
}

export default Page
