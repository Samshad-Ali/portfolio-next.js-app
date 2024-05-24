import React from 'react'
import data from '../lib/data'
import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'

const page = () => {
  return (
    <div className='w-full h-full flex justify-center flex-col gap-4 items-center'>
        <h2 className='text-xl font-semibold border-b '>Projects</h2>
        <div className='flex flex-wrap gap-8 items-center justify-center'>
            {
                data?.map((item)=><ProjectCard {...item} />)
            }
        </div>
    </div>
  )
}

export default page