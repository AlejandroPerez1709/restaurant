/* eslint-disable no-unused-vars */
import Apple from '../../assets/png/apple.png';
import Kiwi from '../../assets/png/kiwi.png';
import Leaf from '../../assets/png/leaf.png';
import Lemon from '../../assets/png/lemon.png';
import tomato from '../../assets/png/tomato.png';
import { PrimaryButton } from '../Shared/PrimaryButton';


export const Banner = () => {



    return(
        <div className='container py-14 relative'>

           <div>
             
             <h1 data-aos="fade-up" data-aos-delay="300" className='py-8 tracking-wider text-2xl capitalize font-semibold text-dark text-center'>prueba la diferencia saludable</h1>

             {/* Text Content Section */}
             <div data-aos="fade-up" data-aos-delay="700" className='space-y-10'>
                
                <div  className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div>
                        <p className=''>Sabemos que el<span className='text-primary'> tiempo</span> es el mayor valor en el mundo moderno. Nuestro servicio de entrega del plan de alimentación saludable, buena comida en Ecatepec, es la respuesta para aquellos que quieren comer sano, ahorrando tiempo en comprar y preparar alimentos saludables.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                    <div></div>
                    <div>
                        <p className=''>Los alimentos <span className='text-primary'>saludables </span> son aquellos que proporcionan nutrientes esenciales para el cuerpo humano sin agregar un exceso de calorías, grasas saturadas, azúcares refinados o sodio. Estos alimentos son fundamentales para mantener una dieta equilibrada y promover la salud y el bienestar general.</p>
                    </div>
                </div>

             </div>
             {/* Button Section */}
             <div data-aos="fade-up" data-aos-delay="800" data-aos-offset="0" className='flex justify-center mt-10 sm:mt-14'>
                <PrimaryButton/>
             </div>

           </div >
            {/* Bg fruits png */}
                <div data-aos="fade-right" data-aos-delay="800"  className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                    <img src={Leaf} alt="leaft" className='max-w-[160px]'/>
                </div>
                <div data-aos="fade-right" data-aos-delay="300" className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
                    <img src={tomato} alt="tomato" className='max-w-[280px]'/>
                </div>
                <div data-aos="fade-left" data-aos-delay="300" className='absolute top-10 right-16 sm:right-20 z-[-1] '>
                    <img src={Lemon} alt="lemon" className='max-w-[200px] opacity-50 md:opacity-100'/>
                </div>
                <div data-aos="fade-left" data-aos-delay="800" className='absolute hidden bottom-0 right-0 sm:block '>
                    <img src={Apple} alt="apple" className='max-w-[200px]'/>
                </div>
                <div data-aos="fade-top" data-aos-delay="1000" className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100 z-[-1] '>
                    <img src={Kiwi} alt="kiwi" className='max-w-[180px] opacity-50 md:opacity-100'/>
                </div>

        </div>
    )
}