'use client'

import dynamic from 'next/dynamic'

export const Navigation = dynamic(
  () =>
    import('@/components/GlobalNavigation/Navigation').then((mod) => mod.Navigation),
  {ssr: false}
)
