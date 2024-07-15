// import React from 'react'

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import Logo from "/assets/logo"

const Footer = () => {
    return (
        <div className='bg-secondary'>
            <div className='container m-auto px-2'>
                <a href="#" className="w-full flex justify-center">
                    <Logo wSize={96} hSize={56} />
                </a>
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="flex flex-col mb-[25px]">
                        <p className="font-[500] mb-4">About us</p>
                        <a className="mb-2 hover:underline text-primary" href="#Direction">Direction</a>
                        <a className="mb-2 hover:underline text-primary" href="#Command">Command</a>
                        <a className="mb-2 hover:underline text-primary" href="#Tools">Tools</a>
                        <a className="mb-2 hover:underline text-primary" href="#Clients">Clients</a>
                    </div>

                    <div className="flex flex-col mb-[25px]">
                        <p className="mb-4 font-[500]">Services</p>
                        <a className="mb-2 hover:underline text-primary" href="#Services">Development of mobile applications</a>
                        <a className="mb-2 hover:underline text-primary" href="#erp">Development and implementation ERP systems</a>
                        <a className="mb-2 hover:underline text-primary" href="#design">User interface, User experience design</a>
                        <a className="mb-2 hover:underline text-primary" href="#Optimization">Optimization</a>
                        <a className="mb-2 hover:underline text-primary" href="#consulting">IT consulting</a>
                    </div>

                    <div className="flex flex-col">
                        <p className="mb-4 font-[500]">Portfolio</p>
                        <a className="mb-2 hover:underline text-primary" href="#delever">Delever</a>
                        <a className="mb-2 hover:underline text-primary" href="#smsuz">smsuz</a>
                        <a className="mb-2 hover:underline text-primary" href="#goodzone">Goodzone</a>
                        <a className="mb-2 hover:underline text-primary" href="#iman">Iman</a>
                    </div>
                </div>
                <div className="hidden sm:block w-full h-[1px] bg-primary" />
                <div className="flex flex-col-reverse sm:flex-row items-center gap-5 justify-between  py-4">
                    <p className="text-primary">© 2024 Udevs. All rights reserved</p>
                    <div className="flex gap-4">
                        <a className='w-[40px] h-[40px] bg-bgDark rounded-full flex justify-center items-center'><FaInstagram size={20} className='text-primary' /></a>
                        <a className='w-[40px] h-[40px] bg-bgDark rounded-full flex justify-center items-center'><FaTwitter size={20} className='text-primary' /></a>
                        <a className='w-[40px] h-[40px] bg-bgDark rounded-full flex justify-center items-center'><FaYoutube size={20} className='text-primary' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer