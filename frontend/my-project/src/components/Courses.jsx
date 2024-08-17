import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Courses() {
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you 
          <span className='text-pink-500'> Here! :) </span>
        </h1>
        <p className='mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum dolorum quibusdam harum dolorem a dolor soluta voluptate, accusantium veniam. Molestiae asperiores commodi quibusdam esse enim ea distinctio atque doloribus repudiandae.
        Excepturi dolorum magnam ab, eum temporibus commodi mollitia sequi ullam enim odit deleniti.
         Perspiciatis temporibus sint aperiam earum! Quia magnam ad autem vitae
        labore ex dolorum voluptatem delectus quae perspiciatis.</p>
        <Link to="/">
        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>Back</button>
        </Link>
      
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Courses