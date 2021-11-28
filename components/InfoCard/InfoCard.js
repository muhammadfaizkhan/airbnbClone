import Image from 'next/image'
import { useState } from 'react';
import {AiFillStar, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'



const InfoCard = ({image, title, description, price, rating, locaa, total}) => {
    const [click, setClick] = useState(true)
    const onClick = () => {
        setClick(true)
        alert("You've unliked a place")
    }
    const onClicked = () => {
        setClick(false)
    }
    return (
        <div className="flex animate__animated animate__fadeInUp cursor-pointer hover:opacity-80 hover:shadow-lg py-7 px-2 border-b">
            <div className="relative mb-16 h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image alt="airbnb clone" src={image} className="rounded-lg" layout="fill" objectFit="cover"/>
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{locaa}</p>
                    {click ?
                        <AiOutlineHeart onClick={onClicked} className="cursor-pointer"/>                    
                    :   <AiFillHeart onClick={onClick} className="text-red-400 cursor-pointer"/>                
                    }
                </div>
                <h4 className="text-xl font-bold">{title}</h4>
                {/* <div className="border-b w-16 pt-2 mb-4"/> */}
                <p className="text-xs text-gray-600 border md:w-full sm:w-full lg:w-9/12 xl:w-9/12 font-mono py-1 px-2 bg-white">{description}</p>
                <div className="flex justify-between mx-6 items-end">
                    <div className="flex items-center space-x-1  -ml-6 top-16 md:top-24 xl:top-12 lg:top-24">
                        <AiFillStar className="text-yellow-500"/>
                        <p className="text-xs text-gray-500 font-semibold">{rating}</p>
                    </div>
                    <div className="block space-y-4 text-center space-x-1 mt-2">
                        <p className="text-lg py-1 px-3 border border-red-400 text-red-400 font-sans font-regular">{price}</p>
                        <p className="text-xs  py-1 px-3  text-red-500 font-sans font-semibold">{total}</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default InfoCard;