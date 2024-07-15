import { TextField } from "@mui/material"
import { style } from "../../utils/utils"
import { FaTelegramPlane } from "react-icons/fa";



const ContactUs = () => {

    return (
        <div id="Contact" className="container m-auto px-2 pt-[50px]">
            <h1 data-aos="fade-up" className='text-primary text-[32px] lg:text-[64px] font-[600] mb-[43px]'>Contact us</h1>
            <div data-aos='fade-up' data-aos-delay='100' className="mb-[26px] flex flex-col lg:flex-row items-center md:justify-between contact_us gap-2">

                <div className="md:w-[425px]">
                    <h3 className='font-[600] text-[32px] md:text-[20px] mb-[20px]'>Leave us a message</h3>
                    <div className="mb-[25px]">
                        <TextField className="w-full" id="outlined-basic" label="Name" variant="outlined" />
                    </div>
                    <div className="mb-[25px]">
                        <TextField className="w-full" id="outlined-basic" label="Name" variant="outlined" />
                    </div>
                    <div className="mb-[25px]">
                        <TextField
                            className="w-full"
                            id="outlined-multiline-static"
                            label="Briefly describe your project"
                            multiline
                            rows={4}
                        />
                    </div>
                    <div
                        className={`${style.buttonStyle} w-[248px] h-[50px] mt-[10px] flex items-center justify-center text-[20px] leading-[30px] m-auto mb-[26px]`}>
                        Send
                    </div>
                </div>

                <div>
                    <a target="_blank" href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor" className="flex">
                        <span className="mr-2 mb-5">
                            <img src="/assets/contact/map.svg" alt="img" />
                        </span>
                        <p>Ташкент,  Мирзо-Улугбекский район, 5-й пр. Курган, 32  адрес</p>
                    </a>
                    <a href="tel:+998336600999" className="flex">
                        <span className="mr-2 mb-5">
                            <img src="/assets/contact/tel.svg" alt="img" />
                        </span>
                        <p>+998 33 66 00 999</p>
                    </a>
                    <a target="_blank" href="mailto:azizbek.b@udevs.io" className="flex">
                        <span className="mr-2 mb-5">
                            <img src="/assets/contact/email.svg" alt="img" />
                        </span>
                        <p>azizbek.b@udevs.io</p>
                    </a>
                    <a target="_blank" href="https://t.me/azizbekbakhodirov" className="flex text-[#1B5BF7] font-[700]">
                        <span className="mr-2 mb-5">
                            <FaTelegramPlane size={24} />
                        </span>
                        <p> t.me/azizbekbakhodirov</p>
                    </a>
                    <div className="relative overflow-hidden">
                        <a href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" className="text-[#eee] text-[12px] absolute top-0">Tashkent</a>
                        <a href="https://yandex.com/maps/10335/tashkent/?from=mapframe&ll=69.300851%2C41.334453&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_medium=mapframe&utm_source=maps&z=15"
                            className="text=[#eee] text-[12px] absolute top-[14px]">Yandex&nbsp;Maps: search for places, transport, and routes</a>
                        <iframe
                            src="https://yandex.com/map-widget/v1/?from=mapframe&ll=69.300851%2C41.334453&mode=usermaps&source=mapframe&um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&utm_source=mapframe&z=15"
                            // allowFullScreen={true}
                            className="relative w-[325px] h-[133px] sm:w-[425px] sm:h-[233px]" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactUs