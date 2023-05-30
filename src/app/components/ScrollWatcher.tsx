'use client'

import { useEffect } from "react"
import { throttle } from "lodash"

export default function ScrollWatcher() {
  const setBgGradient = () => {
    const percentage = (window.innerHeight + Math.round(window.scrollY)) / document.body.offsetHeight
    document.documentElement.style.setProperty('--scrollbar-gradient', `
      linear-gradient(
        to bottom,
        white 50%,
        rgba(${255 * percentage}, ${255 - 255 * percentage}, 0)
      )
    `);
  }

  useEffect(() => {
    // Initial work on load
    setBgGradient()
    // Listener for adjustments
    const onScroll = () => {
      setBgGradient();
    }

    window.addEventListener('scroll', throttle(onScroll, 100))

    return () => {
        window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}