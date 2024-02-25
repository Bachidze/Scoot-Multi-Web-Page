import { Link } from "react-router-dom"
const Careers = () => {
  return (
    <>
        <section className="flex justify-center items-center">
            <div className="absolute top-[70px] -z-10"> 
                <img loading="lazy" className="md:hidden" src="/assets/About.svg" alt="AboutFirstPhoto" />
                <img loading="lazy" className="hidden md:flex" src="/assets/2Tablet2First.svg" alt="" />
            </div>
            <div className="absolute text-white text-[40px] top-[130px] font-bold leading-[40px] -z-10 md:pl-[100px] md:pt-[10px] md:left-0">
              <h1 className="md:text-[56px] md:leading-[56px]">Careers</h1>
            </div>
          
        </section>

        <section className="flex justify-center  items-center flex-col mt-[83px] relative bottom-[450px] -z-10">


<div className="relative md:flex md:flex-col md:items-center">
    <img loading="lazy" className="md:w-[400px]" src="/assets/CareersMobile2.svg" alt="Careers2PhotMobile" />
    <img loading="lazy" className="absolute top-[180px] left-[32px] md:hidden" src="/assets/ZigZag.svg" alt="ZigZag" />
    <img loading="lazy" className="hidden md:flex md:relative md:bottom-[100px] md:left-[20px]" src="/assets/Path 4.svg" alt="Tablet" />
     <img loading="lazy" className="hidden md:flex md:relative md:bottom-[150px] md:right-[330px]" src="/assets/Path 3 (1).svg" alt="Tablet" />
</div>
<div>

    <h1 className="text-center mt-[56px] mb-[32px] text-[32px] w-[350px] text-[#495567] font-bold leading-[32px] md:mt-0 md:text-[48px] md:leading-[48px] md:w-[573px]">
    Care to join our mission?
    </h1>

   <p className="text-center change w-[350px] text-[15px] text-[#939CAA] leading-[25px] md:w-[573px]"> 
      We’re always looking for ambitious individuals to help us on our journey. If you’re
      passionate about our mission to provide clean, accessible transport to
      improve urban living we want to hear from you!
    </p>

                <div className="flex justify-center mb-[120px]">
                    <div className=" flex justify-center items-center  mt-[50px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Say hello</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
          
</div>

</section>
    <section className="relative bottom-[100px] md:bottom-0">


            <section className="flex justify-center flex-col items-center  relative bottom-[350px] ">
              <div>
                <h1 className="text-[32px] mb-[50px] leading-[32px] text-[#495567]  md:text-[48px] md:leading-[48px]">
                Our values
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <img loading="lazy" src="/assets/Iphone.svg" alt="Iphone" />
                <div className="bg-[#FCB72B] w-[60px] h-[60px] rounded-[50%] flex justify-center items-center relative bottom-[35px]">
                  <h1 className="text-[#495567] text-[20px] leading-[24px]">01</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="mb-[27px] text-[#495567] text-[24px] font-bold">Our tech</h1>
                  <p className="w-[300px] text-center text-[15px] text-[#939CAA] change md:w-[457px]">
                    We’re using cutting edge technology to drive accessible urban transportation
                    forward. Our fully electric scooters are a joy to ride!
                  </p>
                </div>
              </div>
            </section>


            <section className="flex justify-center flex-col items-center  relative bottom-[350px] mt-[50px]">
              <div className="flex flex-col items-center">
                <img loading="lazy" src="/assets/Glovo.svg" alt="Glovo" />
                <div className="bg-[#FCB72B] w-[60px] h-[60px] rounded-[50%] flex justify-center items-center relative bottom-[35px]">
                  <h1 className="text-[#495567] text-[20px] leading-[24px]">02</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="mb-[27px] text-[#495567] text-[24px] font-bold">Our integrity</h1>
                  <p className="w-[300px] text-center text-[15px] text-[#939CAA] change md:w-[457px]">
                  We are fully committed to deliver a great
                  yet safe, sustainable micro-mobility 
                  experience in every city we serve.
                  </p>
                </div>
              </div>
            </section>



            <section className="flex justify-center flex-col items-center  relative bottom-[350px] mt-[50px] ">
              <div className="flex flex-col items-center">
                <img loading="lazy" src="/assets/man.svg" alt="Man" />
                <div className="bg-[#FCB72B] w-[60px] h-[60px] rounded-[50%] flex justify-center items-center relative bottom-[35px]">
                  <h1 className="text-[#495567] text-[20px] leading-[24px]">03</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="mb-[27px] text-[#495567] text-[24px] font-bold">Our community</h1>
                  <p className="w-[300px] text-center text-[15px] text-[#939CAA] change md:w-[457px]">
                  We support every community we serve. All workers are paid a
                  living wage based on their location and are Scoot employees.
                  </p>
                </div>
              </div>
            </section>
    </section>

    <section className=" relative bottom-[350px] flex flex-col gap- md:bottom-[150px]"> 
      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px] md:flex-row md:justify-between w-[689px]">
          <div className="text-center md:text-left">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px] md:text-[24px] md:leading-[28px]">General Manager</h1>
            <p className="text-[#495567] text-[15px] leading-[25px]">Jakarta, Indonesia</p>
          </div>
          <div className="flex justify-center">
                    <div className=" flex justify-center items-center  mt-[16px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Apply</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
      </div>



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px] md:flex-row md:justify-between w-[689px]">
          <div className="text-center md:text-left">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px] md:text-[24px] md:leading-[28px]">UI/UX Designer</h1>
            <p className="text-[#495567] text-[15px] leading-[25px]">Yokohama, Japan</p>
          </div>
          <div className="flex justify-center">
                    <div className=" flex justify-center items-center  mt-[16px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Apply</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
      </div>



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px] md:flex-row md:justify-between w-[689px]">
          <div className="text-center md:text-left">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px] md:text-[24px] md:leading-[28px]">Blog Content Copywriter</h1>
            <p className="text-[#495567] text-[15px] leading-[25px]">New York, United States</p>
          </div>
          <div className="flex justify-center">
                    <div className=" flex justify-center items-center  mt-[16px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Apply</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
      </div>



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px] md:flex-row md:justify-between w-[689px]">
          <div className="text-center md:text-left">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px] md:text-[24px] md:leading-[28px]">Graphic Designer</h1>
            <p className="text-[#495567] text-[15px] leading-[25px]">New York, United States</p>
          </div>
          <div className="flex justify-center">
                    <div className=" flex justify-center items-center  mt-[16px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Apply</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
      </div>



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px] md:flex-row md:justify-between w-[689px]">
          <div className="text-center md:text-left">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px] md:text-[24px] md:leading-[28px]">Fleet Supervisor</h1>
            <p className="text-[#495567] text-[15px] leading-[25px]">Jakarta, Indonesia</p>
          </div>
          <div className="flex justify-center">
                    <div className=" flex justify-center items-center  mt-[16px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Apply</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
      </div>



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px] md:flex-row md:justify-between w-[689px]">
          <div className="text-center md:text-left">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px] md:text-[24px] md:leading-[28px]">UX Analyst</h1>
            <p className="text-[#495567] text-[15px] leading-[25px]">London, United Kingdom</p>
          </div>
          <div className="flex justify-center">
                    <div className=" flex justify-center items-center  mt-[16px]  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Apply</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
      </div>
    </section>
        
    </>
  )
}

export default Careers