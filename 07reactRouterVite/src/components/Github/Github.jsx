import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const data= useLoaderData()
//     const [data,setData] = useState([])
//     useEffect (() => {
//  fetch('https://api.github.com/users/gargyash166')
//  .then(response => response.json())
//  .then(data =>{
//     console.log(data);
//     setData(data)
//  })
//     },[])
  return (
    <div className='text-center m-4 bg-gray-600 
    text-white p-4 text-3xl '>Github Follwers: {data.followers}
    <img src={data.avatar_url} width={300 } />
    </div> 
  )
}

export default Github

export const githubdataloader = async() =>{
    const response = await  fetch('https://api.github.com/users/gargyash166')
return response.json()
}