
import {MdEmail} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa6'
import {IoLocationSharp} from 'react-icons/io5'

export const Footer = () => {

    return(
        <div data-aos="flip-left" data-aos-delay="400" className="text-white m-20 ">
            <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
                {/* Heading Section */}
                <div >
                    <h1 className="capitalize text-3xl font-bold text-yellow-50 text-center py-10">Contáctanos </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">

                        <div className='text-center space-y-4 '>
                            <div className='flex justify-center'>
                                <IoLocationSharp className='text-5xl'/>
                            </div>
                            <p className='capitalize'>
                            Av. De las torres s/n Ecatepec  <br /> Estado de México<br />55418
                            </p>
                        </div>

                        <div className='text-center space-y-4 '>
                            <div className='flex justify-center'>
                                <MdEmail className='text-5xl'/>
                            </div>
                            <p className=''>
                                freshfitmeals@gmail.com <br />info@freshfitmeals.com
                            </p>
                        </div>

                        <div className='text-center space-y-4 '>
                            <div className='flex justify-center'>
                                <FaPhone className='text-5xl'/>
                            </div>
                            <p className='capitalize'>
                                +92 55 83 20 02 05 - Ventas y Servicio <br /> +92 55 83 20 02 05 - Dudas 
                            </p>
                        </div>

                    </div>

                    {/* Copyright Section */}
                    <div className='capitalize flex justify-between p-4 items-center'>
                        <p  className=''>© 2024 FreshFit Meals Todos los derechos reservados </p>
                        <div className='flex items-center gap-6'>
                            <a href="#" className=''>Términos y condiciones</a>
                            <a href="#" className=''>Política de privacidad </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}