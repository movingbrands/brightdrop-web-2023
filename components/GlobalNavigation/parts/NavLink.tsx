import NextLink from 'next/link'
import {Link} from '@radix-ui/react-navigation-menu'
import {forwardRef} from 'react'
import {motion} from 'framer-motion'

interface NavLink {
  href: string
  className?: string
  children: React.ReactNode
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLink>(
  ({href, ...props}, ref) => (
    <NextLink href={href} passHref legacyBehavior>
      <Link ref={ref} {...props} />
    </NextLink>
  )
)

NavLink.displayName = 'NavLink'

export const MotionNavLink = motion(NavLink)
