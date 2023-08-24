import { easeOutQuart } from "@/style/easings";
import { padding } from "@/style/sizes";
import { globalStyle, style } from "@vanilla-extract/css";

export const header = style({
    width: '100%',
    textAlign: 'center',
    padding: padding.large * 2
})

const move = 20

globalStyle(`${header} > h1, ${header} > h2`, {
    opacity: 0.0,
    transform: `translateY(${move}px)`,
    transition: `all 0.5s ${easeOutQuart}`,
})

globalStyle(`${header} > h2`, {
    transitionDelay: '0.15s',
    transform: `translateY(${move * 2})`,
})

globalStyle(`${header}[data-visible="true"] > h1, ${header}[data-visible="true"] > h2`, {
    transform: 'translateY(0)',
    opacity: 11.0
})