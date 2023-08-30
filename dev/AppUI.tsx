import Link from "next/link"
import { card, container, header, link, section } from "./AppUI.css"
import clsx from "clsx"
import { interactable } from "@/style/interactable.css"
import { h3 } from "@/style/typography.css"

export const AppUI = () => {
    return (
        <section className={clsx(container)}>
            <section className={section}>
                <h1 className={clsx(header, h3)}>Global motion</h1>
                <Link href="/site" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Motion prototype
                        </h1>
                        <p>The main site prototype, providing guidance on how to combine and choreograph different types of motion across the site</p>
                    </article>
                </Link>
            </section>
            <section className={section}>
                <h1 className={clsx(header, h3)}>Components</h1>
                <Link href="/components/animated-icons" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Animated icons
                        </h1>
                        <p>Animated SVG icons using Lottie</p>
                    </article>
                </Link>
                <Link href="/components/button" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Button
                        </h1>
                        <p>Animated button states</p>
                    </article>
                </Link>
            </section>
            <section className={section}>
                <h1 className={clsx(header, h3)}>Global components</h1>
                <Link href="/components/navigation" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Navigation
                        </h1>
                        <p>Global navigation component</p>
                    </article>
                </Link>
            </section>
            <section className={section}>
                <h1 className={clsx(header, h3)}>Example implementations</h1>
                <Link href="/components/type-motion" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Type motion
                        </h1>
                        <p>Example of animated type along SVG path</p>
                    </article>
                </Link>
                <Link href="/components/feature-panels" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Feature panels (from top)
                        </h1>
                        <p>Example implementation of sticky overlapping panels which stack from the top</p>
                    </article>
                </Link>
                <Link href="/components/feature-panels" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Feature panels (from bottom)
                        </h1>
                        <p>Example implementation of sticky overlapping panels which stack from the bottom</p>
                    </article>
                </Link>
            </section>
        </section>
    )
}