import React from 'react'
import { company_logos } from '../assets/assets'

const Trustedby = () => {
  return (
    <div>
      <h3 className='text-center text-gray-500 dark:text-white/70'>
        Trusted by leading Companies
      </h3>

      <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Company Logo"
            className='max-h-5 sm:max-h-6 dark:drop-shadow-xl'
          />
        ))}
      </div>
    </div>
  )
}

export default Trustedby