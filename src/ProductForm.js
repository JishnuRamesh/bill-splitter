import React, { Component } from 'react';
import jish from './images/jish.jpg';
import vj from './images/vj.jpg';
import srk from './images/srk.jpg';
import jo from './images/jo.jpg';
import sasi from './images/sasi.jpg';
import emptyImage from './images/empty.jpg';



class ProductForm extends Component {


    constructor() {

        super();
        this.state = {
    
            isValueAdded : false,
            amount : 0,
            

        }
    
        this.showContent = this.showContent.bind(this);
        this.hideContent = this.hideContent.bind(this);
    
    
      }
    



      showContent(e){

        console.log(e.target.value);

        if (e.target.value > 0) {

            this.setState({ 
                
                isValueAdded:true,
                amount : e.target.value
            });
            
        }

        
      }



      hideContent(){

        
        this.setState({
            
            isValueAdded:false,
            amount : 0
        
        
        });
        


      }



    render() {

        let pictures;

        if (this.state.isValueAdded === true) {

           pictures =          <div>

                                    <h5 className="text-center p-2"> Select whom you want to split the bills with </h5>


                                    <div className="form-row p-3 ">


                                            <div className="form-group col-md-1 text-center">

    
                                                    <img className="img-fluid rounded-circle p-3" src={emptyImage} alt="" style={{borderColor : "white"}} />
                                                    <span> SHARE </span>
    

                                            </div>


                                            <div className="form-group col-md-2 text-center p-3">

                                                    <img className="img-fluid rounded-circle secondary-image" src={jish} alt="jish" />
                                                    <input type="number" className="form-control mt-2" id="jish-amount" placeholder="0"  required/>

                                            </div>

                                            <div className="form-group col-md-2 text-center p-3">

                                                    <img className="img-fluid rounded-circle secondary-image" src={vj} alt="vijay"/>
                                                    <input type="number" className="form-control mt-2" id="vj-amount" placeholder="0"  required/>

                                            </div>

                                            <div className="form-group col-md-2 text-center p-3">

                                                    <img className="img-fluid rounded-circle secondary-image" src={srk}  alt="srk"/>
                                                    <input type="number" className="form-control mt-2" id="srk-amount" placeholder="0"  required/>

                                            </div>

                                            <div className="form-group col-md-2 text-center p-3">

    
                                                    <img className="img-fluid rounded-circle  secondary-image " src={jo}  alt="johnnie"/>
                                                    <input type="number" className="form-control mt-2" id="jo-amount" placeholder="0"  required/>

                                            </div>

                                            <div className="form-group col-md-2 text-center p-3">

    
                                                    <img className="img-fluid rounded-circle  secondary-image " src={sasi}  alt="sasi"/>
    
                                                    <input type="number" className="form-control mt-2" id="sasi-amount" placeholder="0"  required/>

                                            </div>





                                    </div>


                                    <div className="form-row">


                                        <div className=" bottom-save  col-6 " >

                                            SAVE

                                        </div>


                                        <div className="text-center  bottom-cancel col-6"  onClick={this.hideContent} >

                                                CANCEL

                                        </div>


                                    </div>

                                </div>


        }


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
                        <input type="number" className="form-control" id="amounnt" placeholder="$0.0"
                          required onChange={this.showContent}  value={this.state.amount}/>
                      </div>
                </div>


                
                
                {pictures}


               

               
             
             </div>
             </form>
             
             
                </div>
            
            
            
            
            
            
            
            
            
            
           














        )














    }











}

export default ProductForm;