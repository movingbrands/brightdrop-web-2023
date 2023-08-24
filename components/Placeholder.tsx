'use client'

import clsx from "clsx";
import { animatedPlaceholder, background, placeholder, placeholderVisible } from "./Placeholder.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface Placeholder {
    children?: React.ReactNode;
    blank?: boolean
    animated?: boolean
}

const BasicPlaceholder = ({ children, blank = false }: Placeholder) =>
    <div className={clsx(placeholder, !blank && background)}>{children}</div>


const AnimatedPlaceholder = ({ children, blank = false }: Placeholder) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.25 })

    return (
        <div ref={ref} className={clsx(placeholder, animatedPlaceholder, !blank && background, isInView && placeholderVisible)}>{children}</div>
    )
}


export const Placeholder = (props: Placeholder) =>
    props.animated ?
        <AnimatedPlaceholder {...props} /> :
        <BasicPlaceholder {...props} />