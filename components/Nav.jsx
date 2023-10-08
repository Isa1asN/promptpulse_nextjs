"use client"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@public/assets/logo.svg'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth'
const Nav = () => {
  const isUserLoggedIn = false

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
        src={logo}
        alt='logo'
        width={40}
        height={40}
        className='object-contain'
        />
        <p className='logo_text'>PromptPulse</p>
      </Link>
      {/* for mobile  */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? <div className='flex gap-3 md:gap-5'>
          <Link href="/create-prompt" className='black_btn'>
            Create Post
          </Link>

        </div> : <></>}
      </div>
      
    </nav>
  )
}

export default Nav