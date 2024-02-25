import { Link } from "react-router-dom"
const Locations = () => {
  return (
    <>
     <section className="flex justify-center items-center">
            <div className="absolute top-[70px] -z-10"> 
                <img loading="lazy" src="/assets/careersMobile.svg" alt="CareersFirstPhoto" />
            </div>
            <div className="absolute text-white text-[40px] top-[130px] font-bold leading-[40px] -z-10">
              <h1>Locations</h1>
            </div>
        </section>
        <section className="flex flex-col justify-center items-center relative bottom-[350px] -z-10">
          <div>
            <img src="/assets/Map.svg" alt="map" />
          </div>
        </section>
        <section className="flex flex-col justify-center items-center relative bottom-[250px] gap-4 -z-10">
          <div className="bg-[#FCB72B26] w-[311px] h-[72px] flex flex-col justify-center items-center">
            <h1 className="text-[24px] leading-[28px] text-[#495567] font-bold">New York</h1>
          </div>
          <div className="bg-[#FCB72B26] w-[311px] h-[72px] flex flex-col justify-center items-center">
            <h1 className="text-[24px] leading-[28px] text-[#495567] font-bold">London</h1>
          </div>
          <div className="bg-[#FCB72B26] w-[311px] h-[72px] flex flex-col justify-center items-center">
            <h1 className="text-[24px] leading-[28px] text-[#495567] font-bold">Jakarta</h1>
          </div>
          <div className="bg-[#FCB72B26] w-[311px] h-[72px] flex flex-col justify-center items-center">
            <h1 className="text-[24px] leading-[28px] text-[#495567] font-bold">Yokohama</h1>
          </div>
        </section>



    <section className="flex justify-center  items-center flex-col  relative bottom-[100px] -z-10">

          <div>

            <h1 className="text-center mt-[56px] mb-[32px] text-[32px] w-[350px] text-[#495567] font-bold leading-[32px]">
            Your City Not Listed?
            </h1>

          <p className="text-center change w-[350px] text-[15px] text-[#939CAA] leading-[25px]"> 
              If you’d like to see Scoot in your hometown, be sure to let us know. We track 
              requests and plan launches based on demand. Feel free to message us by 
              clicking the link or messaging us on social.
            </p>

                        <div className="flex justify-center mb-[120px]">
                            <div className=" flex justify-center items-center  mt-[50px]  bg-[#FCB72B] w-[192px] h-[53px]">
                                <nav>
                                    <ul>
                                    <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Message Us</Link></li>  
                                    </ul>
                                </nav>
                            </div>
                        </div>
                  
        </div>

    </section>
    </>
  )
}

export default Locations