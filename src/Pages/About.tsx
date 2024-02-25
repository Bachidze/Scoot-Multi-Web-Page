import { useState } from "react"
import Toggle from "../components/Toggle"
import Toggle2 from "../components/Toggle2"
import { data, data2 } from "../togglee"

const About = () => {
  const [itemNum,setItemNum] = useState<number|null>(null)
  const [itemNum2,setItemNum2] = useState<number|null>(null)

  const appear = (active:number) => {
    if(itemNum === active){
      setItemNum(null)
    }else(
      setItemNum(active)
    )
  }
  const appear2 = (active2:number) => {
    if(itemNum2 === active2){
      setItemNum2(null)
    }else(
      setItemNum2(active2)
    )
  }

  return (

    <>
     <section className="flex justify-center items-center md:justify-start">
            <div className="absolute top-[70px] -z-10"> 
                <img loading="lazy" className="md:hidden" src="/assets/About.svg" alt="AboutFirstPhoto" />
                <img loading="lazy" className="hidden md:flex" src="/assets/2Tablet2First.svg" alt="" />
            </div>
            <div className="absolute text-white text-[40px] top-[130px] font-bold leading-[40px] -z-10 md:pl-[100px] md:pt-[10px]">
              <h1 className="md:text-[56px] md:leading-[56px]">About</h1>
            </div>
          
        </section>

        <section className="flex justify-center  items-center flex-col mt-[83px] relative bottom-[450px] -z-10">


            <div className="relative md:flex md:flex-col md:items-center md:justify-center md:top-[50px]">
                <img loading="lazy" className="md:w-[400px]" src="/assets/MobileGirl.svg" alt="MobileGirl" />
                <img loading="lazy" className="absolute top-[180px] left-[32px] md:hidden" src="/assets/ZigZag.svg" alt="ZigZag" />
                <img loading="lazy" className="hidden md:flex md:relative md:left-[20px] bottom-[170px]" src="/assets/TTTabletZZigZZag.svg" alt="ZigZag" />
                <img loading="lazy" className="hidden md:flex md:relative md:right-[330px] bottom-[320px]" src="/assets/Path 3 (1).svg" alt="ZigZag" />
            </div>
            <div className="md:relative md:bottom-[100px]">

                <h1 className="text-center mt-[56px] mb-[32px] text-[32px] w-[350px] text-[#495567] font-bold leading-[32px]  md:text-[48px] md:leading-[48px] md:w-[573px]">
                Mobility for the digital era
                </h1>

               <p className="text-center change w-[350px] text-[15px] text-[#939CAA] leading-[25px] md:w-[573px]"> 
                Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost,
                 smart access to scooters at your fingertips.
                </p>
            </div>



            <div className="relative top-[50px] mb-[40px] md:top-0">
                <img loading="lazy" className="md:w-[400px]" src="/assets/Train.svg" alt="Train" />
                <img loading="lazy" className="absolute top-[0px] right-[80px] md:hidden" src="/assets/2ZigZag.svg" alt="2ZigZag" />
                <img loading="lazy" className="hidden md:flex absolute top-[0px] right-[229px]" src="/assets/TabletcityZigZAG.svg" alt="2ZigZag" />
            </div>
            <div>
                <h1 className="text-center mt-[56px] mb-[32px] text-[32px]  w-[350px] font-bold leading-[32px] text-[#495567] md:text-[48px] md:leading-[48px] md:w-[573px]">
                Better urban living
                </h1>
                <p className="text-center change w-[350px] text-[15px] text-[#939CAA] leading-[25px] md:w-[573px]"> 
                We’re helping connect cities and bring people closer together.
                 Our scooters are also fully-electric and we offset the minimal
                  carbon footprint for each ride.
                </p>
            </div>
        </section>
        <section className="flex justify-center flex-col items-center  relative bottom-[350px]">
          <div>
            <h1 className="text-[32px] mb-[50px] leading-[32px] text-[#495567] md:text-[48px] md:leading-[48px] ">
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



        <section className="flex justify-center flex-col items-center  relative bottom-[350px] mt-[50px]">
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

        <section className="relative bottom-[200px] ml-[32px] mr-[32px] flex flex-col justify-center items-center">


          <h1 className="text-[#495567] text-[32px] leading-[32px] mb-[48px] font-bold md:text-[48px] md:leading-[48px] ">FAQs</h1>

          <div className="items-center justify-center flex flex-col gap-6">
          <h1 className="text-[#495567] text-[24px] leading-[28px] font-bold mb-[32px] md:text-[40px] md:leading-[48px]">How it works?</h1>
          {data.map(el =>(
            <Toggle
            appear={appear}
            img={el.img}
            toggleNum={el.toggleNum}
            paragraph={el.paragraph}
            itemNum={itemNum}
            title={el.title}
            />
          ))}
          </div>
        </section>



        <section className="relative bottom-[200px] ml-[32px] mr-[32px] flex flex-col justify-center items-center mt-[64px]">



          <div className="items-center justify-center flex flex-col gap-6">
                <h1 className="text-[#495567] text-[24px] leading-[28px] font-bold mb-[32px]">Safe driving</h1>

                {data2.map(el2 => (
                  <Toggle2
                  appear2={appear2}
                  img={el2.img2}
                  itemNum2={itemNum2}
                  paragraph={el2.paragraph2}
                  title={el2.title2}
                  toggleNum2={el2.toggleNum2}
                  />
                ))}
          </div>
        </section>
    </>
  )
}

export default About