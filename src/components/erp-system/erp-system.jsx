import * as assets from "assets/erp-system"

const ErpSystem = () => {
  return (
    <div id="erp" className="bg-secondary">
      <div className='container m-auto p-2'>
        <h1 data-aos="fade-up" className='max-w-[270px] md:max-w-[800px] text-[32px] md:text-[64px] leading-[40px] md:leading-[64px]  font-[600] text-primary mt-3 mb-[22px] md:my-[80px]'>ERP systems</h1>

        <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>

          <div className=' md:w-[500px] h-full relative'>
            <div className='w-full'>
              <img width={'100%'} height={'100%'} src="/assets/bg-phone.png" alt="" />
            </div>
            <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[100%]'>
              <img data-aos="zoom-in" width={'100%'} src="/assets/erp-system/desctop.png" alt="phones" />
            </div>
          </div>

          <div className='md:w-[492px]'>
            <p data-aos="fade-up" data-aos-delay="100" className='text-[16px] md:text-[24px] leading=[30px] md:w-[492px] md:leading=[40px] mt-[16px] mb-[16px] text-dark'>IT Systems of any level of complexity at a convenient time for you</p>
            <div className='flex gap-4 flex-wrap justify-evenly sm:justify-between my-[40px]'>
              <div data-aos="fade-up" data-aos-delay="200" className='w-[150px] p-[12px] rounded-lg  bg-bgDark'>
                <div>
                  <assets.CrmIcon />
                </div>
                <p className='font-monrope font-[600] text-[18px]'>IOS</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className='w-[150px] p-[12px] rounded-lg  bg-bgDark'>
                <div>
                  <assets.Learning_icon />
                </div>
                <p className='font-monrope font-[600] text-[18px]'>Android</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className='w-[150px] p-[12px] rounded-lg  bg-bgDark'>
                <div>
                  <assets.ECommersIcon />
                </div>
                <p className='font-monrope font-[600] text-[18px]'>Crossplatform</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className='w-[150px] p-[12px] rounded-lg  bg-bgDark'>
                <div>
                  <assets.PosIcon />
                </div>
                <p className='font-monrope font-[600] text-[18px]'>Crossplatform</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className='w-[150px] p-[12px] rounded-lg  bg-bgDark'>                    <div>
                <assets.SmsEmailIcon />
              </div>
                <p className='font-monrope font-[600] text-[18px]'>Crossplatform</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className='w-[150px] p-[12px] rounded-lg  bg-bgDark'>
                <div>
                  <assets.WarehouseIcon />
                </div>
                <p className='font-monrope font-[600] text-[18px]'>Crossplatform</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ErpSystem