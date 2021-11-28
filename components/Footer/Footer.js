import 'animate.css'


const Footer = () => {
    return (
        <div className=" bg-gray-100 border-t text-left">
        <div className="sm:ml-16 md:ml-30 ml-14 lg:ml-30 xl:ml-30 lg:ml-32 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 py-10">
            <div>
                <h4 className="font-bold py-4 animate__animated animate__fadeInLeft animate__duration-5s animate__repeate-2">Support</h4>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Help Center</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Safety information</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Cancellation options</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Our Covid Response</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Support people with disablities</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Report a neighborhood concern</p>
            </div>
            <br/>
            <div>
                <h4 className="font-bold py-4 animate__animated animate__fadeInDown animate__duration-5s animate__repeate-2">Community</h4>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Airbnb: disaster relief housing</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Support Afghan refugees</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Celebrating diversity & belongings</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Combating discrimination</p>
            </div>
            <br/>
            <div>
                <h4 className="font-bold py-4 animate__animated animate__fadeInDown animate__duration-5s animate__repeate-2">Hosting</h4>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Try Hosting</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">AirCover: Protection for hosts</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Explore hosting resources</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Visit our community forum</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">How to host reponsibility</p>
            </div>
            <br/>
            <div>
                <h4 className="font-bold py-4 animate__animated animate__fadeInRight animate__duration-5s animate__repeate-2">About</h4>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Newsrooms</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Learn about new features</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Letter from our founders</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Careers</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Investors</p>
                <p className="font-sans text-xs py-2 hover:underline cursor-pointer text-gray-700">Airbnb Luxe</p>
            </div>
        </div>
        <br/>
        <hr className="mx-10 text-gray-600"/>
        <div className="flex items-center mx-6 md:mx-12 lg:mx-14 py-4 flex-grow space-x-2">
            <p className="mx-2 text-gray-700 font-sans text-xs"> © 2021 Airbnb Clone Version Inc.</p>
            <span> · </span>
            <p className=" text-gray-700 font-sans font-semibold cursor-pointer hover:underline text-xs"> Privacy </p>
            <span> · </span>
            <p className="  text-gray-700 font-sans font-semibold cursor-pointer hover:underline text-xs"> Terms </p>
            <span> · </span>
            <p className=" text-gray-700 font-sans font-semibold cursor-pointer hover:underline text-xs"> Sitemap </p>
        </div>
    </div>       
    );
}

export default Footer;