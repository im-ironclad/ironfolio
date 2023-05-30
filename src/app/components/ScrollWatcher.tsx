'use client'

import { useEffect } from "react"
import { throttle } from "lodash"

export default function ScrollWatcher() {
  // Top : 0, 150, 0
  // Mid : 255, 150, 0
  // Bot : 255, 0, 0
  // console.log('window.innerHeight: ', window.innerHeight)
  // console.log('window.scrollY: ', window.scrollY)
  // console.log('document.body.offsetHeight: ', document.body.offsetHeight)
  // console.log('First Calc: ', (window.innerHeight + Math.round(window.scrollY)))

  const setBgGradient = () => {
    const percentage = (window.innerHeight + Math.round(window.scrollY)) / document.body.offsetHeight
    // console.log('percentage: ', percentage)
    document.documentElement.style.setProperty('--scrollbar-gradient', `
      linear-gradient(
        to bottom,
        white 50%,
        rgba(${255 * percentage}, ${150 - 150 * percentage}, 0)
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