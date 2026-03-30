"use client"
import logo from "../../assets/images/Component 1.svg"
import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { IoHeadset, IoSearchSharp } from "react-icons/io5"
import { FaShoppingCart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { FiUser } from "react-icons/fi"
import { HiMenu } from "react-icons/hi"
export default function NavBar() {
  return (
    <NavigationMenu className="py-2 xl:px-2 sm:px-10  sticky top-0 z-50 w-full block max-w-none  pr-4 bg-white shadow">
      <NavigationMenuList className="flex justify-between w-full gap-4">
        
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="hover:bg-transparent">
            <Link href="/"><img src={logo.src} alt="LogoSite" className="shrink-0" /></Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden lg:block flex-1 w-full">
          <NavigationMenuLink asChild className="hover:bg-transparent">
            <div className="relative">
              <IoSearchSharp className="absolute right-3.5 text-white rounded-full p-2.5 cursor-pointer hover:bg-[#138e40] transition-all bg-[#16A34A] box-content"/>
              <input type="text" placeholder="Search for products, prands and more..." 
              className="w-full transition-all focus:border focus:border-[#16A34A] focus:outline-3 focus:outline-emerald-100 rounded-full py-3 pl-5 pr-12 border border-[#E5E7EB]"/>
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <div className="xl:flex items-center gap-6 text-[16px] text-[#364153] mx-2 hidden ">
              <Link href="/" className="cursor-pointer hover:text-green-500 transition-all">Home</Link>
              <Link href="/shop" className="cursor-pointer hover:text-green-500 transition-all">Shop</Link>
              <div>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0 text-[16px] cursor-pointer hover:text-green-500 transition-all">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent className="duration-0 animate-none">
                  <ul className="w-96">
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built with Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </div>
              <Link href="/brands" className="cursor-pointer hover:text-green-500 transition-all">Brands</Link>
            </div>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:opacity-70 transition-all">
            <IoHeadset className="rounded-full p-3 text-[#0e923c] bg-[#0eb5351a] box-content"/>
            <div className="text-[12px]">
              <div className="text-gray-400">Support</div>
              <div >24/7 Help</div>
            </div>
          </div>
          <span className="hidden lg:flex w-px h-8 bg-gray-200"></span>
          <div className="flex items-center gap-2">
            <div className="cursor-pointer hover:text-green-600 transition-all p-3 rounded-full text-gray-500 text-xl hover:bg-gray-100">
              <FaRegHeart/>
            </div>
            <div className="cursor-pointer hover:text-green-600 transition-all p-3 rounded-full text-gray-500 text-xl hover:bg-gray-100">
            <FaShoppingCart />
            </div>
          </div>
          <Button className="cursor-pointer hover:bg-green-700 rounded-full text-white bg-green-600 p-5 hidden lg:flex">
            <Link href="/login" className="flex items-center gap-3">
              <FiUser />
              <span>Sign In</span>
            </Link>
          </Button>
          
          <Button className="cursor-pointer hover:bg-green-700 rounded-full text-white bg-green-600 px-3 py-5 flex lg:hidden">
            <HiMenu/>
          </Button>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
