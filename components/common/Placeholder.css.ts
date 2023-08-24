import { easeOutCubic, easeOutQuart } from "@/style/easings";
import { padding } from "@/style/sizes";
import { style } from "@vanilla-extract/css";

export const placeholder = style({
    aspectRatio: '16 / 9',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: padding.large,
    selectors: {
        '&:not(:last-child)': {
            marginBottom: padding.large,
        }
    }
})

export const animatedPlaceholder = style({
    opacity: 0.0,
    transform: `translateY(50px)`,
    transition: `all 0.6s ${easeOutCubic}`,
})

export const placeholderVisible = style({
    opacity: 1.0,
    transform: `translateY(0)`,
})

export const backgroundFill = style({
    background: 'rgba(200,200,200,1.0)',
    borderRadius: 30,
})