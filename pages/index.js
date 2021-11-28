import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import CardThree from '../components/CardThree/CardThree'
import CardTwo from '../components/CardTwo/CardTwo'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function Home({getData, img, distance, location, cardData, title, image}) {
  return (
    <div>
      <Head>
        <title>Airbnb: Vacation Rentals, Beach Houses, Unique Homes & Experiences</title>
        <meta name="description" content="Airbnb Clone Version with Next.js and Tailwind Css Muhammad Faiz Khan .Faiz is a Front End Developer and a Designer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className="bg-white mt- top-24 py-20 px-12 lg:px-14 md:px-20 sm:px-20">
        <section className="text-center">
            <h1 className="sm:text-lg md:text-3xl text-2xl lg:text-2xl px-5 font-extrabold lg:font-extrabold">Explore Nearest</h1>
        </section>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mx-14">
            {getData.map(get => (
              <Card
                key={get.img}
                location={get.location}
                img={get.img}
                distance={get.distance}
              />
            ))}
        </div>
        <br/>
        <br/>
        <section className="text-center">
            <h1 className="sm:text-lg md:text-3xl text-2xl lg:text-2xl px-5 font-extrabold lg:font-extrabold">Live Anywhere</h1>
        </section>
        <br/>
        <div className="flex space-x-1 overflow-x-scroll scrollbar-hide">
          {cardData.map(get => (
            <CardTwo
              key={get.image}
              title={get.title}          
              image={get.img}
            />  
          ))}
        </div>
        <br/>
        <br/>
        <br/>
        <div className="w-auto sm:w-96 ml-auto mr-auto md:w-4/5 lg:w-4/5">
          <CardThree
            img="https://links.papareact.com/4cj"
            title="The Greatest Place is for you."
            desc="Locations filtered by Airbnb clone version, and was buil using next.js and tailwind css."
            buttonText="Find a place"
          />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export const getServerSideProps = async(ctx) => {
  const data = await fetch("https://links.papareact.com/pyp")
  const getData = await data.json()
  const liveData = await fetch("https://links.papareact.com/zp1")
  const cardData = await liveData.json()
  return{
    props:{
      getData: getData,
      cardData: cardData
    }
  }
}
