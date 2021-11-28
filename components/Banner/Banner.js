import styles from './Banner.module.css'
import Image from 'next/image'
import Hero from '../../assets/banner.png'
import 'animate.css'



const Banner = () => {
    return (
        <div className="relative -ml-0.5 top-10 w-full h-96">
            <Image src={Hero} objectFit="cover" layout="fill" alt="airbnb clone"/>
            <div className="relative animate__animated animate__fadeInLeft top-20 py-8 px-12 space-y-10 text-white">
                <h1 className={styles.Heading}>Not sure where to go? Perfect.</h1>  
                <button className={styles.Button}>I am flexible</button>
            </div>
        </div>
    );
}

export default Banner;