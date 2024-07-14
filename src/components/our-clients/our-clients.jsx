// import React from "react";
import Marquee from "react-fast-marquee";

const OurClients = () => {
    return (
        <div id="Clients" className="pt-[30px]">
            <div className="container m-auto">
                <h1 data-aos="fade-up" className='max-w-[270px] md:max-w-[800px] text-[32px] md:text-[64px] leading-[40px] md:leading-[64px]  font-[600] text-primary mt-3 mb-[22px] md:my-[80px]'>Our clients</h1>
            </div>
            <Marquee speed={15} className="mb-10 py-[15px]">
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/akfaMedline.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/cspace.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/Delever.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/fonon.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/hamkorbank.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/hoshimov.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/iman.svg" alt="img" /></div>
            </Marquee>
            <Marquee speed={15} direction="right" className="mb-10 py-[20px]">
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/maxtrack.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/shefBurger.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/myTaxi.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/workly.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/rabota.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/gz.svg" alt="img" /></div>
                <div className="mx-5 w-[130px] lg:w-[214px]"><img className="rounded-[30px] w-full hover:scale-[1.1] duration-700" src="/src/assets/our-clients/samsung.svg" alt="img" /></div>
            </Marquee>
        </div>
    )
}

export default OurClients