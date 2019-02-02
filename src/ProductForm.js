import React, { Component } from 'react';
import ImageComponent from './ImageComponent';
import Error from './Error';


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
            amount : "",
            jish : 0,
            vj: 0,
            srk : 0,
            jo : 0,
            sasi : 0,
            totalShare : 0,
            errorMessage : null
            

        }
    
        this.showContent = this.showContent.bind(this);
        this.hideContent = this.hideContent.bind(this);
        this.save = this.save.bind(this);
        this.saveShare = this.saveShare.bind(this);
    
      }
    



      showContent(e){

     

       

            const item = e.target.name;
            const value = e.target.value;

            this.setState({ 
                
                [item] : value
            });

            if (value > 0) {

               this.setState ({isValueAdded : true})
            }
            else{

                this.setState ({isValueAdded : false})
            }
            
    

       

        
      }



      hideContent(){

        
        this.setState({
            
            isValueAdded:false,
            amount : "",
            jish : 0,
            vj : 0,
            srk : 0,
            jo : 0,
            sasi : 0,
            totalShare :0,
            errorMessage : null
        
        
        });
        


      }



      saveShare(user, share) {

        console.log("product orf");
        console.log(user);
        console.log(share);
        this.setState({
            [user] : share,
            errorMessage :null
            
            
        } ,
        
        () => this.setState ({totalShare : this.state.jish+this.state.vj+this.state.jo+this.state.srk+this.state.sasi}
            
        )   )

      }




      save(e) {
          e.preventDefault();

          console.log(this.state.amount);
          if (this.state.amount === "" ||  this.state.amount <= 0 ) {

            this.setState({
                errorMessage : "Please enter a valid amount"
            })
            
          } 
          else if (this.state.totalShare <= 0) {

           
            this.setState({
                errorMessage : "Please enter valid shared for induvidual users"
            })
            
           

          }
          
          else {


             // More to be implemented 
          this.setState({


            jish : 0,
            vj : 0,
            srk : 0,
            jo : 0,
            sasi : 0,
            isValueAdded : false,
            amount : "",
            errorMessage:null

          })


              
          }


         
         


      }



    render() {

        let pictures;

        if (this.state.isValueAdded === true) {

           pictures =          <div>

                                    <h5 className="text-center p-2"> Select whom you want to split the bills with </h5>


                                    <div className="form-row p-3 ">


                                            <div className="form-group col-sm-1 text-center d-md-non d-lg-block empty-image">

    
                                                    <img className="img-fluid rounded-circle p-3" src={emptyImage} alt="" style={{borderColor : "white"}} />
                                                    
    

                                            </div>

                                            <ImageComponent image={jish} altText="jish" id="jish" shareFunction = {this.saveShare} elementName="jish"  />

                                            <ImageComponent image={vj} altText="vj" id="vj" shareFunction = {this.saveShare} elementName="vj"  />
                                            
                                            <ImageComponent image={srk} altText="srk" id="srk" shareFunction = {this.saveShare} elementName="srk" />

                                            <ImageComponent image={jo} altText="jo" id="jo"  shareFunction = {this.saveShare}  elementName="jo"/>

                                            <ImageComponent image={sasi} altText="sasi" id="sasi"  shareFunction = {this.saveShare}  elementName="sasi"/>


                                    </div>


                                    <div className="form-row">


                                        <div className=" bottom-save  col-6 "  onClick ={this.save}>

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
            
            
                <Error errorMessage = {this.state.errorMessage} />

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
                        <input type="number" className="form-control" id="amounnt" placeholder="$0.0" name="amount"
                          required onChange={this.showContent} value={this.state.amount} />
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