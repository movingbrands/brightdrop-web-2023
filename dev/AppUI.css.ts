import { midblue, offwhite, white } from "@/style/colors";
import { padding } from "@/style/sizes";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
    width: '100%',
    minHeight: '100vh',
    background: offwhite,
    padding: padding.large
})

export const section = style({

})

export const article = style({

})

export const header = style({
    padding: `16px 0`,
    textTransform: 'capitalize'
})

export const codeWrapper = style({
    padding: 8,
    background: 'rgba(0,0,0,0.1)',
    borderRadius: 4,
    fontFamily: 'Andale Mono, monospace',
    textTransform: 'initial'

})

export const card = style({
    fontSize: 14,
    padding: 16,
    marginBottom: 8,
    background: white,
    borderRadius: 12
})

export const link = style({
    display: 'block',
    maxWidth: 400,
})

globalStyle(`${link}:hover > ${card}`, {
    background: midblue,
    color: white
})