"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";

const images = [
  { src: "/images/ai/desserts-2.png", alt: "Molten choco lava with ice cream" },
  { src: "/images/ai/shakes-2.png", alt: "Oreo KitKat milkshake" },
  { src: "/images/ai/mocktails-1.png", alt: "Virgin Mojito" },
  { src: "/images/ai/desserts-1.png", alt: "Blueberry cheesecake" },
  { src: "/images/coolers/Watermelon.png", alt: "Watermelon cooler" },
  { src: "/images/ai/shakes-1.png", alt: "Crazy chocolate shake" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="mb-6 text-pretty font-sans text-3xl font-semibold text-slate-900">
        Gallery
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            type="button"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            onClick={() => {
              setActive(idx);
              setOpen(true);
            }}
            className="group relative aspect-square overflow-hidden rounded-lg border border-slate-200 bg-white"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl border-0 bg-transparent p-0 shadow-none">
          {/* Hidden but accessible title */}
          <VisuallyHidden>
            <DialogTitle>{images[active].alt}</DialogTitle>
          </VisuallyHidden>

          {/* Optional description for context */}
          <VisuallyHidden>
            <DialogDescription>
              Enlarged view of {images[active].alt}
            </DialogDescription>
          </VisuallyHidden>

          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src={images[active].src || "/placeholder.svg"}
              alt={images[active].alt}
              fill
              sizes="(min-width: 1024px) 768px, 90vw"
              priority
              className="object-cover"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
