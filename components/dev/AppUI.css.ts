import { midblue, offwhite, white } from "@/style/colors";
import { padding } from "@/style/sizes";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
    width: '100%',
    height: '100vh',
    background: offwhite,
    padding: padding.large
})

export const section = style({

})

export const article = style({

})

export const header = style({
    padding: `16px 0`
})

export const card = style({
    padding: 24,
    marginBottom: 16,
    background: white,
    borderRadius: 16
})

export const link = style({
    display: 'block',
    maxWidth: 400,
})

globalStyle(`${link}:hover > ${card}`, {
    background: midblue,
    color: white
})