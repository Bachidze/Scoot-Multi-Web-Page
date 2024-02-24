import { Link } from "react-router-dom"
const Careers = () => {
  return (
    <>
     <section className="flex justify-center items-center">
            <div className="absolute top-[70px] -z-10"> 
                <img loading="lazy" src="/assets/careersMobile.svg" alt="CareersFirstPhoto" />
            </div>
            <div className="absolute text-white text-[40px] top-[130px] font-bold leading-[40px] -z-10">
              <h1>Careers</h1>
            </div>
          
        </section>

        <section className="flex justify-center  items-center flex-col mt-[83px] relative bottom-[450px] -z-10">


<div className="relative">
    <img loading="lazy" src="/assets/CareersMobile2.svg" alt="Careers2PhotMobile" />
    <img loading="lazy" className="absolute top-[180px] left-[32px]" src="/assets/ZigZag.svg" alt="ZigZag" />
</div>
<div>

    <h1 className="text-center mt-[56px] mb-[32px] text-[32px] w-[350px] text-[#495567] font-bold leading-[32px]">
    Care to join our mission?
    </h1>

   <p className="text-center change w-[350px] text-[15px] text-[#939CAA] leading-[25px]"> 
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
    <section className="relative bottom-[100px]">


            <section className="flex justify-center flex-col items-center  relative bottom-[350px]">
              <div>
                <h1 className="text-[32px] mb-[50px] leading-[32px] text-[#495567]">
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
                  <p className="w-[300px] text-center text-[15px] text-[#939CAA] change">
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
                  <p className="w-[300px] text-center text-[15px] text-[#939CAA] change">
                  We are fully committed to deliver a great
                  yet safe, sustainable micro-mobility 
                  experience in every city we serve.
                  </p>
                </div>
              </div>
            </section>



            <section className="flex justify-center flex-col items-center  relative bottom-[350px] mt-[50px]">
              <div className="flex flex-col items-center">
                <img loading="lazy" src="/assets/man.svg" alt="Man" />
                <div className="bg-[#FCB72B] w-[60px] h-[60px] rounded-[50%] flex justify-center items-center relative bottom-[35px]">
                  <h1 className="text-[#495567] text-[20px] leading-[24px]">03</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="mb-[27px] text-[#495567] text-[24px] font-bold">Our community</h1>
                  <p className="w-[300px] text-center text-[15px] text-[#939CAA] change">
                  We support every community we serve. All workers are paid a
                  living wage based on their location and are Scoot employees.
                  </p>
                </div>
              </div>
            </section>
    </section>

    <section className=" relative bottom-[350px] flex flex-col gap-6"> 
      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px]">
          <div className="text-center">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px]">General Manager</h1>
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



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px]">
          <div className="text-center">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px]">UI/UX Designer</h1>
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



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px]">
          <div className="text-center">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px]">Blog Content Copywriter</h1>
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



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px]">
          <div className="text-center">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px]">Graphic Designer</h1>
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



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px]">
          <div className="text-center">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px]">Fleet Supervisor</h1>
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



      <div className="bg-[#F2F5F9] ml-[32px] mr-[32px] pl-[32px] pr-[32px] flex justify-center gap-9 flex-col items-center pt-[36px] pb-[32px]">
          <div className="text-center">
            <h1 className="text-[#495567] text-[18px] font-bold leading-[24px]">UX Analyst</h1>
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