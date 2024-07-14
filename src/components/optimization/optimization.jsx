import { optimization_data } from "../../utils/constants"

const Optimization = () => {
    let aosDelay = 0
    return (
        <div id="Optimization" className="bg-secondary">
            <div className='container m-auto p-2'>
                <h1 data-aos="fade-up" className='max-w-[270px] md:max-w-[800px] text-[32px] md:text-[64px] leading-[40px] md:leading-[64px]  font-[600] text-primary mt-3 mb-[22px] md:my-[80px]'>{optimization_data.title}</h1>

                <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>

                    <div className=' md:w-[500px] h-full relative'>
                        <div className='w-full'>
                            <img width={'100%'} height={'100%'} src={optimization_data.bgImg} alt={optimization_data.alt} />
                        </div>
                        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[100%]'>
                            <img data-aos="zoom-in" width={'100%'} src={optimization_data.img} alt={optimization_data.alt} />
                        </div>
                    </div>

                    <div className='md:w-[492px]'>
                        <p data-aos="fade-up" data-aos-delay={aosDelay += 100} className='text-[16px] md:text-[24px] leading=[30px] md:w-[492px] md:leading=[40px] mt-[16px] mb-[16px] text-dark'>{optimization_data.descr}</p>
                        <div className='flex gap-4 flex-wrap justify-evenly sm:justify-between my-[40px]'>
                            {optimization_data.data.map(item => (
                                <div key={item.id} data-aos="fade-up" data-aos-delay={aosDelay += 100} className='w-[150px] p-[12px] rounded-lg  bg-bgDark'>
                                    <div>{item.icon()}</div>
                                    <p className='font-monrope font-[600] text-[18px]'>{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Optimization