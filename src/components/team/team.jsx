import CountUp from 'react-countup'
import { TeamGroup } from '../../assets'
import { useState } from 'react'


const Team = () => {
    const [isHidden, setisHidden] = useState(false)
    const [isScroll, setisScroll] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 740) {
            setisScroll(true)
        } else {
            setisScroll(false)
            setisHidden(false)
        }
    })
    return (
        <div id='Command' className='bg-secondary pt-[65px] pb-[32px] px-2'>
            <div className='container m-auto'>
                <h1 data-aos="fade-up" className='text-primary text-[32px] lg:text-[64px] font-[600] mb-[43px]'>Team</h1>
                <div className='flex flex-col-reverse items-center lg:flex-row lg:justify-between '>
                    <div className='max-w-[500px] text-center lg:text-start'>
                        <p data-aos="fade-up" data-aos-delay="200" className='text-[16px] font-[500] lg:leading-[40px] lg:text-[20px] text-[#464359]'>For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
                        <h1 onScroll={() => console.log(515151)} data-aos="fade-up" data-aos-delay="400" className='text-[80px] lg:text-[120px] text-primary font-[500]'>
                            {isScroll ? (
                                <CountUp
                                    end={100}
                                    duration={3}
                                    onEnd={() => setisHidden(true)} />
                            ) : null}

                            {isHidden ? "+" : ""}
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="600" className='lg:text-[40px] font-[500]'>Dedicated team</p>
                    </div>
                    <div data-aos="zoom-in" className="m-[32px] team__svg max-w-[500px] w-full">
                        <TeamGroup />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team