import { FaCaretDown, FaUser } from "react-icons/fa";



const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "About",
        link: "/#",
    },
    {
        id: 3,
        name: "Contact",
        link: "/#",
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: "Vegetables",
        link: "/#",
    },
    {
        id: 2,
        name: "Fruits",
        link: "/#",
    },
    {
        id: 3,
        name: "Grains",
        link: "/#",
    },
]



export const Navbar = () => {



    return(
        <div className="bg-white shadow-md">
            <div className="container flex justify-between py-4 sm:py-3">
                {/* logo section */}
                <div className="font-bold text-3xl">Logo</div>
                {/* Navlinks section */}
                <div>
                    <ul className="flex items-center gap-10">
                        {
                            NavLinks.map(({id, name, link}) => (
                                <li key={id}>
                                    <a href={link} className="inline-block hover:text-primary text-xl font-semibold">{name}</a>
                                </li>
                            ))
                        }
                        <li className="cursor-pointer group  z-30 bg-white">
                            <a href="/#" className="inline-block text-xl hover:text-primary font-semibold">
                                <div className="flex items-center gap-[2px] py-2 ">
                                    Dropdown
                                    <span>
                                        <FaCaretDown className="group-hover:rotate-180 transition duration-300"/>
                                    </span>
                                </div>
                            </a>
                            {/* Dropdown Section */}
                            <div className="absolute translate-y-[-300px] group-hover:translate-y-[0px] w-[150px] bg-white shadow-md text-black p-2 transition duration-300  z-[-1]   ">
                                <ul>
                                    {
                                        DropdownLinks.map(({id, name, link}) => (
                                            <li key={id} className="opacity-0 group-hover:opacity-100 group-hover:delay-200 ">
                                                <a href={link} className="inline-block text-xl w-full rounded-md p-2 hover:bg-primary/20 bg-">
                                                    {name}
                                                </a>
                                            </li>    
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                        
                        <li>
                            <button className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 rounded hover:scale-105 duration-300">
                                <FaUser/>
                                My Account
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}