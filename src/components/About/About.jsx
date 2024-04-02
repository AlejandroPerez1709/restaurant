/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import BgPolygon from '../../assets/polygon.png'
import Vector from '../../assets/vector-wave.png'
import {FaUser} from 'react-icons/fa'

const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
}


export const About = ({handlePopup}) => {
    return(
        <div style={bgStyle} className='py-14'>
            <div data-aos="zoom-out" data-aos-delay="700" className="container min-h-[500px] relative z-10">

                <h1 className="capitalize pt-20 tracking-wider text-4xl font-semibold text-white text-center">Acerca de nosotros </h1>
                {/* Card Section */}
                <div className='bg-white/60 rounded p-10 my-10'>
                    <p className='mb-5'>FreshFit Meals es una empresa dedicada a proporcionar comidas saludables y convenientes, diseñadas para aquellos que desean mantener un estilo de vida activo y saludable sin sacrificar el sabor ni la comodidad. Con un enfoque en la frescura, la calidad de los ingredientes y la atención a las necesidades dietéticas individuales, FreshFit Meals se ha ganado una reputación por ofrecer opciones deliciosas y equilibradas que satisfacen los paladares más exigentes.</p>
                    <h2 className='mt-2 text-xl text-primary'>Variedad de Productos</h2>
                    <p className='mb-5'>FreshFit Meals ofrece una amplia variedad de opciones en su menú, que incluye platos principales, ensaladas frescas, bowls nutritivos, snacks saludables y postres indulgentes pero saludables. Cada plato está cuidadosamente elaborado por chefs expertos, utilizando ingredientes frescos y naturales, y está diseñado para proporcionar una combinación óptima de nutrientes.</p>
                    <h2 className='mt-2 text-xl text-secondary'>Servicio de Entrega a Domicilio:</h2>
                    <p>Uno de los aspectos más destacados de FreshFit Meals es su conveniente servicio de entrega a domicilio. Los clientes pueden realizar pedidos fácilmente a través de su sitio web o aplicación móvil, y programar entregas semanales o diarias según sus preferencias. Con un proceso de entrega eficiente y puntual, FreshFit Meals garantiza que sus clientes reciban sus comidas frescas y listas para disfrutar en la comodidad de sus hogares u oficinas.</p>
                    <div className='mt-14'>
                        <button onClick={handlePopup} className="flex justify-center items-center gap-2 bg-primary  text-xl h-[40px] text-white px-5 py-2 rounded hover:scale-105 duration-300 mx-auto">
                            <FaUser/>
                            Crear Cuenta
                        </button>
                    </div>
                </div>

            </div>
            {/* Wave Section */}
            <div>
                <img src={Vector} alt="vector" className='absolute top-0 right-0 w-full mx-auto'/>
            </div>
        </div>
    )
}