import React from 'react'
import { IData } from '../lib/data'
import Image from 'next/image'

const ProjectCard = ({img,name,link}:IData) => {
  return (
    <div className=' w-[310px] transition-all hover:scale-105 lg:w-[400px] h-[240px] bg-black p-2 rounded-md  flex  items-center flex-col'>
                    <Image className='object-cover w-full h-[80%] rounded-md ' src={img} height={180} width={300} alt='img' />
                    <div className='flex justify-between w-full items-center h-[20%]'>
                    <p>{name}</p>
                    <a target='_blank'
                    className='bg-white  px-2 p-1 text-sm transition-all hover:scale-95 rounded-md text-black'
                    href={link}> Demo Link </a>
                    </div>
                </div> 
  )
}

export default ProjectCard