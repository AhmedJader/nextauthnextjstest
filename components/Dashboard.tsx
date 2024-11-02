"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const { data: session } = useSession();


    return (
        <>
            {session ? (
                <>  
                    <img src={session.user?.image as string} alt="user" className='rounded-full h-20 w-20' />
                    <h1 className='text-3xl text-white font-semibold uppercase mb-5'>Welcome Back!, {session.user?.name}</h1>
                    <p className='text-white'>Email: {session.user?.email}</p>
                    <button onClick={() => signOut( { callbackUrl: '/'} )} className='border border-black rounded-lg p-2 hover:animate-pulse hover:text-white mt-5'>Logout</button>
                </>
            ) : (
                <>
                    <h1 className='text-3xl text-white font-semibold uppercase'>You're Not Logged In!</h1>
                    <button onClick={() => signIn('google')} className='border border-black rounded-lg p-2 hover:animate-pulse hover:text-white mt-5'>Login with Google</button>
                    <button onClick={() => signIn('github')} className='border border-black rounded-lg p-2 hover:animate-pulse hover:text-white mt-5'>Login with Github</button>
                </>
            )}
        </>
    )
}

export default Dashboard