"use client"

import dynamic from 'next/dynamic'
import React from 'react'

// Cargar Ribbons solo en cliente
const Ribbons = dynamic(() => import('./Ribbons'), { ssr: false })

export default function RibbonsGlobal() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <Ribbons
        colors={["#be123c", "#ff7b8a"]}
        baseThickness={24}
        speedMultiplier={0.5}
        maxAge={600}
        enableShaderEffect={true}
      />
    </div>
  )
}
