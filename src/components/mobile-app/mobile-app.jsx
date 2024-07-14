// import React from 'react'
import * as assets from '/src/assets'

const MobileApp = () => {
    return (
        <div id='Services' className='container m-auto p-2 pt-[72px]'>
            <h1 data-aos="fade-up" className='max-w-[270px] md:max-w-[800px] text-[32px] md:text-[64px] leading-[40px] md:leading-[64px]  font-[600] text-primary mt-3 mb-[22px] '>Development of mobile applications</h1>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>
                <div className='md:w-[492px]'>
                    <p data-aos="fade-up" data-aos-delay="100" className='text-[16px] md:text-[24px] leading=[30px] md:w-[492px] md:leading=[40px] mt-[16px] mb-[16px] text-dark'>In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.</p>
                    <div className='flex gap-4 flex-wrap justify-evenly sm:justify-between my-[40px]'>
                        <div data-aos="fade-up" data-aos-delay="200" className='w-[150px] p-[12px] rounded-lg  bg-secondary'>
                            <div>
                                <assets.AppleIcon />
                            </div>
                            <p className='font-monrope font-[600] text-[18px]'>IOS</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className='w-[150px] p-[12px] rounded-lg  bg-secondary'>
                            <div>
                                <assets.AndroidIcon />
                            </div>
                            <p className='font-monrope font-[600] text-[18px]'>Android</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" className='w-[150px] p-[12px] rounded-lg  bg-secondary'>
                            <div>
                                <assets.CrossIcon />
                            </div>
                            <p className='font-monrope font-[600] text-[18px]'>Crossplatform</p>
                        </div>
                    </div>
                    <h2 data-aos="fade-up" data-aos-delay="500" className='text-[32px] leading-[40px] font-[600] text-lightDark mb-[32px]'>Technologies</h2>
                    <div className='flex mb-[24px]'>
                        <div data-aos="fade-up" data-aos-delay="600" className='text-center mr-[35px]'>
                            <div><assets.SwiftIcon /></div>
                            <h3 className='text-[20px] font-[600] text-black'>Swift</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="700" className='text-center mr-[35px]'>
                            <div><assets.KotlinIcon /></div>
                            <h3 className='text-[20px] font-[600] text-black'>Kotlin</h3>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800" className='text-center'>
                            <div><assets.FlutterIcon /></div>
                            <h3 className='text-[20px] font-[600] text-black'>Flutter</h3>
                        </div>
                    </div>
                </div>

                <div className=' md:w-[500px] h-full relative'>
                    <div className='w-full'>
                        <img width={'100%'} height={'100%'} src="/src/assets/bg-phone.png" alt="bg" />
                    </div>
                    <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[100%]'>
                        <img data-aos="zoom-in" width={'100%'} src="/src/assets/mobile-dev.png" alt="phones" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileApp