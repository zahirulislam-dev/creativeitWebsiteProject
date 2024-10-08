import React from 'react'
import cit from "../../assets/images/cit.jpg"

const About = () => {
    return (
        <div className='bg-[#F5F7FA] pt-[160px] sm:pt-[150px] md:pt-[150px] xl:pt-[220px] pb-[50px] xl:pb-[100px]'>
            <div className='max-w-container mx-auto px-[10px] xl:px-0'>
                <p className='font-pops font-semibold text-[18px] text-overlay mb-[8px]'>TRUSTED SOFTWARE DEVELOPMENT COMPANY</p>
                <p className='font-pops font-bold text-[35px] xl:text-[50px] text-[#4CAF4F]'>ABOUT</p>
                <p className='font-pops font-bold text-[35px] xl:text-[50px] text-[#4CAF4F] mb-[15px]'>CREATIVE IT</p>
                <div className='xl:flex xl:justify-between xl:items-center'>
                    <div className='mr-0 xl:mr-[50px] leading-8'>
                        <p className='font-pops font-medium text-[16px] xl:text-[18px] text-overlay xl:w-[909px]'>We always ensure quality and develop products keeping in mind the needs of the clients. We combine the loading less latest best technology of the time and our experience. Our goal is to be the most trusted software company in the country. We work hard to achieve this. Hope to improve our customer service now. We aim to provide professional quality IT service all over Bangladesh even any part of the globe. We have been providing information technology service since 2019. Already we have been developed more than 450 websites, customized software, Android App and Web applications. Mostly we are working with business & education institutes. Life is busy we have to make it easy by using technology. If we want to develop our country we have to use technology as much as we can. So we want to contribute to our IT. Now a day’s information technology is an unavoidable part of our daily life. Life is busy we have to make it easy by using technology.</p>
                    </div>
                    <div className=''>
                        <img src={cit} alt="" className='w-full h-full mt-[20px] xl:mt-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About