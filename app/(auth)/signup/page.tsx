"use client"
import { useForm } from 'react-hook-form'
import { FaShieldAlt } from 'react-icons/fa'
import { FaEye, FaFacebook, FaGoogle, FaPhone, FaStar, FaTruckFast, FaUser, FaUserPlus } from 'react-icons/fa6'
import { IoLockClosed } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

export default function Signup() {
  const {register , handleSubmit} = useForm({
    defaultValues:{
      name: "",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    }
  })

  function handleSignUp(){
    
  }
  return (
    <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4 mt-10 text-gray-700">
      <div>
        <h1 className="text-4xl font-bold">Welcome to <span className="text-green-600">FreshCart</span></h1>
        <p className="text-xl mt-2 mb-4">Join thousands of happy customers who enjoy fresh groceries delivered right to
          their doorstep.</p>
        <ul className="*:flex *:items-start *:gap-4 space-y-6 my-8">
          <li>
            <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
              <FaStar/>
              </div>
            <div className="content">
              <h2 className="text-lg font-semibold">Premium Quality</h2>
              <p className="text-gray-600">Premium quality products sourced from trusted suppliers.</p>
            </div>
          </li>
          <li>
            <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
              <FaTruckFast />
              </div>
            <div className="content">
              <h2 className="text-lg font-semibold">Fast Delivery</h2>
              <p className="text-gray-600">Same-day delivery available in most areas</p>
            </div>
          </li>
          <li>
            <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
              <FaShieldAlt />
              </div>
            <div className="content">
              <h2 className="text-lg font-semibold">Secure Shopping</h2>
              <p className="text-gray-600">Your data and payments are completely secure</p>
            </div>
          </li>
        </ul>
        <div className="review bg-white shadow-sm p-4 rounded-md">
          <div className="author flex items-center gap-4 mb-4">
            <FaUser className="rounded-full text-gray-700 bg-gray-300 text-2xl p-2 box-content"/>
            <div>
              <h3>Divid Johnson</h3>
              <div className="flex itms-center gap-1 *:text-yellow-300">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
            </div>
          </div>
          <blockquote>
            <p className="italic text-gray-600">FreshCart has transformed my shopping experience. The quality of the
              products is outstanding, and the delivery is always on time. Highly recommend!</p>
          </blockquote>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
        <h2 className="text-center text-3xl font-semibold mb-2">Create Your Account</h2>
        <p className="text-center">Start your fresh journey with us today</p>
        <div className="register-options flex gap-2 *:grow my-10">
          <button type="button" className="cursor-pointer w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200">
            <FaGoogle className='text-red-500 text-xl'/>
            <span className="text-gray-700 font-semibold">Google</span>
          </button>
          <button type="button" className="cursor-pointer w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200">
            <FaFacebook className='text-blue-600 text-xl'/>
            <span className="text-gray-700 font-semibold">Facebook</span>
          </button></div>
        <div className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4" aria-hidden="true"><span className="sr-only">or</span></div>
        <form onSubmit={()=>handleSubmit(handleSignUp)} className="space-y-7" noValidate>
          <div className="flex flex-col gap-2"><label htmlFor="name">Name*</label>
            <div className="relative">
              <input className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" placeholder="Enter your name" id="name" type="text" {...register("name")} />
              <FaUser className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-xl'/>
            </div>
          </div>
          <div className="flex flex-col gap-2"><label htmlFor="email">Email*</label>
            <div className="relative">
            <input className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" placeholder="Enter your email" id="email" type="email" {...register("email")} />
            <MdEmail className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-xl'/>
          </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2"><label htmlFor="password">Password*</label>
              <div className="relative"><input id="password" className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" placeholder="Enter your password" type="password" {...register("password")} />
                  <IoLockClosed className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-xl'/>
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <FaEye className='absolute top-1/2 -translate-y-1/2 right-2 text-xl'/>
                  {/* <FaEyeSlash className='absolute top-1/2 -translate-y-1/2 right-2 text-xl'/> */}
                </button>
              </div>
              <div className="password-requirements">
                <div className="flex items-center gap-2">
                  <div className="bar grow h-1 bg-gray-200 rounded-md overflow-hidden" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} aria-label="Password strength: Weak">
                    <div className="progress bg-red-500 h-full transition-all duration-300 ease-out" style={{ width: '0%' }} />
                  </div><span className="text-sm font-medium min-w-12.5">Weak</span>
                </div>
              </div>
              <p className="text-gray-500 -mt-2 text-xs">Must be at least 8 characters with numbers and symbols</p>
            </div>
          </div>
          <div className="flex flex-col gap-2"><label htmlFor="rePassword">Confirm Password*</label>
            <div className="relative"><input id="rePassword" className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" placeholder="Confirm password" type="password" {...register("rePassword")} />
                <IoLockClosed className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-xl'/>
            </div>
          </div>
          <div className="flex flex-col gap-2"><label htmlFor="phone">Phone Number*</label>
            <div className="relative">
              <input id="phone" className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all" placeholder="+1 234 567 8900" type="tel" {...register("phone")} />
              <FaPhone className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-xl'/>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2"><input id="terms" className="size-4 accent-green-600" type="checkbox" name="terms" /><label htmlFor="terms" className="ms-2">I agree to the <a className="text-green-600 hover:underline" href="/terms">Terms of Service</a> and <a className="text-green-600 hover:underline" href="/privacy-policy">Privacy Policy</a> *</label>
            </div>
          </div><button type="submit" className="flex justify-center items-center gap-2 cursor-pointer p-3 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors" aria-busy="false">
            <FaUserPlus/>
            <span>Create My Account</span></button>
        </form>
        <p className="border-t pt-10 border-gray-300/30 my-4 text-center">Already have an account? <a className="text-green-600 hover:underline font-medium" href="/login">Sign In</a></p>
      </div>
    </div>

  )
}
