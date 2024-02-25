import { Link } from "react-router-dom"
import './Main.css'
const Main = () => {
  return (
    <main>
        <section className="flex justify-center items-center">
            <div className="absolute top-[70px] -z-10"> 
                <img className="md:hidden" loading="lazy" src="/assets/MotoMobile.svg" alt="MotoImg" />
                <img className="hidden md:flex" loading="lazy" src="/assets/TabletMoto.svg" alt="Tablet" />
            </div>
            <div className="text-center absolute top-[145px] -z-10">
                <h1 className="text-[40px] font-bold text-white w-[300px] mb-6 md:text-[56px] md:w-[573px]">Scooter sharing made simple</h1>
                <p className="w-[300px] text-[15px] text-white font-normal leading-[26px] md:w-[573px] change"> 
                    Scoot takes the hassle out of urban mobility.
                    Our bikes are placed in convenient locations
                    in each of our cities. Use our app to locate the nearest bike, 
                    unlock it with a tap, and you’re away!
                </p>
                <div className="flex justify-center">
                    <div className=" flex justify-center items-center  mt-[50px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Get Scootin</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="absolute top-[85%] left-[-40px]  md:relative md:top-[20px] md:left-[-97px]">
                    <img className="md:hidden"  loading="lazy" src="/assets/ArrowYellow.svg" alt="leftArrow" />
                    <img className="hidden md:flex" loading="lazy" src="/assets/TabletZigZag.svg" alt="tablet" />
                </div>
            </div>
        </section>
        <section className="flex justify-center items-center flex-col mt-[120px]">

           <div className=" md:flex md:items-center md:gap-[79px]">
                <div className="flex justify-center">
                        <img className="md:w-[96px]" loading="lazy" src="/assets/Mobile.svg" alt="MobileImg" />
                    </div>
                    <div className="text-center">
                        <h3 className="mt-6 mb-6 text-[28px] text-[#495567] md:text-left">Locate with app</h3>
                        <p className="text-[15px] text-[#939CAA] leading-[25px] w-[300px] change mb-[46px] md:text-left md:w-[400px]">
                            Use the app to find the nearest scooter to you. 
                            We are continuously placing scooters in the areas 
                            with most demand, so one should never be too far away. 
                        </p>
                    </div>
                </div>

           <div className="md:flex md:items-center md:gap-[79px]">
                <div className="flex justify-center">
                    <img className="md:w-[96px]" loading="lazy" src="/assets/Moped.svg" alt="Moped" />
                </div>
                <div className="text-center">
                    <h3 className="mt-6 mb-6 text-[28px] text-[#495567] md:text-left">Pick your scooter</h3>
                    <p className="text-[15px] text-[#939CAA] leading-[25px] w-[300px] change mb-[46px] md:text-left md:w-[400px]">
                    We show the most important info for the scooters closest to you.
                    So you know how much charge they have left and can see roughly 
                    how much it will cost.
                    </p>
                </div>
           </div>

           

           <div className="md:flex md: items-center md:gap-[79px]">
                    <div className="flex justify-center">
                        <img className="md:w-[96px]" loading="lazy" src="/assets/Moped2.svg" alt="Moped" />
                    </div>
                    <div className="text-center">
                        <h3 className="mt-6 mb-6 text-[28px] text-[#495567] md:text-left">Enjoy the ride</h3>
                        <p className="text-[15px] text-[#939CAA] leading-[25px] w-[300px] change mb-[46px] md:text-left md:w-[400px]">
                        Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, 
                        and you’re off! Always lock bikes away from walkways and accessibility ramps. 
                        </p>
                    </div>
           </div>
        </section>
        
        <section className="flex justify-center  items-center flex-col mt-[83px]">


            <div className="relative md:flex md:flex-col md:justify-center md:items-center">
                <img className="md:w-[400px]" loading="lazy" src="/assets/GirlOval.svg" alt="Girl" />
                <img loading="lazy" className="absolute top-[180px] left-[32px] md:hidden" src="/assets/ZigZag.svg" alt="ZigZag" />
                <img loading="lazy" className="hidden md:flex md:relative md:bottom-[100px] md:left-[20px]" src="/assets/Path 4.svg" alt="Tablet" />
                <img loading="lazy" className="hidden md:flex md:relative md:bottom-[150px] md:right-[330px]" src="/assets/Path 3 (1).svg" alt="Tablet" />
            </div>
            <div className="md:relative bottom-[100px]">
                <h1 className="text-center mt-[56px] mb-[32px] text-[32px] w-[350px] text-[#495567] leading-[32px] font-bold md:text-[48px] md:leading-[48px] md:w-[573px]">
                Easy to use riding telemetry
                </h1>
                <p className="text-center change w-[350px] text-[15px] text-[#939CAA] leading-[25px] md:w-[573px]"> 
                    The Scoot app is available with riding telemetry. This means
                    it can show you your average speed, how long you've been using 
                    the scooter, your traveling distance, and many more things all
                    in an easy to use app.
                </p>
                <div className="flex justify-center mb-[120px]">
                    <div className=" flex justify-center items-center  mt-[50px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Learn More</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>



            <div className="relative">
                <img loading="lazy" src="/assets/Oval2.svg" alt="City" />
                <img loading="lazy" className="absolute top-[0px] right-[80px]" src="/assets/2ZigZag.svg" alt="2ZigZag" />
            </div>
            <div>
                <h1 className="text-center mt-[56px] mb-[32px] text-[32px]  w-[350px] leading-[32px] text-[#495567]">
                Coming to a city near you
                </h1>
                <p className="text-center change w-[350px] text-[15px] text-[#939CAA] leading-[25px]"> 
                Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let
                 us know if you want to see us in your hometown. We’re aiming to let our scooters 
                 loose on 23 cities over the coming year.
                </p>
                <div className="flex justify-center mb-[120px]">
                    <div className=" flex justify-center items-center  mt-[50px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Learn More</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>



            <div className="relative">
                <img loading="lazy" src="/assets/Safuleimg.svg" alt="Wallet" />
                <img loading="lazy" className="absolute top-0 left-[124px]" src="/assets/3ZigZag.svg" alt="ZigZag" />
            </div>
            <div>
                <h1 className="text-center mt-[56px] mb-[32px] text-[32px] w-[350px] leading-[32px] text-[#495567]">
                Zero hassle payments
                </h1>
                <p className="text-center change w-[350px] text-[15px] text-[#939CAA] leading-[25px]"> 
                Our payment is as easy as one two three. We accept most credit cards and debit cards.
                 You can also link your PayPal account inside the app. Need to pay later? No worries!
                  You can defer payment for up to a month.
                </p>
                <div className="flex justify-center mb-[120px]">
                    <div className=" flex justify-center items-center  mt-[50px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Learn More</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

       
    </main>
  )
}

export default Main