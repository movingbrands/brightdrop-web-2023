'use client'

import { h1,  h3 } from "@/style/typography.css"
import { header } from "./Title.css"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface Title {
    headline: string
    subtitle?: string
    once?: boolean
    amount?: number
}

export const Title = ({ headline, subtitle, once = false, amount = 1.0 }: Title) => {
    const ref = useRef<HTMLHeadingElement>(null)
    const isInView = useInView(ref, { once, amount })

    return (
        <header ref={ref} className={header} data-visible={isInView}>
            <h1 className={h1}>{headline}</h1>
            {subtitle && <h2 className={h3}>{subtitle}</h2>}
        </header>
    )
}