import { AnimatedHeader } from '@/components/content/Header'
import { Main } from '@/components/content/Main'
import { Section } from '@/components/content/Section'
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
              content: 'parcel delivery',
            }
          ]}
          paragraph="Subtitle"
          cta={'Contact Sales'}
        />
      </AnimatedHeader>
      <Section>
        <Title headline="Package delivery redesigned" subtitle="Something else" />
        <Tray behavior="centered">
          <TrayCard />
          <TrayCard />
          <TrayCard />
        </Tray>
      </Section>
      <Section inset>
        <Title headline="Key features" />
        <Placeholder>
          <h1 className={h3}>Key feature 1</h1>
        </Placeholder>
        <Placeholder>
          <h1 className={h3}>Key feature 2</h1>
        </Placeholder>
        <Placeholder>
          <h1 className={h3}>Key feature 3</h1>
        </Placeholder>
      </Section>
      <Section>
        <Title headline="How it works" />
        <Placeholder>
          <h1 className={h3}>How it works</h1>
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
      <Section>
        <Title headline="The latest from BrightDrop" />
        <NewsSection />
      </Section>
      <BannerSection />

    </Main>
  )
}

export default Page
