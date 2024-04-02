import HeroImg from '../../assets/hero.png'
import HeroBg from '../../assets/heroBg.png'
import { PrimaryButton } from '../Shared/PrimaryButton'



const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    
}

export const Hero = () => {
    return(
        <div style={BgStyle} className="relative z-[-1]">
            <div  className="container py-16 sm:-py-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                    {/* Text Content Section */}
                    <div className='space-y-7 text-dark order-2 sm:order-1'>
                        <h1 data-aos="fade-up" className='text-5xl capitalize'>Plan de Alimentación Fresco y Saludable <br /><span className='text-secondary font-cursive text-7xl '>Entrega</span> en Ecatepec</h1>
                        <p data-aos="fade-up" data-aos-delay="500" className='capitalize lg:pr-64'>deliciosas comidas entregadas a tu puerta desde $500.00 por semana</p>
                        {/* Button Section */}
                        <div data-aos="fade-up" data-aos-delay="700">
                            <PrimaryButton />
                        </div>
                    </div>
                    {/* image Section */}
                    <div data-aos="zoom-in" data-aos-delay="600" className='order-1 sm:order-2 relative z-10'>
                        <img src={HeroImg} alt="meal" className='w-full sm:scale-125 sm:translate-y-16'/>
                    </div>

                </div>
            </div>
            
        </div>
    )
}