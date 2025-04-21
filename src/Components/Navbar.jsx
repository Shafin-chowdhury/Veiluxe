import { Armchair, Check, Info, Search, ShoppingBagIcon, ShoppingBasketIcon, Snail } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className='navbar_top flex items-center justify-center bg-[#c05086] h-[45px] w-full'>
        <div className='lg:container flex justify-between items-center'>
            <p className='flex items-center gap-2 text-sm font-inter font-normal text-white capitalize'>
                <Check />
     Free on all orders over $50
            </p>
            <div className='navbar_top_right flex items-center gap-6'>
            <select defaultValue="Server location" className="bg-[#c05086] h-[30px] w-[70px] text-sm font-inter font-normal capitalize text-white">
            <option disabled={true}>Select Language</option>
            <option>Bangla</option>
            <option>English</option>
  
</select>

<button><Link className='text-sm text-white font-inter font-normal  capitalize'>Faqs</Link></button>
<button><Link className='text-sm text-white font-inter font-normal  capitalize items-center flex'><Info />Need Help?</Link></button>
            </div>

        </div>

      </div>



      {/* Navbar Main */}

      <div className="navbar_middle flex items-center justify-center bg-slate-300 w-full h-[84px]">
        <div className="lg:container grid grid-cols-3 items-center">
            <div className="logo_wrapper">
                <Link to = "/" className='text-3xl text-black font-inter font-medium capitalize flex items-center gap-2'>
                <Snail />
                Veiluxe
                </Link>
            </div>



            <div className='search_box'>
              <form action="#" className='max-w-96 h-[44px] relative'>
                <input type='text' placeholder='Search Here.....' className='w-full h-full bg-white rounded-lg pl-4' />
                <button className='absolute to-50% right-4 translate-y-1/2'> <Search size='22px' /></button>
              </form>
            </div>


            {/* <div className="navbar_middle_right flex items-center gap-6">
              <button className='btn capitalize'>
                <ShoppingBagIcon />Cart
                <div className="badge badge-sm bg-slate-300">2</div>
              </button>
            </div> */}
<div className="navbar_middle_right flex items-center gap-6">
  <button className="btn capitalize flex items-center gap-2 relative">
    <div className="relative rounded-full bg-gray-200 p-2 flex items-center justify-center">
      <ShoppingBagIcon className="w-5 h-5 text-black" />
      <div className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
        2
      </div>
    </div>
  </button>

  <ul className="flex items-center gap-2">
    <li className="rounded-full bg-gray-200 px-4 py-2 text-sm cursor-pointer hover:bg-gray-300">Sign In</li>
    <li className="rounded-full bg-gray-200 px-4 py-2 text-sm cursor-pointer hover:bg-gray-300">Sign Out</li>
  </ul>
</div>
   


   {/* <div className='flex items-center gap-4' >
    <ul className='flex items-center gap-2 relative ' >
      <li className='relative rounded-full bg-gray-200 p-2 flex items-center justify-center'>Sign In</li>
      <li className='relative rounded-full bg-gray-200 p-2 flex items-center justify-center'>Sign Out</li>
    </ul>
   </div> */}






        </div>
      </div>
    </div>
  )
}

export default Navbar
