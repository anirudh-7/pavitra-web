'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function LogoImage({
  className = '',
  fill = false,
  width,
  height,
}: {
  className?: string
  fill?: boolean
  width?: number
  height?: number
}) {
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  const props = fill
    ? { fill: true as const }
    : { width: width ?? 40, height: height ?? 40 }

  return (
    <Image
      src="/logo.jpg"
      alt="Pavitra Securities Logo"
      {...props}
      className={className}
      style={{ mixBlendMode: 'multiply' }}
      onError={() => setHidden(true)}
      priority
    />
  )
}
