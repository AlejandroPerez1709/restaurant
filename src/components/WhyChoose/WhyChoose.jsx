import {FaBus} from 'react-icons/fa'


export const WhyChoose = () => {

    return(
        <div className="py-14 md:py-28 bg-gray-50">
            <div className="container ">

                {/* Heading Section */}
                <h1 className="capitalize pb-16 tracking-wider text-2xl font-semibold text-dark text-center">¿Porque escogernos? </h1>
                
                {/* Card section */}
                <div >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">

                        <div data-aos="fade-left" data-aos-delay="400" className='flex justify-center items-center flex-col text-center px-2 gap-2'>
                            <p className='text-dark/70 font-semibold '>Preparamos alimentos sanos con ingredientes frescos </p>
                            <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
                            <FaBus className='text-5xl text-primary'/>
                        </div>

                        <div data-aos="fade-left" data-aos-delay="400" className='flex justify-center items-center flex-col-reverse text-center px-2 gap-2 '>
                            <p className='text-dark/70 font-semibold '>Nuestros ingredientes son de la mas alta calidad </p>
                            <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>...</p>
                            <FaBus className='text-5xl text-secondary'/>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="400" className='flex justify-center items-center flex-col text-center px-2 gap-2'>
                            <p className='text-dark/70 font-semibold '>Las entregas se realizan en tiempo y forma </p>
                            <p className='text-5xl rotate-90 text-primary text-center translate-x-5'>...</p>
                            <FaBus className='text-5xl text-primary'/>
                        </div>

                        <div data-aos="fade-right" data-aos-delay="400" className='flex justify-center items-center flex-col-reverse text-center px-2 gap-2'>
                            <p className='text-dark/70 font-semibold '>Nuestros precios son los mas competitivos de la zona </p>
                            <p className='text-5xl rotate-90 text-secondary text-center translate-x-5'>...</p>
                            <FaBus className='text-5xl text-secondary'/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}