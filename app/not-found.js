import Image from "next/image"
import logo from '../public/images/images-home/logo.svg'
import notfound from '../public/images/images-home/error_404.png'


export default function NotFound(){


    return(
        <div className="flex flex-col justify-center items-center h-[66vh]">
           <div className="p-[1.25rem]">
                <a>
                    <Image src={logo} width={82} height={42}/>
                </a>
           </div>

           <div className="flex flex-col items-center justify-between pt-[6.8rem]">
                  

                    <Image  src={notfound} alt="Notfound" className="flex-grow"/>
                   

                   <p className="font-vrg text-scales-large my-6 w-full text-center">
                    صفحه ای که دنبالش بودید پیدا نشد!
                   </p>

                    <button className="bg-accent-main text-white px-28 py-2 border rounded-[.375rem] w-full cursor-pointer text-scales-default font-vb">
                        بازگشت به صفحه اصلی
                    </button>
           </div>
        </div>
    )
}