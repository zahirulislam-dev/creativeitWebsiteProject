import React, { useEffect, useRef, useState } from 'react'
import LogoFour from '../../assets/images/LogoFour.png'
import { FaBars } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { Link, NavLink } from 'react-router-dom'
import Flex from '../Layouts/Flex'
import Container from '../Layouts/Container'

const Navbar = () => {

    const serviceRef = useRef(null);
    const productRef = useRef(null);
    const languageRef = useRef(null);

    const [serviceShow, setServiceShow] = useState(false);
    const [productShow, setProductShow] = useState(false);
    const [languageShow, setLanguageShow] = useState(false);

    useEffect(() => {
        const handleClick = (e) => {
            if (serviceRef.current && serviceRef.current.contains(e.target)) {
                setServiceShow((prev) => !prev); // Toggle on click inside
            } else {
                setServiceShow(false); // Close on click outside
            }

            if (productRef.current && productRef.current.contains(e.target)) {
                setProductShow((prev) => !prev); // Toggle on click inside
            } else {
                setProductShow(false); // Close on click outside
            }

            if (languageRef.current && languageRef.current.contains(e.target)) {
                setLanguageShow((prev) => !prev); // Toggle on click inside
            } else {
                setLanguageShow(false); // Close on click outside
            }
        };

        document.body.addEventListener('click', handleClick);

        // Cleanup event listener on component unmount
        return () => document.body.removeEventListener('click', handleClick);
    }, []);

    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className='bg-white py-[15px] fixed top-[58px] sm:top-[41px] w-full shadow z-[9999]'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='w-[20%]'>
                        <Link to='/'>
                            <img src={LogoFour} alt="" />
                        </Link>
                    </div>
                    <div className='flex justify-end'>
                        <div onClick={handleClick} className='block md:hidden'>
                            {
                                show == true ? <div className='bg-[#4364F7] p-[8px] rounded'><RxCross2 className="text-white text-2xl" /></div> : <div className='bg-[#4364F7] p-[8px] rounded'><FaBars className="text-white text-2xl" /></div>
                            }
                        </div>
                        <div className='w-[80%]'>
                            <div className={`md:flex justify-end items-center xl:gap-x-[25px] md:gap-x-[8px] md:static w-full absolute top-[-200px] left-0 px-4 md:px-0 z-[999] ${show == true ? 'top-[70px] bg-white w-full py-[20px] md:bg-primary md:py-0' : 'top-[-485px] bg-white py-[20px] md:bg-white md:py-0'}`}>
                                <NavLink to='/' className={({ isActive }) => isActive ? "border-b-2 border-four py-[2px]" : ""}>
                                    <div className='flex items-center mb-[10px] md:mb-0 cursor-pointer'>
                                        <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Home</p>
                                    </div>
                                </NavLink>
                                <NavLink to='/aboutcreativeit' className={({ isActive }) => isActive ? "border-b-2 border-four py-[2px]" : ""}>
                                    <div className='mb-[10px] md:mb-0 cursor-pointer'>
                                        <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>About</p>
                                    </div>
                                </NavLink>
                                <div>
                                    <div ref={serviceRef} className='mb-[10px] md:mb-0 cursor-pointer'>
                                        <Flex>
                                            <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Services</p>
                                            <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                        </Flex>
                                        {serviceShow &&
                                            <ul className='px-[8px] py-[20px] absolute mt-[10px] w-[280px] sm:w-[320px] bg-gray-100 shadow rounded-[8px] z-[9999]'>
                                                <Link to='/softwaredevelopmentdetails'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Software Development</li></Link>
                                                <Link to='/webdesigndevelopmentdetails'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Web Design & Development</li></Link>
                                                <Link to='/webappdevelopmentdetails'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Web App Development</li></Link>
                                                <Link to='/mobileappdevelopmentdetails'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Mobile App Development</li></Link>
                                                <Link to='/domainregistrationdetails'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Domain Registration</li></Link>
                                                <Link to='/premiumhostingdetails'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Premium Web Hosting</li></Link>
                                                <Link to='/bulksmsdetails'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Bulk SMS</li></Link>
                                            </ul>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div ref={productRef} className='mb-[10px] md:mb-0 cursor-pointer'>
                                        <Flex>
                                            <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Products</p>
                                            <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                        </Flex>
                                        {productShow &&
                                            <ul className='px-[8px] py-[20px] absolute mt-[10px] w-[280px] sm:w-[300px] bg-gray-100 shadow rounded-[8px] z-[9999]'>
                                                <Link to='/explorereadyproducts'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Ready POS Software</li></Link>
                                                <Link to='/websitepackagedetails'><li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Website Package</li></Link>
                                            </ul>
                                        }
                                    </div>
                                </div>

                                < NavLink to='/contactdetails' className={({ isActive }) => isActive ? "border-b-2 border-four py-[2px]" : ""}>
                                    <div className='mb-[10px] md:mb-0 cursor-pointer'>
                                        <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Contact</p>
                                    </div>
                                </NavLink >
                                <div>
                                    <div ref={languageRef} className='cursor-pointer'>
                                        <Flex>
                                            <p className='font-pops text-[16px] xl:text-[18px] font-semibold text-[#4364F7]'>Language</p>
                                            <MdKeyboardArrowDown className='text-[#4364F7] text-[25px] lg:ml-[5px]' />
                                        </Flex>
                                        {languageShow &&
                                            <ul className='px-[8px] py-[20px] absolute mt-[10px] w-[280px] sm:w-[280px] bg-gray-100 shadow rounded-[8px] z-[9999]'>
                                                <li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>English</li>
                                                <li className='font-pops font-semibold text-overlay text-[16px] xl:text-[18px] hover:bg-white hover:text-primary py-[8px] px-[15px] rounded'>Bangla</li>
                                            </ul>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar