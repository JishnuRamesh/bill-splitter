import React, { Component } from 'react';
import jish from './images/jish.jpg';
import vj from './images/vj.jpg';
import srk from './images/srk.jpg';
import jo from './images/jo.jpg';
import sasi from './images/sasi.jpg';



class ProductForm extends Component {


    render() {



        return(


            <div className="productForm mx-auto">
            
            

                <h5 className="text-center mt-2 p-2 "> Add Product </h5>


                


                <form>
             

                <div className="inputSet">
             
                <div className="form-row p-2">

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


                <div className="form-row p-3 ">


                        <div className="form-group col-md-1 text-center">
                  
                            
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <span> SHARE </span>
                            

                        </div>


                         <div className="form-group col-md-2 text-center">
                  
                             <img className="img-fluid rounded-circle p-3" src={jish} alt="jish" />
                            <input type="number" className="form-control" id="jish-amount" placeholder="0"  required/>
               
                        </div>

                        <div className="form-group col-md-2 text-center">
                  
                             <img className="img-fluid rounded-circle p-3" src={vj} alt="vijay"/>
                             <input type="number" className="form-control" id="vj-amount" placeholder="0"  required/>
               
                        </div>

                        <div className="form-group col-md-2 text-center">
                  
                             <img className="img-fluid rounded-circle p-3" src={srk}  alt="srk"/>
                             <input type="number" className="form-control" id="srk-amount" placeholder="0"  required/>
    
                        </div>

                        <div className="form-group col-md-2 text-center">

                            
                            <img className="img-fluid rounded-circle p-3" src={jo}  alt="johnnie"/>
                            <input type="number" className="form-control" id="jo-amount" placeholder="0"  required/>
                        
                         </div>

                         <div className="form-group col-md-2 text-center">

                            
                             <img className="img-fluid rounded-circle p-3" src={sasi}  alt="sasi"/>
                            
                            <input type="number" className="form-control" id="sasi-amount" placeholder="0"  required/>

                        </div>
                

              


                </div>
             
             
                <div className="form-row">


                    <div className="text-center form-control col-6 " style={{backgroundColor : "blue" }}>
                    
                        SAVE
                    
                    </div>


                    <div className="text-center form-control col-6 " style={{backgroundColor : "Black" }}>
                    
                        CANCEL
                    
                    </div>

                    
                </div>


               
             
             </div>
             </form>
             
             
                </div>
            
            
            
            
            
            
            
            
            
            
           














        )














    }











}

export default ProductForm;