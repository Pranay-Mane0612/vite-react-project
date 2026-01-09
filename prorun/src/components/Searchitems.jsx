import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Products'

export const Searchitems = () => {

    const {term}=useParams()
    const [filterdata,setfilterdata]=useState([])
        useEffect(()=>{
            const filtdata=()=>{
                const ele=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()))
            setfilterdata(ele)
            }
            filtdata()
            
        },[term])  
    
  return (<>
   <h3 className='text-center'>Searchitems</h3>
    <Product items={filterdata}/>
    </> )
}
export default Searchitems