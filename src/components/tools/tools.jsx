import { useState } from 'react'
import { sTyle } from '../../utils/utils'
import { _tools } from '../../utils/constants'

const Tools = () => {
    const [active, setActive] = useState({ id: 0, type: "" })
    let aosDelay = 0

    let anyFoo = (active, item) => {
        if (active.type == item.type) {
            return item.bgColor
        } else if (active.id == 0) {
            return item.bgColor
        } else {
            return " opacity-35"
        }
    }

    return (
        <div id="Tools" className="bg-secondary">
            <div className='container m-auto p-2'>
                <h1 data-aos="fade-up" className={sTyle.title}>Tools</h1>
                <div className='grid md:flex grid-cols-2 md:grid-cols-7 mb-[48px] gap-3 md:gap-0 '>
                    {_tools.radio.map(item => (
                        <div data-aos="fade-up" data-aos-delay={aosDelay += 50} key={item.id} className='flex select-none items-center md:mr-4'>
                            <div onClick={() => setActive(active.id == item.id ? { id: 0, type: "" } : { id: item.id, type: item.type })} id={item.name} className='w-[18px] h-[18px] rounded-full border-2 border-primary p-[2px] mr-2'>
                                <div className={`${active.id == item.id ? "block" : "hidden"} w-full h-full bg-primary rounded-full`}></div>
                            </div>
                            <p onClick={() => setActive(active.id == item.id ? { id: 0, type: "" } : { id: item.id, type: item.type })} className='tracking-[0.00938em] text-[14px] font-monrope font-[700]' >{item.name}</p>
                        </div>
                    ))}
                </div>

                <div data-aos="fade-up" data-aos-delay={aosDelay - 300} className='grid grid-cols-5 sm:grid-cols-7 md:grid-cols-5 lg:grid-cols-12 gap-2 md:gap-4 mb-[30px] lg:mb-[100px]'>
                    {_tools.data.map(item => (
                        <div className={`${anyFoo(active, item)} h-[40px] lg:h-[90px] flex flex-col items-center justify-center overflow-hidden rounded-[5px] duration-300`} key={item.id}>
                            <img className='scale-[0.5] lg:scale-100' src={item.iconPath} alt={item.title} />
                            <span className='whitespace-nowrap text-[9px] lg:text-[11px] lg:leading-[13px] text-black lg:mt-[15px] w-full max-w-[90px] text-ellipsis text-center'>{item.title}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Tools