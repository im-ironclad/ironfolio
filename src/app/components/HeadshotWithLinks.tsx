import Image from 'next/image'

export default function HeadshotWithLinks() {
  return (
    <div className='order-1 relative min-w-[150px] mr-auto | lg:order-2'>
      <button
        className='absolute top-1/2 -right-7 -translate-y-1/2 bg-green-700 rounded-full flex items-center justify-center h-14 w-14 text-2xl font-bold text-white shadow-md shadow-[#161a28]'
      >+</button>

      <Image
        src={`/union-headshot.jpeg`}
        width={200}
        height={200}
        alt='Headshot of Adam Wells'
        className='block object-cover rounded-full'
      />
    </div>
  )
}