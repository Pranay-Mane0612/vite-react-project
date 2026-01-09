import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Products';
 const Productsinfo = ({}) => {
    const {id}= useParams()

    const [product,setproduct]=useState({})
    const [relproduct,setrelproduct]=useState([])

    useEffect(()=>{
        const filterproduct=items.filter((product)=>product.id==id);

    setproduct(filterproduct[0]);

    const fc= items.filter((rohit)=>rohit.category==product.category)
    setrelproduct(fc);
    },[id,product.category])

 return (
<>
<h1>ProductInfo</h1>
<div className="container">
    <div className="row">
        <div className="col">
            <img src={product.imgSrc} style={{width:"300px",height:"300px"}}/>
            <div className="card-body">
           <h5 className="card-title">{product.title}</h5>
           <h5 className="card-title">{product.category}</h5>
           <p className="card-text">{product.description}</p>
           <button className="btn btn-primary" >{product.price}₹
           </button>
           <button className="btn btn-warning">ADD CART</button>
           </div>
        </div>
    </div>
</div>

<h4 className='text-center'>Releated Products</h4>
<Product items={relproduct}/>
</>  )
}
export default Productsinfo