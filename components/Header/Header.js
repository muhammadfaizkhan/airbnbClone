import styles from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {GoSearch} from 'react-icons/go'
import {VscGlobe} from 'react-icons/vsc'
import {IoIosMenu} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import 'animate.css';
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {AiOutlineUserAdd} from 'react-icons/ai'
import {useRouter} from 'next/dist/client/router';


const Header = ({placeholder}) => { 
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noGuests, setNoGuests] = useState('')
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const resetInput = () => {
        setSearch("")
    }
    const router = useRouter()
    const searchFunc = () => {
        router.push({
            pathname: '/search',
            query : {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noGuests
            }
        })
    }
    return (
        <div className="fixed grid grid-cols-3 w-full bg-white shadow-lg py-5 px-9 z-50">
           <div onClick={() => router.push('/')} className="relative items-center h-9 my-auto hidden md:flex animate__animated animate__fadeInDown">
                <Image alt="airbnb clone" className="cursor-pointer" src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
           </div>
           <div className="flex animate__animated animate__fadeInDown items-center border rounded-3xl mx-auto px-2 py-1 justify-between shadow-md lg:flex-grow  md:flex-grow w-96 md:w-auto bg-gray-100 md:bg-white lg:bg-white">
               <input value={searchInput} required onChange={(e) => setSearchInput(e.target.value)} className="ml-2 bg-transparent py-2 flex-grow mr-2 font-medium focus:outline-none placeholder-gray-400 placeholder-text-xs" type="text" placeholder={placeholder || "Start your search"}/>
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
            {searchInput && (
                <div className="sticky flex border flex-col col-span-3 mt-4 mx-auto">
                   <DateRangePicker className="mt-4 animate__animated animate__zoomIn" onChange={handleSelect} rangeColors={["#FD5B61"]} ranges={[selectionRange]} minDate={new Date()}/>
                   <div className="lg:flex md:flex bg-red-400 my-2 w-56 lg:w-72 mr-auto md:ml-auto lg:mr-1 sm:ml-2 xl:mr-2 md:mr-2 lg:ml-auto 2xl:ml-auto xl:ml-auto md:w-72 xl:w-72 items-center animate__animated animate__fadeInUp animate__delay_4s justify-between text-xl mx-6 shadow-md rounded-md flex-grow font-semibold  mb-4">
                       <h2 className="bg-red-400 text-white px-4 pt-1 pb-1 rounded-md text-sm">How many guests ?</h2>
                       <div className="flex items-center bg-gray-100  rounded-r-sm px-2 pl-4">
                        <AiOutlineUserAdd/>
                        <input min={1} type="number" placeholder={"2 Guests"} value={noGuests} onChange={(e) => setNoGuests(e.target.value)} className="w-12 mb-1 text-sm pt-2 pl-2 bg-transparent outline-none"/>
                       </div>
                   </div>
                   <div className="flex flex-grow justify-between ml-auto space-x-6 px-8 py-5">
                       <button className="text-sm text-black hover:underline rounded-md px-4 py-1" onClick={resetInput}>Cancel</button>
                       <button onClick={searchFunc} className="bg-transparent text-sm text-red-400 border-red-400 hover:bg-red-400 hover:text-white hover:scale-65 transform transition duration-200 ease-in border px-8 py-1 rounded-md">Search</button>
                   </div>
                </div>
            )}

        </div> 
    );
}

export default Header;