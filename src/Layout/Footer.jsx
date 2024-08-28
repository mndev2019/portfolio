//import React from 'react'
import logo from '../../src/assets/logo.webp'
const Footer = () => {
  return (
    <>
      <section className="lg:pt-20 md:pt-10 pt-10 pb-5 bg-[#140c1c]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 text-center">
            <div className="col-span-1">
              <div className="w-full text-center">
                <img src={logo} alt="image" className='lg:h-[70px] md:h-[70px] h-[60px] mx-auto' />
                <div className='mt-5'>
                  <p className='text-primary'>© 2024 All Rights Reserved by Muskan Ansari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer