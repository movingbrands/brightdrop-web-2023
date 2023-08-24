'use client'

import dynamic from 'next/dynamic'

export const Navigation = dynamic(
  () =>
    import('@/components/Navigation/Navigation').then((mod) => mod.Navigation),
  {ssr: false}
)
