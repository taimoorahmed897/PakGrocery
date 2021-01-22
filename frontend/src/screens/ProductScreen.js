import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { detailsProduct } from '../actions/productsAction';


function ProductScreen(props){
   const [qty,setQty]=useState(1);
   const productDetails=useSelector(state=>state.productDetails);
   const {product,loading,error}=productDetails;
   const dispatch=useDispatch();
   useEffect(()=>{
       dispatch(detailsProduct(props.match.params.id));
       return()=>{
        //
       }
   },[]);
   const handleAddtocart=()=>{
    props.history.push("/cart/"+props.match.params.id+"?qty"+qty)
   }

    
    return <div >
        <div className="back-to-result">
            <Link to ="/">Back to results </Link>
        </div>
        {loading? <div>loading...</div>:
        error? <div>{error}</div>:(
            <div className="details">
            <div className="details-image">
                <img src={product.img} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.rev} reviews) 
                    </li>
                    <li>Price:<b>{product.price}</b>Rs</li>
                    <li>
                        Description:
                        <div>
                            {product.descript}
                        </div>
                    </li>
                </ul>

            </div>
            <div className="details-action">
                 <ul>
                     <li>
                         Price:{product.price}
                     </li>
                     <li>
                         status:{product.countInstock>0? "In stock": "Unavailable"}
                     </li>
                     <li>
                         Qty:<select vlaue={qty} onChange={(e)=>{setQty(e.target.value)}}>
                            {[...Array(product.countInstock).keys()].map(
                                x=><option key={x+1} vlaue={x+1}>{x+1}</option>
                            )}
                         </select>
                     </li>
                     <li>
                         {product.countInstock>0 &&
                         <button onClick={handleAddtocart} className="button">
                             Add to Cart
                         </button>}
                         
                     </li>
                 </ul>
            </div>
        </div>
        
        )
        }
             
    </div>
}
export default ProductScreen;