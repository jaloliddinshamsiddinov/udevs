import { uxUi, uxUiTechnologies } from "../../utils/constants"

const UxUi = () => {
    let aosDelay = 0
    return (
        <div id='design' className='container m-auto p-2 pt-[72px]'>
            <h1 data-aos="fade-up" className='max-w-[270px] md:max-w-[800px] text-[32px] md:text-[64px] leading-[40px] md:leading-[64px]  font-[600] text-primary mt-3 mb-[22px] '>UI / UX design</h1>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>
                <div className='md:w-[492px]'>
                    <p data-aos="fade-up" data-aos-delay={aosDelay += 100} className='text-[16px] md:text-[24px] leading=[30px] md:w-[492px] md:leading=[40px] mt-[16px] mb-[16px] text-dark'>Our company takes a human-centered approach to design</p>
                    <div className='flex gap-4 flex-wrap justify-evenly sm:justify-between my-[40px]'>
                        {uxUi.map(item => (
                            <div key={item.title} data-aos="fade-up" data-aos-delay={aosDelay += 100} className='w-[150px] p-[12px] rounded-lg  bg-secondary'>
                                <div>{item.icon()}</div>
                                <p className='font-monrope font-[600] text-[18px]'>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <h2 data-aos="fade-up" data-aos-delay={aosDelay += 100} className='text-[32px] leading-[40px] font-[600] text-lightDark mb-[32px]'>Technologies</h2>
                    <div className='flex gap-4 flex-wrap justify-evenly sm:justify-start mb-[24px]'>
                        {uxUiTechnologies.map(item => (
                            <div key={item.name} data-aos="fade-up" data-aos-delay={aosDelay += 100} className='text-center sm:ml-3'>
                                <div>{item.icon(38, 55)}</div>
                                <h3 className='text-[20px] font-[600] text-black'>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=' md:w-[500px] h-full relative'>
                    <div className='w-full'>
                        <img width={'100%'} height={'100%'} src="/assets/bg-phone.png" alt="bg" />
                    </div>
                    <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[100%]'>
                        <img data-aos="zoom-in" width={'100%'} src="/assets/mobile-dev.png" alt="phones" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UxUi