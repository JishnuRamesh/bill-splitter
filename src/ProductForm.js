import React, { Component } from 'react';
import jish from './images/jish.jpg';



class ProductForm extends Component {


    render() {



        return(


            <div className="productForm mx-auto">
            
            

                <h5 className="text-center mt-2"> Add Product </h5>


                <div className="inputSet">


                <form>
             
             
                <div className="form-row">

                     <div className="form-group col-md-8">
                          <label htmlFor="product">Product (Optional)</label>
                       <input type="text" className="form-control" id="product" placeholder="ProductName"  required />
                     </div>

                     <div className="form-group col-md-4">
                       <label htmlFor="amount">Amount</label>
                        <input type="number" className="form-control" id="amounbt" placeholder="$0.0"  required/>
                      </div>
                </div>


                 <h5 className="text-center p-2"> Select whom you want to split the bills with </h5>

                <div className="form-row">

                     <div className="form-group col-md-12">
                        <img className="img-fluid rounded-circle" src={jish} />

                     </div>

                     

                </div>
             
             


                </form>
             
             </div>
             
             
             
                </div>
            
            
            
            
            
            
            
            
            
            
           














        )














    }











}

export default ProductForm;