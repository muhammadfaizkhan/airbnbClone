import Image from 'next/image'



const CardTwo = ({title, image}) => {
    return (
        <div className="cursor-pointer group text-center  animate__animated animate__lightSpeedInLeft animate__delay-2s ">
            <div className="relative h-62 w-80 -mx-6 sm:-mx-4 md:mx-2 lg:mx-6">
                <Image alt="airbnb clone"  src={image} className="rounded-lg ml-auto hover:scale-105 transform transition duration-150 ease-in  my-5 m-6" width="240" height="100"/>
            </div>
            <h3 className="hover:text-red-400 ml-8 transition ease-linear duration-100 font-bold capitalize text-lg">{title}</h3>
            <br/>
        </div>
    );
}

export default CardTwo;