import { Armchair, Check, Info, Snail } from 'lucide-react'
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

      <div className="navbar_middle flex items-center justify-between">
        <div className="lg:container">
            <div className="logo_wrapper">
                <Link to = "/" className='text-3xl text-black font-inter font-medium capitalize flex items-center gap-2'
                <Snail />
                Veiluxe 

                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
