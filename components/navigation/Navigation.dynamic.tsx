'use client'

import dynamic from 'next/dynamic'

export const Navigation = dynamic(
  () =>
    import('@/components/navigation/Navigation').then((mod) => mod.Navigation),
  {ssr: false}
)
