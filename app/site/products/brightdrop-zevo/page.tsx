import { AnimatedHeader } from '@/components/content/Header'
import { AnimatedMain } from '@/components/content/Main'
import { h1, h2, h3 } from '@/style/typography.css'
import { Section } from '@/components/content/Section'
import { Title } from '@/components/typography/Title'
import { Placeholder } from '@/components/Placeholder'
import { Card, CardLayout } from '@/components/layouts/CardLayout'
import { Tray, TrayCard } from '@/components/content/Tray'
import { BannerSection } from '@/components/sections/Banner'
import { Headline } from '@/components/Headline'
import { ZevoComparisonSection } from '@/components/ZevoComparison'

const Page = () => {
  return (
    <AnimatedMain>
      <AnimatedHeader background="navy">
        <Headline
          lines={[
            {
              content: 'BrightDrop'
            },
            {
              content: 'Zevo',
            }
          ]}
          paragraph="Subtitle"
          cta={'Contact Sales'}
        />
      </AnimatedHeader>
      <Section inset>
        <Title headline="Key features" />
        <Placeholder>
          <h1 className={h3}>Key features component</h1>
        </Placeholder>
      </Section>
      <Section inset split>
        <Title headline="Unlock the value" />
        <Placeholder>
          <h1 className={h3}>Key features component</h1>
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
        <Title headline="Safety title" subtitle="Safety subtitle" />
        <Placeholder>Safety video</Placeholder>
      </Section>
      <ZevoComparisonSection />
      <Section>
        <Title headline="Zevo in the news" />
        <Tray behavior="scroll">
          <TrayCard />
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
