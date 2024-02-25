import { useState } from "react"
import { Link,Outlet } from "react-router-dom"
import './Root.css'
const Root = () => {
    const [show,setShow] = useState(false)
    const appear = () => {
        setShow(!show)
    }

    const Menu = "/assets/Yellow Brgr.svg"
    const X = "/assets/Yellow X.svg"
  return (
    <>
    <header > 
        <section className="flex   items-center justify-center relative bg-white pt-[22px] pb-[22px] md:justify-between md:items-center md:pl-[39px] pr-[39px]">
            <div onClick={appear} className="ml-[33px] absolute left-0 bottom-[28px] cursor-pointer  md:hidden">
                <img onClick={appear} src={show ? X:Menu} alt="" />
            </div>
            <div className="flex md:pr-[58px] md:items-center">
                <h1 className="text-[#333A44] text-[20px] font-bold md:text-[30px]"><Link to={'/'}>Scoot</Link></h1>
            </div>
            <div className="hidden md:flex gap-8 relative top-[2px] md:pr-[100px]">
                    <h1 className="text-[#939CAA]  text-[15px] font-bold"><Link to={'about'}>About</Link></h1>
                    <h1 className="text-[#939CAA]  text-[15px] font-bold"><Link to={'location'}>Location</Link></h1>
                    <h1 className="text-[#939CAA]  text-[15px] font-bold"><Link to={'careers'}>Careers</Link></h1>
            </div>
            <div className="hidden md:flex justify-end">
                    <div className=" flex justify-center items-center  bg-[#FCB72B] w-[192px] h-[53px]">
                        <nav>
                            <ul>
                            <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Get Scootin</Link></li>  
                            </ul>
                        </nav>
                    </div>
                </div>
        </section>
        <section  className={`pl-[33px] bg-[#333A44] w-[256px] h-[603px] flex flex-col justify-around  section-transition ${show ? '' : 'section-hidden'}`}>
            <nav>
                <ul className="flex flex-col relative bottom-9 gap-6">
                    
                    <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'about'}>About</Link></li>
                    <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'location'}>Location</Link></li>
                    <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'careers'}>Careers</Link></li>
                    
                </ul>
            </nav>
            <div className=" flex justify-center items-center relative top-[50px] bg-[#FCB72B] w-[192px] h-[53px]">
                <nav>
                    <ul>
                    <li className="text-[#E5ECF4] text-[18px] font-bold"><Link to={'/'}>Get Scootin</Link></li>  
                    </ul>
                </nav>
            </div>
        </section>
    </header>
        <main>
            <section>
                <Outlet/>
            </section>    

        </main>
        <footer>
        <section className="flex flex-col justify-center items-center bg-[#495567] relative">
            <div className="pt-[147px]">
                <img loading="lazy" className="md:hidden" src="/assets/Group 22 (3).svg" alt="Ovals" />
                <img loading="lazy" className="hidden md:flex" src="/assets/2TabletFooter.svg" alt="" />
            </div>
            <div className="absolute top-[88px]">
                <div className="mb-[40px]">
                    <h1 className="text-[32px] text-white leadin-[32px] w-[350px] font-bold text-center md:text-[48px] md:leading-[48px] md:w-[457px]">Sign up and Scoot off today</h1>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <img src="/assets/Apple.svg" alt="Apple" />
                    <img src="/assets/PlaySotre.svg" alt="PlayStore" />
                </div>
            </div>
        </section>
        <section className="flex flex-col justify-center items-center  bg-[#333A44] md:flex-row md:items-center md:justify-between md:pl-[40px] md:pr-[40px]">
            <div className="mt-[100px] mb-[41px] md:mt-9 md:mb-0 md:flex md:pt-[35px]">
                <nav>
                    <ul className="flex flex-col relative bottom-9 gap-6 items-center md:flex-row ">
                        
                        <li className="text-[#E5ECF4]  font-bold mb-[41px] text-[32px] md:mb-2 md:pr-[40px] md:text-[40px]"><Link to={'/'}>Scoot</Link></li>
                        <li className="text-[#939CAA] leading-[25px] text-[15px] font-bold"><Link to={'about'}>About</Link></li>
                        <li className="text-[#939CAA] leading-[25px] text-[15px] font-bold"><Link to={'location'}>Location</Link></li>
                        <li className="text-[#939CAA] leading-[25px] text-[15px] font-bold"><Link to={'careers'}>Careers</Link></li>
                        
                    </ul>
                </nav>
            </div>
            <div className="flex gap-4 mb-[88px] md:mb-0">
                <img src="/assets/FaceBoook.svg" alt="Facebook" />
                <img src="/assets/TTWWitter.svg" alt="Twitter" />
                <img src="/assets/Insstaggram.svg" alt="Insta" />
            </div>
        </section>
        </footer>
    
    </>
  )
}

export default Root