"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-pretty font-sans text-3xl font-semibold text-slate-900">
            More than a cafe—your place for memories
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            We obsess over quality ingredients, playful recipes, and warm hospitality. From creamy choco shakes to zesty
            mocktails, every sip is crafted to delight. Settle in, slow down, and savor moments worth sharing.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 shadow-md"
        >
          <Image
            src="/warm-modern-cafe-interior.png"
            alt="Cozy interior of our cafe"
            fill
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
