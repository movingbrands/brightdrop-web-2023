import { Headline } from '@/components/typography/Headline'
import { AnimatedHeader } from '@/components/content/Header'
import { Main } from '@/components/content/Main'
// import { CareersSection } from '@/sections/page/home/Careers'
// import { EcosystemSection } from '@/sections/page/home/Ecosystem'
import { NewsSection } from '@/components/sections/News'
// import { FeatureCardsSection } from '@/sections/page/home/FeatureCards'
import { Tray, TrayCard } from '@/components/content/Tray'
import { Section } from '@/components/content/Section'
import { Title } from '@/components/typography/Title'
import { Card, CardLayout } from '@/components/layouts/CardLayout'
import { h2, h3 } from '@/style/typography.css'
import { Placeholder } from '@/components/common/Placeholder'
import { BannerSection } from '@/components/sections/Banner'

const Homepage = () => {
  return (
    <Main background="offwhite">
      <AnimatedHeader background="navy">
        <Headline
          lines={[
            {
              content: 'Moving things'
            },
            {
              content: 'forward',
              highlight: true
            }
          ]}
          paragraph="We’re enabling businesses to re-imagine logistics for an all-electric future. Explore our solutions built to help decarbonize the movement of goods and services."
          cta={'Contact Sales'}
        />
      </AnimatedHeader>
      <Section inset>
        <Title headline="Ecosystem" subtitle="Ecosystem subtitle" />
        <Placeholder animated>
          <h1 className={h3}>Ecosystem component</h1>
        </Placeholder>
      </Section>
      <Section>
        <Title headline="Key features" />
        <CardLayout>
          <Card>
            <h1 className={h2}>1</h1>
          </Card>
          <Card>
            <h1 className={h2}>2</h1>
          </Card>
          <Card>
            <h1 className={h2}>3</h1>
          </Card>
          <Card>
            <h1 className={h2}>4</h1>
          </Card>
          <Card>
            <h1 className={h2}>5</h1>
          </Card>
          <Card>
            <h1 className={h2}>6</h1>
          </Card>
          <Card>
            <h1 className={h2}>7</h1>
          </Card>
        </CardLayout>
      </Section>
      <Section>
        <Title headline="Our valued partners" subtitle="Something else" />
        <Tray behavior="centered">
          <TrayCard />
          <TrayCard />
          <TrayCard />
        </Tray>
      </Section>
      <BannerSection />
      <Section>
        <Title headline="The latest from BrightDrop" />
        <NewsSection />
      </Section>
      <Section inset>
        <Title headline="Careers" />
        <Placeholder />
      </Section>
    </Main>
  )
}

export default Homepage
