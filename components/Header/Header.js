import Image from 'next/image'
import {GoSearch} from 'react-icons/go'
import {VscGlobe} from 'react-icons/vsc'
import {IoIosMenu} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import 'animate.css';
import {AiOutlineUserAdd} from 'react-icons/ai'


const Header = ({placeholder}) => { 
    return (
        <div className="fixed grid grid-cols-3 w-full bg-white shadow-lg py-5 px-9 z-50">
           <div className="relative items-center h-9 my-auto hidden md:flex animate__animated animate__fadeInDown">
                <Image alt="airbnb clone" className="cursor-pointer" src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           <div className="flex animate__animated animate__fadeInDown items-center border rounded-3xl mx-auto px-2 py-1 justify-between shadow-md lg:flex-grow  md:flex-grow w-96 md:w-auto bg-gray-100 md:bg-white lg:bg-white">
               <input required  className="ml-2 bg-transparent py-2 flex-grow mr-2 font-medium focus:outline-none placeholder-gray-400 placeholder-text-xs" type="text" placeholder={placeholder || "Start your search"}/>
               <GoSearch type="submit" className="bg-red-400 animate__animated animate__zoomIn text-white rounded-3xl p-2 md:inline-flex cursor-pointer" size={32}/>
           </div>
           <div className="hidden md:flex lg:flex items-center relative -right-32 flex-grow">
            <p className="text-black cursor-pointer text-sm animate__animated animate__fadeInDown font-semibold py-3 px-4 rounded-full hidden lg:block hover:bg-gray-100 hover:text-black">Become a Host</p>               
            <VscGlobe className="rounded-full animate__animated animate__rotateIn text-gray-900 hover:text-black mr-1 cursor-pointer p-3 hover:bg-gray-100" size={42}/>
            <div className="py-2 px-3 items-center flex animate__animated animate__fadeInRight space-x-4 border cursor-pointer rounded-full hover:shadow-md">
                <IoIosMenu className="text-gray-900" size={21}/>
                <FaUserCircle className="text-gray-500" size={26}/>
            </div>
           </div>
        </div> 
    );
}

export default Header;