'use-client'


import React, { useState } from 'react'
import Image from 'next/image'
import clock from '../../public/images/images-home/clock.svg'
import OrderItem from './OrderItem'



export default function Orders() {


 
    return (

      // <div id='modal-root'>
        
      //     
      
      // <div>
  
      //   <OrderItem/>
      //   </div>
  
  
      //    
      //     <div id='prev-order-bill-modal' className='none'></div>
  
  
      // </div>
    
      <div  className=' scroll-hide bg-white min-w-[21rem] sm:min-w-[24rem] md:min-w-[25rem]  w-21 absolute left-spacing-0  min-h-screen py-spacing-0 px-spacing-2 overflow-y-scroll shadow-shadows-modal animate-order max-h-[100px]'>
                      
        <div className='mt-spacing-2 flex flex-col items-start w-full'>
  
          <p className='font-vsb text-.75 leading-lineHeight-caption inline-block text-carbon-light text-start w-full'>
                                        سفارش های پیشین
          </p>
          
          <div className='mt-spacing-16 border-t-[0.0625rem] border-r-[0.0625rem] border-l-[0.0625rem] border-carbon-alphaMedium rounded-t-xl  w-full'>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
          </div>
  
          <button className='h-[3.75rem] mt-spacing-11 mx-auto mb-spacing-0 inline-flex justify-center items-center cursor-pointer transition-all 
          w-auto min-w-[6.6875rem] shadow-shadows-medium  border-accent2-alphaLight border-[0.09375rem] rounded-[3rem] py[1px] px-[6px]'>
  
              <Image src={clock} width={17} height={18} />
  
              <p className='mr-spacing-1 font-vsb text-vm leading-lineHeight-body text-accent2-main inline-block tracking-tight'>
                مشاهده همه سفارش ها
              </p>
          </button>
  
        </div>
  
      </div>
  
     
      
    )


   
  
}