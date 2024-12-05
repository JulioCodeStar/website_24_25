/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'

export default function MarcasSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 200)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const logos = [
    { name: 'Enda', url: 'https://placehold.co/120x40/svg' },
    { name: 'Fundación Grupo Social', url: 'https://placehold.co/120x40/svg' },
    { name: 'Sura', url: 'https://placehold.co/120x40/svg' },
    { name: 'Mapfre', url: 'https://placehold.co/120x40/svg' },
    { name: 'Rappi', url: 'https://placehold.co/120x40/svg' },
    { name: 'Avianca', url: 'https://placehold.co/120x40/svg' },
    { name: 'Lenovo', url: 'https://placehold.co/120x40/svg' },
    { name: 'Bancolombia', url: 'https://placehold.co/120x40/svg' },
  ]

  return (
    <div className="w-full bg-white py-12">
      <div className="relative overflow-hidden">
        <div
          className="flex space-x-16 whitespace-nowrap"
          style={{
            transform: `translateX(-${scrollPosition}px)`,
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="inline-block transform transition-transform hover:scale-110"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="inline-block transform transition-transform hover:scale-110"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="w-max"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

