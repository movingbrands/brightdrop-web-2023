import { Section } from '@/components/content/Section'
import { h3 } from '@/style/typography.css'
import { Title } from '@/components/typography/Title'
import { Placeholder } from '@/components/common/Placeholder'

const Page = () => {
    return (
        <>
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
            <Section inset>
                <Title headline="Another section" />

                <Placeholder />
            </Section>
        </>
    )
}

export default Page
