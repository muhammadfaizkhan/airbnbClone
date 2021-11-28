import Image from 'next/image'

const Card = ({img, distance, location}) => {
    return (
        <div className="flex my-12 group animate__animated animate__zoomIn cursor-pointer items-center py-4 rounded-md ml-auto mr-auto">
            <Image className="rounded-lg" src={img} width={90} height={65}  alt="airbnb clone" />
            <div className="hover:bg-gray-100  hover:scale-90 transform transition duration-150 ease-in rounded-md mx-1 px-4">
                <p className="font-semibold pt-2">{location}</p>
                <br/>
                <p className="font-light text-sm py-2 text-gray-600">{distance}</p>
            </div>
        </div>
    );
}

export default Card;