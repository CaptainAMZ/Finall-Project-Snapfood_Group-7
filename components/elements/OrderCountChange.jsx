import React from 'react'
import OrderCounter from './OrderCounter'
import GrayDeleteOrderBtn from './GrayDeleteOrderBtn'
import OrderIncreaseBtn from './OrderIncreaseBtn'
import OrderDecreaseBtn from './OrderDecreaseBtn'

// کامپوننت حذف سفارش، دکمه افزایش  و کاهش تعداد
// see OrderPriceQuantity.jsx

function OrderCountChange() {
  return (
    <div className='flex flex-col flex-nowrap items-center m-0 leading-[1.15rem]'>
        <div className='flex flex-row flex-nowrap justify-center items-center leading-[1.15rem]'>
            <GrayDeleteOrderBtn/>
            {/* <OrderDecreaseBtn/> */}
            <OrderCounter ordercount={'۱'}/>
            <OrderIncreaseBtn/>
        </div>
    </div>
  )
}

export default OrderCountChange