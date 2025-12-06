"use client"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

// DATA SECTION - Edit this to manage your food lists
const FOOD_IDEAS = [
  "Fingerfood (z.B. Häppchen, Wraps)",
  "Salate (z.B. Nudelsalat, Kartoffelsalat)",
  "Dips & Aufstriche (z.B. Hummus, Tzatziki)",
  "Kuchen & Gebäck",
  "Käseplatte",
  "Obst & Gemüse",
  "Brote & Baguette",
  "Vegetarische Snacks",
]

const CONFIRMED_FOOD = [
  "Getränke",
  "Pasta-Salat",
  // Add more confirmed items here as simple strings:
  // "Item name",
]

// Animated background component
function AnimatedBackground() {
  return <div className="fixed inset-0 -z-20 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50" />
}

// Sparkle decoration component
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`inline-block animate-pulse ${className}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

// Animated stars component that fall/rise through the background
function AnimatedStars() {
  const [stars, setStars] = useState<
    Array<{
      id: number
      x: number
      size: number
      duration: number
      delay: number
      color: string
    }>
  >([])

  useEffect(() => {
    const starColors = ["#B8697D", "#C4A962", "#F5E6ED", "#D4AF37"]
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-star-fall"
          style={{
            left: `${star.x}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <svg
            width={star.size * 8}
            height={star.size * 8}
            viewBox="0 0 24 24"
            fill={star.color}
            className="opacity-60"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default function VerlobungsParty() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <AnimatedStars />

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="mb-6">
            <Sparkle className="text-[#C4A962] mr-2" />
            <Sparkle className="text-[#C4A962]" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl mb-4 text-[#B8697D] leading-tight">
            Verlobungs
            <span className="block text-6xl md:text-8xl italic text-[#C4A962] font-light my-2">Party</span>
          </h1>

          <div className="text-2xl md:text-3xl text-[#6B3E4E] font-semibold mb-2">Madeleine & Christopher</div>

          <div className="mb-6">
            <Sparkle className="text-[#C4A962] mr-2" />
            <Sparkle className="text-[#C4A962]" />
          </div>

          <div className="text-lg md:text-xl text-[#6B3E4E]/80 max-w-2xl mx-auto leading-relaxed">
            Wer uns etwas mitbringen möchte kann gerne etwas zu Essen für das gemischte Buffet mitbringen.
          </div>
        </header>

        {/* Food Ideas Section */}
        <section className="mb-12">
          <Card className="p-6 md:p-8 bg-white/80 backdrop-blur-sm border-2 border-[#B8697D]/20 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#6B3E4E] mb-6 text-center">Ideen für Speisen</h2>

            <ul className="space-y-3">
              {FOOD_IDEAS.map((food, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-[#6B3E4E]/90 p-3 rounded-lg hover:bg-[#F5E6ED]/50 transition-colors"
                >
                  <span className="text-[#C4A962] text-xl flex-shrink-0 mt-0.5">✦</span>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Confirmed Food Section */}
        <section>
          <Card className="p-6 md:p-8 bg-white/80 backdrop-blur-sm border-2 border-[#C4A962]/30 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#6B3E4E] mb-6 text-center">
              Bereits geplante Speisen
            </h2>

            {CONFIRMED_FOOD.length > 0 ? (
              <ul className="space-y-3">
                {CONFIRMED_FOOD.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-lg text-[#6B3E4E]/90 p-3 rounded-lg hover:bg-[#F5E6ED]/50 transition-colors border-l-4 border-[#C4A962]"
                  >
                    <span className="text-[#C4A962] text-xl flex-shrink-0 mt-0.5">✦</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-[#6B3E4E]/60 italic">Noch keine bestätigten Speisen</p>
            )}
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-[#6B3E4E]/70">
          <p className="text-lg">Wir freuen uns auf euch!</p>
          <div className="mt-4">
            <Sparkle className="text-[#C4A962] mr-1" />
            <span className="text-2xl">💍</span>
            <Sparkle className="text-[#C4A962] ml-1" />
          </div>
        </footer>
      </div>
    </main>
  )
}
