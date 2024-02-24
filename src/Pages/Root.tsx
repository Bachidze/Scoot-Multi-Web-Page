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
        <section className="flex justify-center  items-center relative bg-white pt-[22px] pb-[22px]">
            <div onClick={appear} className="ml-[33px] absolute left-0 bottom-[28px] cursor-pointer">
                <img onClick={appear} src={show ? X:Menu} alt="" />
            </div>
            <div className="flex">
                <h1 className="text-[#333A44] text-[20px] font-bold">Scoot</h1>
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
                <img src="/assets/Group 22 (3).svg" alt="Ovals" />
            </div>
            <div className="absolute top-[88px]">
                <div className="mb-[40px]">
                    <h1 className="text-[32px] text-white leadin-[32px] w-[350px] font-bold text-center">Sign up and Scoot off today</h1>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <img src="/assets/Apple.svg" alt="Apple" />
                    <img src="/assets/PlaySotre.svg" alt="PlayStore" />
                </div>
            </div>
        </section>
        <section className="flex flex-col justify-center items-center  bg-[#333A44]">
            <div className="mt-[100px] mb-[41px]">
                <nav>
                    <ul className="flex flex-col relative bottom-9 gap-6 items-center ">
                        
                        <li className="text-[#E5ECF4]  font-bold mb-[41px] text-[32px]"><Link to={'/'}>Scoot</Link></li>
                        <li className="text-[#939CAA] leading-[25px] text-[15px] font-bold"><Link to={'about'}>About</Link></li>
                        <li className="text-[#939CAA] leading-[25px] text-[15px] font-bold"><Link to={'location'}>Location</Link></li>
                        <li className="text-[#939CAA] leading-[25px] text-[15px] font-bold"><Link to={'careers'}>Careers</Link></li>
                        
                    </ul>
                </nav>
            </div>
            <div className="flex gap-4 mb-[88px] ">
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