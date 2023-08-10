import React from 'react'
import VentorIcon from '@/public/images/icon-ventor.svg'
import VentorPrice from './VentorPrice'
import { useParams } from 'next/navigation'

// آیکون و کامپوننت پیک فروشنده
function Ventor
({
 restaurants
})
{

  
  const {restaurant} = useParams()
  const deliveryCost = restaurants.find(items => items.id == restaurant).delivery.price

  return (
    // white bg container
    <div className='flex flex-row flex-nowrap px-3 py-1 mb-2 bg-surface-light border-[1px] border-carbon-alphaLight rounded-lg'>
        <div className='flex flex-1 flex-row flex-nowrap justify-between items-center py-3'>
          
            <div className='flex flex-row flex-nowrap items-center'>
                {/* ventor icon */}
                <VentorIcon className='ml-4'/>
                {/* ventor's price, see VentorPrice.jsx */}
                <VentorPrice price={deliveryCost}/>
            </div>
          
        </div>
    </div>
  )
}

export default Ventor