'use client'

import clsx from "clsx";
import { animatedPlaceholder, backgroundFill, placeholder, placeholderVisible } from "./Placeholder.css";
import { CSSProperties, useRef } from "react";
import { useInView } from "framer-motion";

interface Placeholder {
    children?: React.ReactNode;
    blank?: boolean
    animated?: boolean
    style?: Partial<CSSProperties>
}

const BasicPlaceholder = ({ children, style, blank = false }: Placeholder) => {

    return (
        <div className={clsx(placeholder, !blank && backgroundFill)} style={style}>{children}</div>
    )
}

// const backgroundColor = `rgb(230,230,230)`

const AnimatedPlaceholder = ({ children, style, blank = false }: Placeholder) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.25 })

    return (
        <div
            ref={ref}
            style={style}
            className={clsx(placeholder, animatedPlaceholder, !blank && backgroundFill, isInView && placeholderVisible)}>
            {children}
        </div>
    )
}

export const Placeholder = (props: Placeholder) =>
    props.animated ?
        <AnimatedPlaceholder {...props} /> :
        <BasicPlaceholder {...props} />