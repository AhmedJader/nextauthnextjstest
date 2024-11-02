import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../../../lib/authOptions';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return (
    <section className='container h-screen flex items-center justify-center'>
        <div className='w-[800px]'>

        </div>
    </section>
  )
}

export default page