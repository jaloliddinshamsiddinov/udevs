import { useState } from 'react'
import { Logo } from '/assets'
import { style } from '../../utils/utils'
import { navigationLinks } from '../../utils/constants'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { HiBars3 } from 'react-icons/hi2'
import { IoCloseSharp } from 'react-icons/io5'
import * as reactIcons from 'react-icons/fa'

const Nav = () => {
  const [active, setactive] = useState(1)
  const [isOpen, setisOpen] = useState(false)

  return (
    <div className='sticky top-0 bg-white z-10'>
      <div data-aos='fade-down' data-aos-once='true' className='border-b-[1px] shadow-sm'>
        <div className='container m-auto h-[72px] flex items-center'>
          <nav className='flex items-center justify-between w-full font-monrope px-2 sm:px-0 '>

            <a href='#'><Logo wSize={96} hSize={56} /></a>

            <div className='hidden md:flex items-center justify-between gap-2  '>
              <ul className='flex items-center justify-between md:w-[654px] lg:w-[784px] font-[500]'>

                {navigationLinks.map(nav => (
                  <li
                    key={nav.id}
                    onClick={() => setactive(prev => nav.route ? nav.id : prev)}
                    className={`${active == nav.id ? 'border-primary' : "border-transparent"} navDropdown relative border-b-2 py-2 hover:border-primary duration-300`}>
                    {!nav.option ?
                      (<a className='font-[600]' href={nav.route}>{nav.title}</a>) :
                      (<a className='flex items-center font-[600]' href={!nav.route ? null : nav.route} >{nav.title}<MdOutlineKeyboardArrowDown /></a>)
                    }

                    {nav.option ?
                      (<ul className='hidden duration-700 absolute top-[35px] -left-[100%] py-[18px] border-[1px] min-w-[300px] rounded-[8px] shadow-lg bg-white text-[13px]'>
                        <p className='pl-[24px] mb-[20px] text-gray-400'>{nav.title}</p>

                        {nav.dropDown?.map(dropLink => (

                          <a href={dropLink.route} key={dropLink.title}>
                            <li className='flex items-center hover:bg-primary hover:text-white text-black mb-1 py-[8px] pl-[34px] pr-[11px] font-[400]'>
                              <div className='mr-[24px]'>{dropLink.img()}</div>
                              <p>{dropLink.title}</p>
                            </li>
                          </a>

                        ))}

                      </ul>)
                      : null}
                  </li>
                ))}

                <a href='#Contact' className={`${style.buttonStyle} border-b-2 border-transparent`}>Contact</a>
              </ul>
            </div>


            <div onClick={() => setisOpen(prev => !prev)} className='block md:hidden'>
              <HiBars3 size={30} className='text-primary' />
            </div>



          </nav>
        </div>
      </div>
      <div className={`${isOpen ? "fixed translate-x-[0%]" : "fixed translate-x-[100%]"} inset-0 bg-[#F4F7FF] px-2 duration-500 z-[9999999999]`}>
        <div className='w-full h-full flex flex-col justify-between container m-auto'>
          <div className='flex justify-between items-center h-[72px]'>
            <a onClick={() => setisOpen(prev => !prev)} href='#'><Logo wSize={96} hSize={56} /></a>
            <div onClick={() => setisOpen(prev => !prev)}><IoCloseSharp size={30} className='text-primary' /></div>
          </div>

          <div className='flex flex-col text-center'>
            <a href="#Services" className='text-[32px] font-[600] text-black' onClick={() => setisOpen(prev => !prev)}>Service</a>
            <a href="#Clients" className='text-[32px] font-[600] text-black' onClick={() => setisOpen(prev => !prev)}>Clients</a>
            <a href="#Command" className='text-[32px] font-[600] text-black' onClick={() => setisOpen(prev => !prev)}>Command</a>
          </div>

          <div>
            <a onClick={() => setisOpen(prev => !prev)} href='#Contact' className={`${style.buttonStyle} flex items-center justify-center w-full h-[60px] font-bold text-[18px]`}>Contact</a>
            <div className='flex w-[200px] justify-between m-auto mt-[50px] mb-5'>
              <a href='#' className='w-[40px] h-[40px] bg-primary rounded-full flex justify-center items-center'><reactIcons.FaInstagram size={25} className='text-white' /></a>
              <a href='#' className='w-[40px] h-[40px] bg-primary rounded-full flex justify-center items-center'><reactIcons.FaTwitter size={25} className='text-white' /></a>
              <a href='#' className='w-[40px] h-[40px] bg-primary rounded-full flex justify-center items-center'><reactIcons.FaYoutube size={25} className='text-white' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav