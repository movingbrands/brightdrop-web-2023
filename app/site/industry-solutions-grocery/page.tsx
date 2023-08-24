import { AnimatedArticle } from '@/components/content/Article'
import { AnimatedHeader } from '@/components/content/Header'
import { Main } from '@/components/content/Main'
import { Section } from '@/components/content/Section'
import { Footer } from '@/components/content/Footer'
import { h1, h3 } from '@/style/typography.css'
import { Title } from '@/components/typography/Title'
import { Tray, TrayCard } from '@/components/content/Tray'
import { Placeholder } from '@/components/common/Placeholder'
import { NewsSection } from '@/components/sections/News'
import { BannerSection } from '@/components/sections/Banner'
import { Headline } from '@/components/typography/Headline'

const Page = () => {
  return (
    <Main>
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
        <Placeholder style={{
          position: 'sticky',
          top: 100,
          background: "rgb(220,220,220)",
          aspectRatio: `2.5 / 1`,
          zIndex: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          boxShadow: `0px 4px 19px 0px rgba(0, 0, 0, 0.10)`
        }} >
          <h1 className={h3}>Key feature 1</h1>
        </Placeholder>
        <Placeholder style={{
          position: 'sticky',
          top: 100,
          transform: 'translateY(80px)',
          background: "rgb(190,190,190)",
          aspectRatio: `2.5 / 1`,
          zIndex: 2,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          boxShadow: `0px 4px 19px 0px rgba(0, 0, 0, 0.10)`
        }} >
          <h1 className={h3}>Key feature 2</h1>
        </Placeholder>
        <Placeholder style={{
          position: 'sticky',
          top: 100,
          transform: 'translateY(130px)',
          background: "rgb(160,160,160)",
          aspectRatio: `2.5 / 1`,
          zIndex: 3,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          boxShadow: `0px 4px 19px 0px rgba(0, 0, 0, 0.10)`
        }} >
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

    </Main>
  )
}

export default Page
