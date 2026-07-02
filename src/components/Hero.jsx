import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden"
    >
      {/* badge */}
      <div className="inline-flex items-center gap-6 border border-gray-300 dark:border-white/20 p-1.5 pr-4 rounded-full">
        <img
          className="w-20"
          src={assets.group_profile}
          alt="group profile"
        />
        <p className="text-xs font-medium text-gray-700 dark:text-white/80">
          Trusted by 10k+ people
        </p>
      </div>

      {/* heading */}
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl text-gray-900 dark:text-white'>
        Turning imagination into{" "} <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
          digital
        </span>{" "}
        impact.
      </h1>

      {/* paragraph */}
      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/70 max-w-2xl pb-3">
        Creating meaningful connections and turning big ideas into interactive digital experiences.
      </p>

      {/* image section */}
      <div className="relative">
        <img
          src={assets.hero_img}
          alt="hero"
          className="w-full max-w-6xl"
        />

        {/* background decoration */}
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:-top-80 sm:-right-72 -z-10 opacity-80"
        />
      </div>
    </div>
  )
}

export default Hero