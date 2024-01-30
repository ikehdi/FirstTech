// import React from 'react'
import img1 from "../assets/img1.jpeg"
// import Business from "./Bussiness"

import HeroMedium from './HeroMedium'
// import Business from './Business'

const Hero = () => {
  return (
    <>
    <div className=' grid p-5 md:hidden '>
      <div className="flex flex-col p-5 ">
        <div className="  h-5 w-full mx-auto md:mb-[70px]  ">
          <img src={img1} alt=""  className=' h-60 w-96 object-cover md:w-[100%] sm:w-screen md:h-72 md:object-cover  '/>
        </div>
        <div className="mx-auto mt-[250px] text-xl">
          <h5 className=' text-center '>BUSINESS IDEAS</h5>
          <h2 className=' font-bold text-center text-2xl cursor-pointer hover:underline'>
          Business Ideas for 2024: Africas Top 100 Most Lucrative Opportunities
          </h2>
          <p className=' text-center mt-3'>The Africa Top 100 Guide by Activator HQ is the worlds best-curated intelligence on business opportunities in Africa that have a minimum market value of $100 million (each). Discover unique ideas for your next business, project, product, investment, or income stream in 2024.</p>
          <p className=' text-center mt-3 font-'>JOHN-PAUL IWUOHA.</p>
         
          <p className='font-bold  text-center'>October 16 , 2023</p>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className=" h-5 w-full mx-auto md:mb-[70px] ">
          <img src={img1} alt=""  className=' h-60 w-96 object-cover md:w-[100%] md:h-72 md:object-cover'/>
        </div>
        <div className="mx-auto mt-[230px] text-xl  border-b-2 pb-3">
         
          <p className=' text-left mt-3 font-'>FUNDRAISING</p>
          <h2 className=' font-bold text-left text-2xl cursor-pointer hover:underline'>
          Need to raise money for business in 2024? These are the Top 100 Places to target
          </h2>
          <p className=' text-left mt-2 hover:underline'>JOHN-PAUL IWUOHA</p>
         
          <p className='  text-left text-xs '>October 1 , 2023</p>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className=" h-5 w-full mx-auto md:mb-[70px] ">
          <img src={img1} alt=""  className=' h-60 w-96 object-cover md:w-[100%] md:h-72 md:object-cover'/>
        </div>
        <div className="mx-auto mt-[230px] text-xl   pb-3">
         
          <p className=' text-left mt-3 font-'>FUNDRAISING</p>
          <h2 className=' font-bold text-left text-2xl cursor-pointer hover:underline'>
          Need to raise money for business in 2024? These are the Top 100 Places to target
          </h2>
          <p className=' text-left mt-2 hover:underline cursor-pointer'>JOHN-PAUL IWUOHA</p>
          
          <p className='  text-left text-xs '>October 1 , 2023</p>
        </div>
      </div>
      <h1 className=' font-bold mb-2 ml-5 text-2xl'>Latest</h1>
      <div className="mb-[-150px]">
      <div className="flex items-center justify-between gap-">
        
        <div className="flex ml-5 border-t-2 pt-3 gap-6 sm: mb-[-160px]">
        <div className="flex basis-3/4 grow shrink flex-col md:basis">
         <h2 className=' font-bold'>BUSINESS IDEAS</h2>
         <h3 className=' font-bold  text-sm mb-1 cursor-pointer hover:underline'>Waste & Recycling Business Ideas for 2024: Africas top opportunities</h3>
         <div className="flex">
          <h2 className=' pr-3 text-xs'>JOHN-PAUL IWUOHA</h2>
          <span className=' pr-3 text-xs'>October12, 2023</span>
         </div>
        </div>
        <div className="flex basis-1/4 grow shrink lg:basis-[70rem] md:ml-[200px] lg:hidden ">
          <div className="img ">
<img src={img1} alt="" className='h-20 w-80 object-cover' />
          </div>
        </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        
        <div className="flex ml-5 border-t-2 pt-3 gap-6 sm: mb-[-160px]">
        <div className="flex basis-3/4 grow shrink flex-col">
         <h2 className=' font-bold'>BUSINESS IDEAS</h2>
         <h3 className=' font-bold  text-sm mb-1 cursor-pointer hover:underline'>Mining Business Ideas for 2024: Africas top opportunities</h3>
         <div className="flex">
          <h2 className=' pr-3 text-xs'>JOHN-PAUL IWUOHA</h2>
          <span className=' pr-3 text-xs'>October12, 2023</span>
         </div>
        </div>
        <div className="flex basis-1/4 grow shrink  lg:basis-[70rem] md:ml-[200px] ">
          <div className="img ">
<img src={img1} alt="" className='h-20 w-80 object-cover' />
          </div>
        </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        
        <div className="flex ml-5 border-t-2 pt-3 gap-6">
        <div className="flex basis-3/4 grow shrink flex-col sm: mb-[-160px]">
         <h2 className=' font-bold'>BUSINESS IDEAS</h2>
         <h3 className=' font-bold  text-sm mb-1 cursor-pointer hover:underline'>Cooking Gas Supplier Business Plan: Gas2You</h3>
         <div className="flex">
          <h2 className=' pr-3 text-xs'>JOHN-PAUL IWUOHA</h2>
          <span className=' pr-3 text-xs'>October12, 2023</span>
         </div>
        </div>
        <div className="flex basis-1/4 grow shrink 
        lg:basis-[70rem] md:ml-[200px] ">
          <div className="img ">
<img src={img1} alt="" className='h-20 w-80 object-cover' />
          </div>
        </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-5">
        
        <div className="flex ml-5 border-t-2 pt-3 gap-6 sm:mt-[-180px]">
        <div className="flex basis-3/4 grow shrink flex-col ">
         <h2 className=' font-bold'>BUSINESS IDEAS</h2>
         <h3 className=' font-bold  text-sm mb-1 cursor-pointer hover:underline'>Digital Skills Training & Outsourcing Business Plan: TechPro opportunities</h3>
         <div className="flex">
          <h2 className=' pr-3 text-xs'>JOHN-PAUL IWUOHA</h2>
          <span className=' pr-3 text-xs'>October12, 2023</span>
         </div>
        </div>
        <div className="flex  basis-1/4 grow shrink lg:basis-[70rem] md:ml-[200px]  ">
          <div className="img ">
<img src={img1} alt="" className='h-20 w-80 object-cover' />
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    {/* Meduim Screen */}
 <HeroMedium />
{/* <Business /> */}
    </>
  )
}

export default Hero
