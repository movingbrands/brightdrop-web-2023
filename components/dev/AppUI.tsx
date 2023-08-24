import Link from "next/link"
import { card, container, header, link, section } from "./AppUI.css"
import clsx from "clsx"
import { interactable } from "@/style/interactable.css"
import { h3 } from "@/style/typography.css"

export const AppUI = () => {
    return (
        <section className={container}>
            <section className={section}>
                <h1 className={clsx(header, h3)}>Prototype</h1>
                <Link href="/site" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Global motion prototype
                        </h1>
                        <p>The main site prototype</p>
                    </article>
                </Link>
            </section>
            <section className={section}>
                <h1 className={clsx(header, h3)}>Component examples</h1>
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
                <Link href="/components/type-motion" className={clsx(link, interactable)}>
                    <article className={card}>
                        <h1>
                            Type motion
                        </h1>
                        <p>Example of animated type along SVG path</p>
                    </article>
                </Link>
            </section>
        </section>
    )
}