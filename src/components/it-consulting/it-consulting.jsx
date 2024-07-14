import { itConsDta } from '../../utils/constants'

const ItConsulting = () => {
    let aosDelay = 0
    return (
        <div id='consulting' className='container m-auto p-2 pt-[72px]'>
            <h1 data-aos="fade-up" className='max-w-[270px] md:max-w-[800px] text-[32px] md:text-[64px] leading-[40px] md:leading-[64px]  font-[600] text-primary mt-3 mb-[22px] '>{itConsDta.title}</h1>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>
                <div className='md:w-[492px]'>
                    <p data-aos="fade-up" data-aos-delay={aosDelay += 100} className='text-[16px] md:text-[24px] leading=[30px] md:w-[492px] md:leading=[40px] mt-[16px] mb-[16px] text-dark'>{itConsDta.descr}</p>

                    <div className='flex gap-4 flex-wrap justify-evenly sm:justify-between my-[40px]'>
                        {itConsDta.data.map(item => (
                            <div key={item.title} data-aos="fade-up" data-aos-delay={aosDelay += 100} className='w-[150px] p-[12px] rounded-lg  bg-secondary'>
                                <div>{item.icon()}</div>
                                <p className='font-monrope font-[600] text-[18px]'>{item.title}</p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className=' md:w-[500px] h-full'>
                    <img data-aos="zoom-in" width={'100%'} src={itConsDta.img} alt="phones" />
                </div>
            </div>
        </div>)
}

export default ItConsulting