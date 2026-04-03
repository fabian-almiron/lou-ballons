"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Elegant wedding balloon arch" },
  { src: "/images/gallery-2.jpg", alt: "Birthday celebration balloon backdrop" },
  { src: "/images/gallery-3.jpg", alt: "Bridal shower balloon decorations" },
  { src: "/images/gallery-4.jpg", alt: "Corporate event balloon installation" },
  { src: "/images/gallery-5.jpg", alt: "Romantic wedding ceremony arch" },
  { src: "/images/gallery-6.jpg", alt: "Baby shower balloon garland" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A glimpse into the celebrations we&apos;ve brought to life. Every installation is designed with intention, detail, and a touch of fun.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-2xl aspect-square group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-square md:aspect-video">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
