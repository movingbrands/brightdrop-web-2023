import { AnimatedArticle } from '@/components/content/Article'
import { AnimatedHeader } from '@/components/content/Header'
import { AnimatedMain } from '@/components/content/Main'
import { Section } from '@/components/content/Section'
import { Footer } from '@/components/content/Footer'
import { h1, h3 } from '@/style/typography.css'
import { Title } from '@/components/typography/Title'
import { Tray, TrayCard } from '@/components/content/Tray'
import { Placeholder } from '@/components/Placeholder'
import { NewsSection } from '@/components/sections/News'
import { BannerSection } from '@/components/sections/Banner'
import { Headline } from '@/components/Headline'

const Page = () => {
  return (
    <AnimatedMain>
      <AnimatedHeader>
        <Headline
          lines={[
            {
              content: 'The future of'
            },
            {
              content: 'grocery shopping',
            }
          ]}
          paragraph="Subtitle"
          cta={'Contact Sales'}
        />
      </AnimatedHeader>
      <Section>
        <Title headline="Enter the modern grocery age" subtitle="Something else" />
        <Tray behavior="centered">
          <TrayCard small />
          <TrayCard small />
          <TrayCard small />
          <TrayCard small />
        </Tray>
      </Section>
      <Section inset>
        <Title headline="Key features" />
        <Placeholder animated>
          <h1 className={h3}>Key feature 1</h1>
        </Placeholder>
        <Placeholder animated>
          <h1 className={h3}>Key feature 2</h1>
        </Placeholder>
        <Placeholder animated>
          <h1 className={h3}>Key feature 3</h1>
        </Placeholder>
      </Section>
      <Section>
        <Title headline="Customer stories" />
        <Tray behavior="scroll">
          <TrayCard />
          <TrayCard />
          <TrayCard />
          <TrayCard />
        </Tray>
      </Section>
      <BannerSection />

    </AnimatedMain>
  )
}

export default Page
