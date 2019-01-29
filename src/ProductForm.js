import React, { Component } from 'react';



class ProductForm extends Component {


    render() {



        return(


            <div className="productForm mx-auto">
            
            

                <h5 className="text-center"> Add Product </h5>


                <div className="inputSet">


                <form>
             
             
                <div className="form-row">

                     <div className="form-group col-md-8">
                          <label htmlFor="product">Product (Optional)</label>
                       <input type="text" className="form-control" id="product" placeholder="ProductName"  />
                     </div>

                     <div className="form-group col-md-4">
                       <label htmlFor="amount">Amount</label>
                        <input type="number" className="form-control" id="amounbt" placeholder="$0.0" />
                      </div>
                </div>
             


                </form>
             
             </div>
             
             
             
                </div>
            
            
            
            
            
            
            
            
            
            
           














        )














    }











}

export default ProductForm;