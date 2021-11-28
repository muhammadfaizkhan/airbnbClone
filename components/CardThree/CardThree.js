import Image from 'next/image'


const CardThree = ({img, title, buttonText, desc}) => {
    return (
        <section className="relative animate__animated animate__jackInTheBox animate__delay-3s my-12 hover:shadow-md  rounded-2xl">
            <div className="relative h-96 min-w-[300px]">
                <Image className="rounded-xl opacity-95" src={img} layout="fill" objectFit="cover" alt="airbnb clone" />
            </div>
            <div className="absolute py-8 px-12 top-0">
                <h3 className="py-5 font-extrabold text-2xl">{title}</h3>
                <p className="pb-12 text-sm font-mono font-semibold">{desc}</p>
                <button className="px-4 border border-black bg-black text-white p-3 transform transition duration-100 active:scale-105 ease-linear rounded-md text-sm">{buttonText}</button>
            </div>
        </section>
    );
}

export default CardThree;