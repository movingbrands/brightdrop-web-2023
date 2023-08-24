import { white } from "@/style/colors";
import { style } from "@vanilla-extract/css";

export const section = style({
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: white
})

export const header = style({
    position: 'sticky',
    top: 0,
    left: 0,
    background: white,
    width: '100%',
    height: 220,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 24,
    boxShadow: '0 1px 0 0px rgba(0,0,0,0.2)'
})

export const item = style({
    padding: 16
})