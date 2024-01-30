import  { useState } from 'react'
// import { Data } from '../Data'
import Hero from './Hero'
import { CiSearch } from "react-icons/ci";
// import Hero from './Hero';


const Navbar = () => {
    const [visible , setVisble] = useState(false)
      const handleClick = () => {
        setVisble(!visible)
    }  
  return (  
    <>   
      <nav className='p-0    shadow-sm shadow-gray-500/50 m-0 sticky top-0 left-0 bg-white'>
<div className="p-4  flex items-center justify-between border-b-2 md:hidden">
    {/* SMALL SCREEN */}
    <div className="logo text-2xl">ACTIVATOR<span className=' text-gray-600'>   HQ</span></div>

    <div className="flex gap-3">
      <div className=' mt-2'>
      <span onClick={handleClick} className='  cursor-pointer mt-8'><CiSearch size={20} /></span>
      {
          visible ? <div className='   z-50   flex items-center 
      fixed top-0 left-0 w-full
          ' >
        <input type="text" className=' border p-3 px-36 mt-16 mx-auto absolute top-20 translate-x-16 z-50' />
          </div> : null
      }
      </div>
        <h4 className=' text-black mt-2 hover:underline'>SIGN IN</h4>
        <button className='p-9 w-20 justify-center gap-x-1.5 rounded-md   text-white bg-red-700 px-3 py-2 text-sm font-semibold 
        shadow-sm   hover:bg-black'>Join</button>
    </div>
</div>
{/* MEDIUM SCREEN */}
<div className=" hidden sm:hidden md:flex items-center justify-between p-4 border-b-2">
<div className=' mt-2'>
      <span onClick={handleClick} className='  cursor-pointer mt-8'><CiSearch size={20} /></span>
      {
          visible ? <div className='   z-50   flex items-center 
      fixed top-0 left-0 w-full
          ' >
        <input type="text" className=' border p-3 px-36 mt-16 mx-auto absolute top-20 translate-x-16 z-50' />
          </div> : null
      }
      </div>
      <div className="logo text-4xl ">ACTIVATOR<span className=' text-gray-600'>   HQ</span></div>
      <div className="flex">
      <h4 className=' text-black mt-2  text-xl pr-2 hover:underline cursor-pointer'>SIGN IN</h4>
        <button className='p-9 w-20 justify-center gap-x-1.5 rounded-md   text-white bg-red-700 px-3 py-2 text-sm font-semibold 
        shadow-sm   hover:bg-black'>Join</button>
      </div>
      
</div>
<div className="flex p-3 overflow-x-scroll border-r-[20px] border-white no-scrollbar lg:hidden">
<ul className=' flex gap-2 font-bold '>
<li className='border-r pr-1 border-red-950 md:text-lg' >HOME</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>ABOUT</li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>OUR</span> <a href="">SERVICES</a></li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>BUSINESS </span> <a href="">  IDEAS</a></li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>BUSINESS </span> <a href=""> PLANS</a></li>
<li className=' flex border-r pr-1 border-red-950 md:text-lg'><a href="#" className=' flex'>FUNDRAISING</a></li>
<li className='border-r pr-1 border-red-950 md:text-lg'>COURSES</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>PODCAST</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>CONTACT</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>PRESS</li>
<li className=' border-red-950'></li>
</ul>
</div>
{/* MEDIUM SCREEN */}
<div className=" hidden sm:hidden md:hidden lg:flex lg:p-3 lg:px-5  border-r-[20px] border-white lg:mx-auto lg: overflow-x-scroll no-scrollbar xl:hidden">
<ul className=' flex gap-2 font-bold lg:gap-5 '>
<li className='border-r pr-1 border-red-950 md:text-lg' >HOME</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>ABOUT</li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>OUR</span> <a href="">SERVICES</a></li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>BUSINESS </span> <a href="">  IDEAS</a></li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>BUSINESS </span> <a href=""> PLANS</a></li>
<li className=' flex border-r pr-1 border-red-950 md:text-lg'><a href="#" className=' flex'>FUNDRAISING</a></li>
<li className='border-r pr-1 border-red-950 md:text-lg'>COURSES</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>PODCAST</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>CONTACT</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>PRESS</li>
</ul>
</div>
{/* Extra Large */}
<div className=" hidden sm:hidden md:hidden lg:hidden   xl:flex">
<ul className=' flex gap-2 font-bold xl:py-3 xl:pl-6 xl:mx-auto xl:gap-2  '>
<li className='border-r pr-1 border-red-950 md:text-lg' >HOME</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>ABOUT</li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>OUR</span> <a href="">SERVICES</a></li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>BUSINESS </span> <a href="">  IDEAS</a></li>
<li className=' flex gap-1 border-r pr-1 border-red-950 md:text-lg'><span>BUSINESS </span> <a href=""> PLANS</a></li>
<li className=' flex border-r pr-1 border-red-950 md:text-lg'><a href="#" className=' flex'>FUNDRAISING</a></li>
<li className='border-r pr-1 border-red-950 md:text-lg'>COURSES</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>PODCAST</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>CONTACT</li>
<li className='border-r pr-1 border-red-950 md:text-lg'>PRESS</li>
</ul>
</div>

      </nav>

<Hero />
    </>
  )
}

export default Navbar
