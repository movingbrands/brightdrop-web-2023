import { white } from '@/style/colors'
import { breakpoints, padding } from '@/style/sizes'
import { style } from '@vanilla-extract/css'

export const section = style({
    // minHeight: '90vh'
})

export const insetSection = style({
    padding: padding.large * 2
})

export const splitSection = style({
    '@media': {
        [`(min-width: ${breakpoints.large}px)`]: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse'
        }
    }
})