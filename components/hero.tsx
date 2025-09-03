"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const enter = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  return (
    <section id="hero" className="relative">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <motion.h1
            variants={enter}
            initial="hidden"
            animate="show"
            className="text-pretty font-sans text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            Indulge in a Taste of Paradise
          </motion.h1>
          <motion.p
            variants={enter}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-xl text-balance text-slate-600"
          >
            Where every sip and bite is an experience—crafted drinks, decadent desserts, and crazy choco shakes.
          </motion.p>
          <motion.div
            variants={enter}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center gap-3"
          >
            <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Our Menu
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore Our Delights
              </a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 shadow-lg"
        >
          <Image
            src="/images/ai/hero.png"
            alt="Elegant desserts and signature shakes presented on marble"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
        </motion.div>
      </div>
    </section>
  )
}
