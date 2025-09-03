"use client"

import Image from "next/image"
import { motion } from "framer-motion"

type Item = { name: string; price: number | string; image?: string }

export function MenuSection({
  id,
  title,
  items,
  highlight = false,
}: { id: string; title: string; items: Item[]; highlight?: boolean }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-pretty font-sans text-3xl font-semibold text-slate-900">{title}</h2>
        {highlight && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">Signature</span>
        )}
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, idx) => (
          <motion.article
            key={item.name + idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            whileHover={{ y: -4 }}
            className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={item.image || `/placeholder.svg?height=600&width=600&query=${encodeURIComponent(item.name)}`}
                alt={item.name}
                fill
                loading="lazy"
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <h3 className="text-sm font-medium text-slate-900">{item.name}</h3>
              <p className="text-sm font-semibold text-emerald-700">
                {typeof item.price === "number" ? `₹${item.price}` : item.price}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
