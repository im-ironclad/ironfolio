'use client'
import { useEffect } from "react"
import { throttle } from "lodash"

export default function ScrollWatcher() {
  // Top : 0, 150, 0
  // Mid : 255, 150, 0
  // Bot : 255, 0, 0
  const gradients = [
    [0, 150, 0],
    [255, 150, 0],
    [255, 0, 0]
  ]

  // const rgbRanges = {
  //   red: [],
  //   green: [],
  //   blue: []
  // }

  useEffect(() => {
    const styleRoot = getComputedStyle(document.documentElement) as unknown as HTMLElement

    const onScroll = () => {
      const percentage = (window.innerHeight + Math.round(window.scrollY)) / document.body.offsetHeight
      // console.log('top percentage: ', gradients[0][1] * percentage)
      console.log('percentage: ', percentage)
      document.documentElement.style.setProperty('--scrollbar-gradient', `
        linear-gradient(
          to bottom,
          white 50%,
          rgba(${255 * percentage}, ${150 - 150 * percentage}, 0)
        )
      `);
    }

    window.addEventListener('scroll', throttle(onScroll, 100))

    return () => {
        window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}