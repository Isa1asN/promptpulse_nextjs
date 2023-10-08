"use client"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@public/assets/logo.svg'
import newuser from '@public/assets/newuser.png'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth'

const Nav = () => {
  const isUserLoggedIn = true
  const [providers, setProviders] = useState(null)
  useEffect(()=>{
      const setProviders = async ()=>{
        const response = await getProviders()
        setProviders(response)
      }
      setProviders()
  }, [])

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
      {/* for desktop navigation   */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? <div className='flex gap-3 md:gap-5'>
          <Link href="/create-prompt" className='black_btn'>
            Create Post
          </Link>

          <button type='button' onClick={signOut} className='outline_btn'>
            Sign Out
          </button>

          <Link href='/profile'>
            <Image src={newuser} width={37} height={37} alt='pro_img' className='rounded-full'/>
          </Link>

        </div> : <>
                    {providers && Object.values(providers).map((provider) => (
                      <button  type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
                          Sign In
                      </button>
                    ))

                    }
                </>}
      </div>
      
    </nav>
  )
}

export default Nav