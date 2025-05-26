"use client"

import { useCallback } from 'react'
import confetti from 'canvas-confetti'

export function useConfetti() {
  // Celebration confetti for RSVP success
  const celebrationConfetti = useCallback(() => {
    const duration = 3000
    const animationEnd = Date.now() + duration

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min
    }

    const runAnimation = () => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return
      }

      const particleCount = 50 * (timeLeft / duration)

      // Confetti from left side
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2
        },
        colors: ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCF7F', '#4D96FF']
      })

      // Confetti from right side
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2
        },
        colors: ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCF7F', '#4D96FF']
      })

      requestAnimationFrame(runAnimation)
    }

    runAnimation()
  }, [])

  // Welcome confetti when modal opens
  const welcomeConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DC2626', '#000000', '#22C55E'] // Red, Black, Green (Pan-African colors)
    })
  }, [])

  // Burst confetti for special moments
  const burstConfetti = useCallback(() => {
    const count = 200
    const defaults = {
      origin: { y: 0.7 }
    }

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        colors: ['#DC2626', '#000000', '#22C55E', '#FFD700'] // Red, Black, Green, Gold
      })
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    fire(0.2, {
      spread: 60,
    })

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    })

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }, [])

  return {
    celebrationConfetti,
    welcomeConfetti,
    burstConfetti
  }
}
