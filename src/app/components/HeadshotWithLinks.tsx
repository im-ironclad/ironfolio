'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HeadshotWithLinks({ containerClasses = '' }) {
  // State
  const [active, setActive] = useState(false);

  // Vars
  const dynamicClasses = {
    button: active
      ? 'bg-red-700 shadow-sm translate-y-[calc(-50%+4px)]'
      : 'bg-green-700 shadow-md -translate-y-1/2',
    linkList: active
      ? 'translate-x-[7rem]'
      : ''
  }
  const externalLinks = [
    
    {
      classes: active
        ? 'delay-300 -translate-y-[25%]'
        : 'translate-y-[150%]',
      platform: 'GitHub',
      icon: (
        <svg
          viewBox="0 0 25 25"
          className='h-6 w-6'
        >
          <path d="M23.32,6.53A12.36,12.36,0,0,0,18.77,2,12.15,12.15,0,0,0,12.5.31,12.15,12.15,0,0,0,6.23,2,12.36,12.36,0,0,0,1.68,6.53,12.15,12.15,0,0,0,0,12.81a12.11,12.11,0,0,0,2.38,7.34,12.29,12.29,0,0,0,6.16,4.52.74.74,0,0,0,.66-.11.65.65,0,0,0,.21-.49V21.74L9,21.81a4.63,4.63,0,0,1-.91.05A6.6,6.6,0,0,1,7,21.75a2.45,2.45,0,0,1-1.09-.49,2.05,2.05,0,0,1-.71-1L5,19.89a4.4,4.4,0,0,0-.51-.83,1.93,1.93,0,0,0-.71-.62l-.11-.08a1,1,0,0,1-.21-.2.91.91,0,0,1-.15-.23.13.13,0,0,1,.06-.17h0a1.09,1.09,0,0,1,.47-.08h.33a2.21,2.21,0,0,1,.8.39,2.68,2.68,0,0,1,.79.85,2.82,2.82,0,0,0,.91,1,1.92,1.92,0,0,0,1.06.35,4.18,4.18,0,0,0,.93-.08A3.2,3.2,0,0,0,9.42,20a2.69,2.69,0,0,1,.8-1.68A10.69,10.69,0,0,1,8.55,18,6.67,6.67,0,0,1,7,17.39,4.38,4.38,0,0,1,5.71,16.3a5.43,5.43,0,0,1-.85-1.7,8.1,8.1,0,0,1-.34-2.45A4.73,4.73,0,0,1,5.81,8.8a4.39,4.39,0,0,1,.11-3.32,2.26,2.26,0,0,1,1.4.22,8.39,8.39,0,0,1,1.36.63c.29.17.52.32.69.44a11.42,11.42,0,0,1,3.13-.43,11.3,11.3,0,0,1,3.12.43l.62-.39a10.34,10.34,0,0,1,1.5-.72,2.14,2.14,0,0,1,1.32-.18,4.34,4.34,0,0,1,.13,3.32,4.73,4.73,0,0,1,1.29,3.35,8.1,8.1,0,0,1-.34,2.45,5.2,5.2,0,0,1-.86,1.71A4.29,4.29,0,0,1,18,17.39a6.43,6.43,0,0,1-1.53.64,10.61,10.61,0,0,1-1.67.29,2.88,2.88,0,0,1,.85,2.31v3.44a.61.61,0,0,0,.84.6,12.21,12.21,0,0,0,6.17-4.52A12.12,12.12,0,0,0,25,12.8,12.33,12.33,0,0,0,23.32,6.53Z" fill="#00bdff"/>
        </svg>
      ),
      url: 'https://github.com/im-ironclad'
    },
    {
      classes: active
        ? 'delay-300 -translate-y-[7.5%]'
        : 'translate-y-[50%]',
      platform: 'Resume',
      icon: (
        <svg
          viewBox="0 0 19 25"
          className='h-6 w-6'
        >
          <path d="M0,0V25H14.28l4.47-4.47V0ZM2.08,2.08H7.29V7.29H2.08Zm1,18.76v-1H8.33v1Zm7.81-2.6H3.13v-1h7.81Zm4.69-2.62H3.13v-1h7.5Zm0-2.6H3.13V12h12.5Zm0-2.61H3.13v-1h12.5Z" fill="#00bdff"/>
        </svg>
      ),
      url: '/2023_AdamWells_Resume.pdf'
    },
    {
      classes: active
        ? 'delay-300 translate-y-[7.5%]'
        : '-translate-y-[50%]',
      platform: 'Twitter',
      icon: (
        <svg
          viewBox="0 0 26 22"
          className='h-6 w-6'
        >
          <path d="M16.29.25a5.46,5.46,0,0,0-3.67,5.47l.06.93-.94-.11A15.29,15.29,0,0,1,2.8,2.13L1.56.9l-.32.91A5.47,5.47,0,0,0,2.41,7.43c.75.8.58.91-.72.44a2.4,2.4,0,0,0-.88-.21,6.82,6.82,0,0,0,.68,2.55,6,6,0,0,0,2.57,2.43l.92.44H3.89c-1.05,0-1.09,0-1,.42a5.68,5.68,0,0,0,3.52,3.12l1.16.4-1,.61a10.65,10.65,0,0,1-5,1.4A5.54,5.54,0,0,0,0,19.19a14.31,14.31,0,0,0,3.63,1.67A15.81,15.81,0,0,0,16,19.46a16.57,16.57,0,0,0,6.26-7.37,19.56,19.56,0,0,0,1.27-5.7c0-.87.06-1,1.11-2A13.61,13.61,0,0,0,25.91,2.9c.19-.37.16-.37-.79,0-1.6.57-1.82.49-1-.36a5.55,5.55,0,0,0,1.27-2c0-.06-.28,0-.6.2a10.51,10.51,0,0,1-1.65.65l-1,.32L21.17,1A7.42,7.42,0,0,0,19.58.18,6.42,6.42,0,0,0,16.29.25Z" fill="#00bdff"/>
        </svg>
      ),
      url: 'https://twitter.com/imironclad'
    },
    {
      classes: active
        ? 'delay-300 translate-y-[25%]'
        : '-translate-y-[150%]',
      platform: 'LinkedIn',
      icon: (
        <svg
          viewBox="0 0 22 20"
          className='h-6 w-6'
        >
          <path d="M.55,6.41H4.84V20H.55Zm2-1.7h0A2.37,2.37,0,0,1,0,2.36,2.4,2.4,0,0,1,2.62,0,2.39,2.39,0,0,1,5.21,2.36,2.39,2.39,0,0,1,2.59,4.71ZM22,20H17.14V13c0-1.84-.76-3.1-2.44-3.1a2.46,2.46,0,0,0-2.32,1.67,3.19,3.19,0,0,0-.1,1.11V20H7.46s.06-12.45,0-13.59h4.82V8.55c.28-.94,1.82-2.27,4.28-2.27,3.05,0,5.44,2,5.44,6.17V20Z" fill="#00bdff" fillRule="evenodd"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/adamironcladwells/'
    },
  ]

  return (
    <div className={`relative min-w-[150px] mr-auto ${containerClasses}`}>
      <button
        onClick={() => setActive(!active)}
        className={`${dynamicClasses.button} z-[2] absolute top-1/2 -right-7 rounded-full flex items-center justify-center h-14 w-14 text-2xl font-bold text-white shadow-[#161a28] transition-[transform] duration-200 focus:outline-none focus:border-2 focus:border-white`}
      >{active ? '-' : '+'}</button>

      <Image
        src={`/union-headshot.jpeg`}
        width={200}
        height={200}
        alt='Headshot of Adam Wells'
        className='block object-cover rounded-full relative z-[1] bg-[#040816]'
      />

      <ul className={`${dynamicClasses.linkList} absolute right-0 top-1/2 -translate-y-1/2 z-[0] | transition-all duration-500 linear`}>
        {externalLinks.map(external => (
          <li
            key={external.platform}
            className={`${external.classes} transition-all duration-300`}
          >
            <a
              href={external.url}
              target="_blank"
              rel='noreferrer'
              title={external.platform}
              tabIndex={active ? 0 : -1}
              className='flex items-center justify-center w-10 h-10 rounded-full bg-[#1ebff910]'
            >
              {external.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}