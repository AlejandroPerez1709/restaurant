/* eslint-disable react/prop-types */
import { FaCaretDown, FaUser } from "react-icons/fa";



const NavLinks = [
    {
        id: 1,
        name: "Inicio",
        link: "/#",
    },
    {
        id: 2,
        name: "Acerca",
        link: "/#",
    },
    {
        id: 3,
        name: "Contacto",
        link: "/#",
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: "Vegetales",
        link: "/#",
    },
    {
        id: 2,
        name: "Frutas",
        link: "/#",
    },
    {
        id: 3,
        name: "Granos",
        link: "/#",
    },
]



export const Navbar = ({ handlePopup }) => {



    return(
        <div data-aos="fade" className="bg-white shadow-md ">
            <div className="container flex justify-between py-4 sm:py-3">
                {/* logo section */}
                <div className='text-secondary font-cursive text-4xl '>FreshFit Meals</div>
                {/* Navlinks section */}
                <div>
                    <ul className="flex items-center gap-10  ">
                        {
                            NavLinks.map(({id, name, link}) => (
                                <li key={id}>
                                    <a href={link} className="hidden lg:inline-block hover:text-primary text-xl font-semibold">{name}</a>
                                </li>
                            ))
                        }
                        <li className="relative hidden sm:block cursor-pointer group  bg-white">
                            <a href="/#" className="inline-block text-xl hover:text-primary font-semibold">
                                <div className="flex items-center gap-[2px] py-2 ">
                                    Menú
                                    <span>
                                        <FaCaretDown className="group-hover:rotate-180 transition duration-300"/>
                                    </span>
                                </div>
                            </a>
                            {/* Dropdown Section */}
                            <div className="rounded absolute top-0 left-0 z-[9999] hidden group-hover:inline-block w-[150px] bg-white shadow-md text-black transition group-hover:translate-y-11  px-3 ">
                                <ul>
                                    {
                                        DropdownLinks.map(({id, name, link}) => (
                                            <li key={id} className=" ">
                                                <a href={link} className="inline-block text-xl w-full rounded-md  hover:bg-primary/20 px-3">
                                                    {name}
                                                </a>
                                            </li>    
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                        
                        <li>
                            <button onClick={handlePopup} className="flex justify-center items-center gap-2 bg-secondary text-sm  sm:text-lg  h-[40px] text-white px-5 py-2 rounded hover:scale-105 duration-300">
                                <FaUser/>
                                Mi Cuenta
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}