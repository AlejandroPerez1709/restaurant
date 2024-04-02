/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { FaFacebook, FaGoogle } from 'react-icons/fa'
import {IoCloseOutline} from 'react-icons/io5'

export const Popup = ({showPopup, setShowPopup}) => {

    console.log(showPopup)

    return(
        <div>
            {
                showPopup && (
                    <div className="fixed h-screen w-screen top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">

                           <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold text-dark">Login</h1>
                                </div>
                                <div>
                                    <IoCloseOutline className='text-2xl cursor-pointer' onClick={() => setShowPopup(false)}/>
                                </div>
                           </div>

                           {/* Login form section */}
                           <div className='mt-4'>
                                <input type="email" className='w-full rounded-md border border-gray-300 px-2 py-1 mb-4 dark:border-gray-500' placeholder='Enter Email'/>
                                <input type="password" className='w-full rounded-md border border-gray-300 px-2 py-1 mb-4 dark:border-gray-500' placeholder='Enter Password'/>
                                <div>
                                    <button className="w-full bg-primary text-white p-2 rounded-md" 
                                    onClick={() => setShowPopup(false)}>
                                        Login
                                    </button>
                                </div>
                                
                           </div>

                           <div className='mt-4'>
                                <p className='capitalize text-center'>or login with</p>                                    
                                <div className='flex text-3xl justify-center gap-2 mt-2'>
                                    <FaFacebook className='hover:text-blue-500 duration-200'/>
                                    <FaGoogle className='hover:text-primary duration-200'/>
                                </div>
                           </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}