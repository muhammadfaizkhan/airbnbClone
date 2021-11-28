import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {IoIosClose} from 'react-icons/io'
import { useState } from 'react'
import {useRouter} from 'next/dist/client/router'
import {format} from 'date-fns'
import InfoCard from '../components/InfoCard/InfoCard'
import CardThree from '../components/CardThree/CardThree'
import Head from 'next/head'



const Search = ({getData, image, title,total, description, price, rating, locaa}) => {
    const [hidden, setHidden] = useState(true);
    const clicked = () => {
        setHidden(false)
    }
    const router = useRouter()
    const {location, startDate, endDate, noGuests} = router.query;
    const formattedStartDate = format(new Date(startDate),"dd MMMM yy");
    const formattedEndDate = format(new Date(endDate),"dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
   return (
        <>
             <Head>
                <title>Airbnb: Start the search</title>
                <meta name="description" content="Airbnb Clone Version with Next.js and Tailwind Css Muhammad Faiz Khan .Faiz is a Front End Developer and a Designer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <Header placeholder={`${location} ‣ ${range} ‣ ${noGuests}`}/>
            <div className="py-16">
                <main className="flex relative bg-white w-full border-b border-gray-200">
                    <section className="px-8 py-16">
                        <p className="font-mono text-xs">250+ Stays <b>{range}</b> for <b>{noGuests}</b> guests</p>
                        <h1 className="font-bold my-4 text-xl uppercase">Stays in <span className="font-extrabold text-red-400 text-2xl font-mono">{location}</span></h1>

                        {hidden ? 
                            <div className="flex space-x-56">
                                <div className="hidden lg:inline-flex md:inline-flex xl:inline-flex absolute group active:bg-red-400 transform transition ease-in duration-300 active:text-white bg-white group items-center space-x-6 animate__animated animate__fadeInUp animate__delay__3s pl-4 border cursor-pointer rounded-md justify-between">
                                    <p className="text-xs">Cancellation Felxibility</p>
                                    <IoIosClose className="p-2 hover:text-red-600 animate__animated animate__rotateIn" onClick={clicked} size={38}/>
                                </div>                                
                            </div>                        
                            : null}
                    </section>
                </main>
                <main className="py-12 px-8">
                    {getData.map(data => (
                       <InfoCard
                        key={data.img}
                        image={data.img}
                        locaa={data.location}
                        description={data.description}
                        title={data.title}
                        price={data.price}
                        rating={data.star}
                        total={data.total}
                       /> 
                    ))}
                </main>
                <main className="mx-6 py-5">
                <div className="w-auto sm:w-96 ml-auto mr-auto md:w-4/5 lg:w-4/5">
                    <CardThree
                        img="https://links.papareact.com/4cj"
                        title="The Greatest Place is for you."
                        desc="Locations filtered by Airbnb clone version, and was buil using next.js and tailwind css."
                        buttonText="Find a place"
                    />
                </div>
                </main>
            </div>
        <Footer/>
        </>
    );
}

export default Search;

export const getServerSideProps = async(ctx) => {
    const searchData = await fetch("https://links.papareact.com/isz")
    const getData = await searchData.json()

    return{
        props:{
            getData: getData
        }
    }
}