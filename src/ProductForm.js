import React, { Component } from 'react';



class ProductForm extends Component {


    render() {



        return(


            <div className="productForm mx-auto">
            
            

                <h5 className="text-center"> Add Product </h5>


                <div className="inputSet">
             
             
                <div className="form-row">

                     <div className="form-group col-md-8">
                          <label htmlFor="inputEmail4">Email</label>
                       <input type="email" className="form-control" id="inputEmail4" placeholder="ProductName"  />
                     </div>

                     <div className="form-group col-md-4">
                       <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                      </div>
                </div>
             
             
             </div>
             
             
             
                </div>
            
            
            
            
            
            
            
            
            
            
           














        )














    }











}

export default ProductForm;