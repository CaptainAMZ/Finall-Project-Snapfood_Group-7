import React from 'react'
import InfoTitle from './InfoTitle'
import FoodList from './FoodList'
import PageSides from './PageSides'
import { getLocalData } from '@/lib/localdata';

export default async function RestaurantInfo({params}) {
  const {foods,fcomments } = await getLocalData();
  return (
    <div className='flex flex-wrap pt-[68px] px-4 pb-4'>
      <div className='max-w-full basis-full p-[calc(1rem)] sm:basis-1/2 md:basis-1/4 md:max-w-[25%]'>
        <div className='sticky top-[4rem] right-0'>
          <InfoTitle params={params}/>
        </div>
      </div>
      <div className='max-w-full basis-full p-[calc(1rem)] sm:basis-1/2 sm:max-w-[50%]'>
        <FoodList foods={foods} fcomments={fcomments}/>
      </div>
      <div className='  max-w-full basis-full p-[calc(1rem)] md:basis-1/4 md:max-w-[25%] z-0'>
        <PageSides/>
      </div>
    </div>
  )
}