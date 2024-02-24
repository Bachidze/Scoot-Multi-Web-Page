interface PropType {
    appear: (num: number) => void; 
    itemNum: any;
    title:string;
    paragraph:string;
    img:string;
    toggleNum:number;
}

const Toggle: React.FC<PropType> = ({ appear, itemNum,title,paragraph,img,toggleNum }) => { 
    return (
        <>
           

            <div className="items-center justify-center flex flex-col">
                <div>
                    <div className="bg-[#F2F5F9] h-[auto] pt-[32px] pb-[48px] pl-[28px] pr-[28px]">
                        <div className="flex pb-[24px]">
                            <h1 onClick={() => appear(toggleNum)} className="text-[#495567] text-[18px] font-bold leading-[24px] w-[300px] cursor-pointer">{title}</h1>
                            <img onClick={() => appear(toggleNum)} style={{ transform: itemNum === toggleNum ? 'rotate(180deg)' : '', transition: '1s' ,cursor:'pointer'}} src={img} alt="Arrow" />
                        </div>
                        {itemNum === toggleNum ? <p className="text-[#495567] leading-[25px] w-[280px] change">
                            {paragraph}
                        </p> : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Toggle;
