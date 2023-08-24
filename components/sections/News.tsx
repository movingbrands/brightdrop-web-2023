import { Section } from "@/components/content/Section";
import { NewsCard, NewsLayout } from "@/components/layouts/NewsLayout";
import { h2 } from "@/style/typography.css";

export const NewsSection = () => (
    <Section inset>
        <NewsLayout>
            <NewsCard>
                <h1 className={h2}>1</h1>
            </NewsCard>
            <NewsCard>
                <h1 className={h2}>2</h1>
            </NewsCard>
            <NewsCard>
                <h1 className={h2}>3</h1>
            </NewsCard>
        </NewsLayout>
    </Section>
)