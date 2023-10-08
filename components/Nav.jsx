"use client"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@public/assets/logo.svg'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth'
const Nav = () => {
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
      </Link>
      
    </nav>
  )
}

export default Nav