import React, { Component } from 'react'
import JsonData from '../Productdata/product.json'
export class Product extends Component {
    constructor(props){
        super(props);
    }
    // console.log(products)

    render() {
        return (
            <div>
                <h1>Shopping </h1>
               <div className="row">
                   
                  {console.log(JsonData.products)}
                     
                    {JsonData.products.map(
                        (info)=>{
                            // {alert(info.pname)}
                return(
                    
                    <div className="col-lg-3 col-sm-4">
                        <div className="card" style={{"margin":"10px"}}>
                        <img src={`${info.images}`} className="card-img-top"  alt={info.images} style={{"width":"auto","height":"300px"}} />
                        <div className="card-body">
                            <p style={{"background-color":"red"}}>id={info.id}</p>
                           <p style={{"background-color":"grey"}}> name={info.pname}</p>
                            <p style={{"background-color":"yellow"}}>price={info.price}</p>
                           <p style={{"background-color":"blue"}}> quantity={info.quantity}</p>
                        </div>
                        </div>
                   </div>

                )
            
         }
     )}
                
               </div>
            </div>
        )
    }
}

export default Product
