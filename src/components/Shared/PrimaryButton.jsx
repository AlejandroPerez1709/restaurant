import {FaArrowRight} from 'react-icons/fa'

export const PrimaryButton = () => {



    return(
        <div className='flex items-center group z-50'>
            <button className='capitalize bg-primary h-[40px] text-white px-3 py-2 rounded'>Escoge tu plan </button>           
            <FaArrowRight className='inline-block group-hover:!translate-x-3 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark rounded text-white'/>
        </div>
    )
}