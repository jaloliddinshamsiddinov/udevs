import { _steaps } from "../../utils/constants"


const HowWeWork = () => {
    let dotData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
    let aosDelay = 300
    return (
        <div>
            <div className="container m-auto px-2">
                <h1 data-aos="fade-up" className='text-primary text-[32px] lg:text-[64px] font-[600] mb-[43px]'>{_steaps.title}</h1>
            </div>

            <div className={`w-full px-2`}>
                <div className="relative flex flex-col lg:flex-row justify-between w-auto min-h-[550px] lg:min-h-[210px] container  mb-[25px] m-auto">
                    <div className="steaps-dot-bg absolute top-[4%] lg:top-0 bottom-[1%] lg:bottom-[60%] lg:left-[10%]  lg:right-[8%] left-[25px]  flex lg:flex-row flex-col items-center justify-between -z-10">
                        {dotData.map((item, idx) => (
                            <div key={idx} className="w-[5px] h-[5px] bg-sky-600 rounded-full" />
                        ))}
                    </div>
                    {_steaps.data.map((itm) => (
                        <div data-aos='fade-down' data-aos-delay={aosDelay += 100} key={itm.id} className={`flex lg:block items-center`}>
                            <div className="lg:w-full lg:flex lg:items-center lg:justify-center mr-[10px] sm:mr-[40px] md:mr-[60px]">
                                <div className="w-[56px] lg:w-[80px] h-[56px] lg:h-[80px]"><img className="bg-white" width='100%' height='100%' src={itm.icon} alt={itm.title} /></div>
                            </div>
                            <div className="flex flex-col lg:text-center">
                                <h3 className="text-[18px] leading-[28px] font-[600]">{itm.title}</h3>
                                <p className="text-[14px] leading-[24px] font-[400]">{itm.descr}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default HowWeWork