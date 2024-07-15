import Typewriter from 'typewriter-effect';
import { Logo } from '/assets'
import { style } from '../../utils/utils';
import { _ourServiceData } from '../../utils/constants';

const Hero = () => {
    let number = 200
    return (
        <div className='mb-[100px] mx-2'>
            <div className='container m-auto py-[102px] md:pt-[50px] md:pb-[130px] flex flex-col items-center md:flex-row md:justify-between'>
                <div className='w-[300px] h-[250px] md:h-auto sm:w-[400px] md:w-[547px] mb=[40px] md:mb-0 flex flex-col items-center md:items-start'>
                    <div data-aos="fade-up" className='mb-[18px]'>
                        <span className='hidden md:block'><Logo wSize={267} hSize={89} /></span>
                        <span className='block md:hidden'><Logo wSize={96} hSize={56} /></span>
                    </div>
                    <h1 data-aos="fade-up" data-aos-delay='100' data-aos-anchor-placement="center-center" className='mb-[10px] text-[24px] md:text-[40px] font-[600]'>IT-Outsourcing Company</h1>
                    <div data-aos="fade-up" data-aos-delay='200' className='text-primary text-[24px] md:text-[40px] font-[600]  md:leading-[54px] font-sans -z-10 mb-5'><Typewriter
                        options={{
                            strings: ['Development and implementation ERP systems', 'User interface, User experience design', 'Optimization IT Consulting infrastructure', 'IT Consulting', 'Development of mobile applications',],
                            autoStart: true,
                            loop: true,
                        }}
                    /></div>
                    <a href='#Contact'
                        data-aos="fade-up"
                        data-aos-delay="300" className={`${style.buttonStyle} w-[248px] h-[56px] mt-[10px] hidden md:flex  items-center justify-center text-[20px] leading-[30px]  `}>
                        Contact
                    </a>
                </div>
                <div>
                    <img src="https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg" alt="img" />
                </div>
            </div>

            <div id='Direction' className='container m-auto pt-[72px]'>
                <h1 data-aos="fade-up" className='text-center md:text-start text-[32px] md:text-[64px] text-primary font-[600] mb-[43px]'>Our services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                   
                    {_ourServiceData.map(item => (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={number += 100} className='p-[32px] bg-secondary rounded-md'>
                            <div className='my-2'><img className='w-[35px] h-[35px]' src={item.img} alt="img" /></div>
                            <p className='text-[16px] font-[600]'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero