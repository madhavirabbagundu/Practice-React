import React from 'react'
import './cart.css'
import {Link} from 'react-router-dom'

function Cart(){
const [data,setData] = React.useState([])

React.useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
  .then((res)=>res.json())
  .then((json)=>setData(json))
},[])
console.log(data)

return(
  <>
  <div className='cart'>
{data.map((item)=>(
  <div className='cart1'>
    
    <img src = {item.image} alt=""/>

   <h5>Price:{item.price}</h5>
   <button className='button'>ADD TO CART</button>
   {/* <Link to = {`/${item.id}`}>ADD TO CART</Link> */}
    </div>
//   </div>
))}
  </div>
  </>
)
}
export { Cart }
