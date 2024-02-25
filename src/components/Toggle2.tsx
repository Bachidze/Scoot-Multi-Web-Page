import React from "react"


interface PropType2 {
    appear2:(num: number) => void;
    itemNum2:any;
    toggleNum2:number;
    img:string;
    title:string;
    paragraph:string
}

const Toggle2:React.FC<PropType2> = ({appear2,itemNum2,toggleNum2,img,title,paragraph}) => {
  return (
    <>
      <div>

            <div className="bg-[#F2F5F9] h-[auto] pt-[32px] pb-[48px] pl-[28px] pr-[28px]">
                    <div className="flex pb-[24px]">
                    <h1 onClick={()=> appear2(toggleNum2)} className="text-[#495567] text-[18px] font-bold leading-[24px] cursor-pointer w-[300px]  md:w-[650px] md:text-[24px] md:leading-[28px]">{title}</h1>
                        <img onClick={()=> appear2(toggleNum2)} style={{rotate: itemNum2 === toggleNum2 ?'180deg':'', transition:'1s', cursor:'pointer'}} src={img} alt="Arrow" />
                    </div>

                    { itemNum2 === toggleNum2 ? <p className="text-[#495567] leading-[25px] w-[280px] change md:w-[580px]">
                        {paragraph}
                        </p>: null}
            </div>
     </div>
    </>
  )
}

export default Toggle2