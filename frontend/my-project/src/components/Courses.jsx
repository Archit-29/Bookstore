import React, { useState,useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"

function Courses() {

  const [book,setBook]=useState([])
  useEffect(()=>{

    const getBook = async()=>{
      try{
        const res= await axios.get('http://localhost:4001/book');
        console.log(res.data)
        setBook(res.data)
      }catch(error){
        console.log(error);
      }
    }
getBook();
  },[])
  
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you 
          <span className='text-pink-500'> Here! :) </span>
        </h1>
        <p className='mt-10'>"We’re absolutely thrilled to have you with us! Our community is dedicated to fostering a 
          positive and enriching environment where you can explore new ideas, enhance your skills, and connect with others who share your passions. 
          Whether you're here for personal development, professional growth, or simply to enjoy the learning experience, we’re here to make your journey as smooth and enjoyable as possible. Together,
           let's create something amazing and make every moment count. Welcome aboard!"</p>
        <Link to="/">
        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>Back</button>
        </Link>
      
      </div>

      <div className='mt-6 grid grid-cols-1 md:grid-cols-4'>
        {book.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Courses