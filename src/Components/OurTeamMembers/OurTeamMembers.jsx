import React from 'react'
import softwareDev from '../../assets/images/softwareDev.jpg'
import zahir from '../../assets/images/zahir.jpg'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const OurTeamMembers = () => {
    return (
        <div className='bg-[#F5F7FA] py-[50px] xl:py-[100px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <p className='font-pops font-bold text-[25px] xl:text-[45px] text-[#1C1E53] text-center mb-[20px]'>Our Team Members</p>
                <p className='font-pops font-medium text-[20px] text-overlay text-center mb-[30px] xl:mb-[50px]'>Our Team Member are working hard to get positive result.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>
                    <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={zahir} alt="" className='w-[200px] h-[200px] rounded-full ml-[45px] md:ml-[54px] lg:ml-[32px] xl:ml-[60px] mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>Md. Zahirul Islam</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>Founder & Software Developer</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                            <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={softwareDev} alt="" className='w-[200px] h-[200px] rounded-full ml-[45px] md:ml-[54px] lg:ml-[32px] xl:ml-[60px] mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>Abdullah Al Mamun</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>Senior Software Developer</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                            <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={softwareDev} alt="" className='w-[200px] h-[200px] rounded-full ml-[45px] md:ml-[54px] lg:ml-[32px] xl:ml-[60px] mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>Shohel Rana Baig</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>Senior Software Engineer</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                            <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={softwareDev} alt="" className='w-[200px] h-[200px] rounded-full ml-[45px] md:ml-[54px] lg:ml-[32px] xl:ml-[60px] mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>Md. Syed Shakil</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>Web Developer</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                            <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={softwareDev} alt="" className='w-[200px] h-[200px] rounded-full ml-[45px] md:ml-[54px] lg:ml-[32px] xl:ml-[60px] mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>Md. Imam Hossain</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>Web App Developer</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                            <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={softwareDev} alt="" className='w-[200px] h-[200px] rounded-full ml-[45px] md:ml-[54px] lg:ml-[32px] xl:ml-[60px] mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>Md. Jion Mahmudul</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>Web Designer</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                            <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={softwareDev} alt="" className='w-[200px] h-[200px] rounded-full ml-[45px] md:ml-[54px] lg:ml-[32px] xl:ml-[60px] mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>Md. Jalal Uddin</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>Customer Support Manager</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                            <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#fff] px-[20px] py-[30px] shadow rounded'>
                        <div className=''>
                            <img src={softwareDev} alt="" className='w-[200px] h-[200px] rounded-full ml-[45px] md:ml-[54px] lg:ml-[32px] xl:ml-[60px] mb-[10px]' />
                            <p className='font-pops font-medium text-[20px] md:text-[25px] text-[#1C1E53] text-center mb-[10px]'>Md. Alamgir Hossain</p>
                            <p className='font-pops font-regular text-[16px] text-overlay text-center mb-[30px]'>Customer Support Manager</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <FaFacebookF className='text-[20px] text-white' />
                            </div>
                            <div className='mr-[30px] bg-[#282828] rounded-full p-[10px]'>
                            <BsTwitter className='text-[20px] text-white' />
                            </div>
                            <div className='bg-[#282828] rounded-full p-[10px]'>
                            <FaLinkedinIn className='text-[20px] text-white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeamMembers