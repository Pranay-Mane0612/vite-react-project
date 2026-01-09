 import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'


export const Navbar = ({setdata}) => {
   const navigate=useNavigate()
    const [searchitem,setsearchitem]=useState("")

    const filterbyproduct=(category)=>{
     const element= items.filter((product)=>product.category==category)
     setdata(element)
    }

    const filterbyprice=(price)=>{
        const element= items.filter((product)=>product.price>=price)
    setdata(element)
    }

    const handledata=(e)=>{
        e.preventDefault()
        navigate(`/searchinfo/${searchitem}`)
    }
  return (<>
    <div className="navbar">
        <div className="brandname">
            <Link to={"/"}>
            <h2>E-cart</h2>
            </Link>
            </div>
        <div className="searchbar" >
            <form onSubmit={handledata}>
            <input type="text" placeholder='Search Your Product' onChange={(e)=>setsearchitem(e.target.value)} />
            </form>
        </div>
        <div className="cart">
  <Link to="/cart" style={{ textDecoration: "none" }}>
    <h5>Cart</h5>
  </Link>
</div>


    </div>
    <div className="navbar-wrap">   
     <div className="child1">Filters</div>
    <div className="child2" >Nofilters</div>
    <div className="child3" onClick={()=>filterbyproduct('mobiles')}>Mobiles</div>
    <div className="child4" onClick={()=>filterbyproduct('laptops')}>Laptops</div>
    <div className="child5" onClick={()=>filterbyproduct('tablets')}>Tablets</div>
    <div className="child6" onClick={()=>filterbyprice(29999)}>{">="}29999</div>
    <div className="child6" onClick={()=>filterbyprice(49999)}>{">="}49999</div>
    <div className="child6" onClick={()=>filterbyprice(69999)}>{">="}69999</div>
    <div className="child6" onClick={()=>filterbyprice(89999)}>{">="}89999</div>
    </div>


    </>
  )
}
export default Navbar