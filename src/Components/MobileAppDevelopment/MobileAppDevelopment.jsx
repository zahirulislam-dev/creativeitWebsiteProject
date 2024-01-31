import React from 'react'
import MobileAppDev from '../../assets/images/MobileAppDev.jpg'
import { MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const MobileAppDevelopment = () => {
  return (
    <div className='bg-white pt-[235px] pb-[100px]'>
      <div className='max-w-container mx-auto'>
        <p className='font-pops font-bold text-[36px] text-[#1C1E53] mb-[30px]'>Web App Development Details</p>
        <div className='flex justify-between items-center'>
          <div className='border-b-2'>
            <div className=''>
              <p className='font-pops font-medium text-[18px] text-overlay mb-[30px] w-[990px] leading-9'>We are including web application development services since 2013. The web application is now a day’s becoming more popular and its make your work so smarter evens no matter where you are. It can make your business or office works easier as you want; we ensure you provide better qualities’ and reliability at web application development. We use world popular web application developing formworks Which is reliable for security and strong programming structure. Always we give the priority to our clients that’s why we using multi-languages like English, Bangla or any other languages what you need for the frontend.</p>
            </div>
            <div className='flex items-center mb-[30px]'>
              <div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Robust</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Comparable</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Quality</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Reasonable Development Cost</p>
                </div>
              </div>
              <div className='ml-[300px]'>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Reliable</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Customized</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>User Friendly</p>
                </div>
                <div className='flex items-center'>
                  <MdCheckCircle />
                  <p className='font-pops font-medium text-[18px] text-overlay ml-[10px]'>Best Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#F5F7FA] p-[30px] rounded-[20px] ml-[100px]'>
            <img src={MobileAppDev} alt="" />
          </div>
        </div>
        <div className='mt-[30px]'>
          <Link to='/ExploreReadyProducts'><button className='font-pops text-[20px] font-semibold text-white border-none px-[42px] py-[14px] bg-primary hover:bg-[#5F35F5] rounded transition duration-300 ease-in-out'>View Our Ready Products</button></Link>
        </div>
      </div>
    </div>
  )
}

export default MobileAppDevelopment