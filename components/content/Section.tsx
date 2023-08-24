'use client'

import classNames from 'clsx'
import { insetSection, section, splitSection } from './Section.css'

interface Section {
  children: React.ReactNode
  inset?: boolean
  split?: boolean
}
export const Section = ({
  children,
  inset,
  split
}: Section) => <section className={classNames(section, inset && insetSection, split && splitSection)}>{children}</section>
