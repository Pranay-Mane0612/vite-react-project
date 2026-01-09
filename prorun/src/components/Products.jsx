import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({items,addToCart}) => {
  return (
    <>
    <div className="container">
    <div className="row">
    {
        items.map((pro)=>{
           return(
            <>
            <div className="col-lg-4">
            <div className="card" style={{width:"18rem"}}>
         <Link to={`/products/${pro.id}`}>  
         <img src={pro.imgSrc} className="card-img-top" alt="..."/>
         </Link>
           <div className="card-body">
           <h5 className="card-title">{pro.title}</h5>
           <h5 className="card-title">{pro.category}</h5>
           <p className="card-text">{pro.description}</p>
           <button className="btn btn-primary" >{pro.price}₹
           </button>
           <button
  className="btn btn-warning"
  onClick={() => addToCart({ 
      ...pro, 
      quantity: 1 // make sure quantity exists
  })}
>
  ADD CART
</button>

           </div>
            </div>
            </div>
            </>
           )
        })
    }
    </div>
    </div>
    </>
  )
}
export default Product