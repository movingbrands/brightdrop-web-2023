import { AnimatedHeader } from '@/components/content/Header'
import { AnimatedMain } from '@/components/content/Main'
import { h1, h2, h3, h4 } from '@/style/typography.css'
import { BannerSection } from '@/components/sections/Banner'
import { Section } from '@/components/content/Section'
import { Title } from '@/components/typography/Title'
import { Placeholder } from '@/components/Placeholder'
import { Card, CardLayout } from '@/components/layouts/CardLayout'
import { Headline } from '@/components/Headline'

const Page = () => {
  return (
    <AnimatedMain>
      <AnimatedHeader>
        <Headline
          lines={[
            {
              content: 'BrightDrop'
            },
            {
              content: 'Trace Move',
            }
          ]}
          paragraph="Subtitle"
          cta={'Contact Sales'}
        />
      </AnimatedHeader>
      <Section inset split>
        <Title headline="A new way" />
        <Placeholder>
          <h1 className={h3}>Trace Move Video</h1>
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
        <Title headline="How it works" />
        <Placeholder>
          <h1 className={h3}>How it works</h1>
        </Placeholder>
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
      <Section inset>
        <Title headline="Integrate with Core" />
        <Section split>
          <Placeholder blank>
            <h1 className={h3}>Key features component</h1>
          </Placeholder>
          <Placeholder>
            <h1 className={h4}>Core integration</h1>
          </Placeholder>
        </Section>
      </Section>
      <Section>
        <Title headline="Feature highlights" />
        <Placeholder>
          <h1 className={h3}>Feature highlights</h1>
        </Placeholder>
      </Section>
      <BannerSection inset />
    </AnimatedMain>
  )
}

export default Page
