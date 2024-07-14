

const Portfolio = ({ sectionData, reverse = false }) => {
    let aosDelay = 100
    return (
        <div id={sectionData.route} className="mb-[50px]">
            <div className='container m-auto p-2 md:py-[80px]'>
                <div className={`${reverse ? 'flex flex-col lg:flex-row-reverse justify-between gap-10 items-center' : 'flex flex-col lg:flex-row justify-between gap-10 items-center'}`}>
                    <div className=' md:w-[500px] h-full relative'><img data-aos="zoom-in" width={'100%'} src={sectionData?.img} alt={sectionData.descr} /></div>
                    <div className='md:w-[492px]'>
                        <img data-aos="fade-up" data-aos-delay={aosDelay += 100} className='mb-[30px]' src={sectionData?.title_icon} alt={sectionData?.descr} />
                        <div data-aos="fade-up" data-aos-delay={aosDelay += 100} className='flex'>
                            <div className={`${sectionData?.option.bgColor} ${sectionData?.option.color} py-[4px] px-[16px] flex items-center rounded-full`}>
                                <div className='mr-[8px]'><img src={sectionData?.option.icon} alt={sectionData?.option.title} /></div>
                                <p>{sectionData?.option.title}</p>
                            </div>
                        </div>
                        <p data-aos="fade-up" data-aos-delay={aosDelay += 100} className='text-[16px] md:text-[24px] leading=[30px] md:w-[492px] md:leading=[40px] mt-[16px] mb-[16px] text-dark'>{sectionData.descr}</p>
                        <h3 data-aos="fade-up" data-aos-delay={aosDelay += 100} className='font-[600] text-[32px]'>{sectionData?.question}</h3>
                        <div className='flex gap-4 flex-wrap justify-evenly sm:justify-between my-[40px]'>
                            {sectionData?.data?.map(itm => (
                                <div key={itm?.id} data-aos="fade-up" data-aos-delay={aosDelay += 100} className='w-[150px] p-[12px] rounded-lg  bg-bgDark'>
                                    <img src={itm?.icon} alt={itm?.title} />
                                    <p className='font-monrope font-[600] text-[18px]'>{itm?.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio