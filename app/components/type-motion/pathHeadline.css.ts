import { padding } from "@/style/sizes";
import { globalStyle, style } from "@vanilla-extract/css";

export const exampleWrapper = style({
    paddingTop: '100vh',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'flex-start',
    position: 'relative'
})

globalStyle(`${exampleWrapper} > h1`, {
    position: 'fixed',
    top: padding.large,
    left: padding.large,
    opacity: 0.5
})