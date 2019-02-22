import React, { Component } from 'react';
import ImageComponent from './ImageComponent';
import Error from './Error';
import Bill from './Bill';


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
            amount : '',
            jish : 0,
            vj: 0,
            srk : 0,
            jo : 0,
            sasi : 0,
            totalShare : 0,
            errorMessage : null,
            jish_amount : [],
            vj_amount : [],
            srk_amount : [],
            jo_amount : [],
            sasi_amount : [],
            total_amount : 0,
            product_name :'',
            product_list : []
            

        }
    
        this.showContent = this.showContent.bind(this);
        this.hideContent = this.hideContent.bind(this);
        this.save = this.save.bind(this);
        this.saveShare = this.saveShare.bind(this);
        this.saveProductName = this.saveProductName.bind(this);
    
      }
    



      saveProductName(e) {

        const item = e.target.name;
        const value = e.target.value;

        this.setState({
            [item] : value
        });


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
            errorMessage : null,
            product_name :''
        
        
        });
        


      }



      saveShare(user, share) {

      
        this.setState({
            [user] : share,
            errorMessage :null
            
            
        } ,
        
        () => this.setState (
            {totalShare :  parseFloat(this.state.jish)+
                parseFloat(this.state.vj)+
                parseFloat(this.state.jo)+
                parseFloat(this.state.srk)+
                parseFloat(this.state.sasi)}
            
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
                errorMessage : "Please enter valid share for induvidual users"
            })
            
           

          }
          
          else {



            var total = parseFloat(this.state.total_amount) + parseFloat(this.state.amount);
            

            if (this.state.jish != 0) {
            
                let money = parseFloat(this.state.jish) * ( parseFloat(this.state.amount) / (this.state.totalShare)); 
                money = Math.round(money * 100) / 100
                let jishnu_temp_amount = this.state.jish_amount;
                jishnu_temp_amount.push(money);
                this.setState({

                    jish_amount : jishnu_temp_amount

                })
                
            }
            else if (this.state.jish == 0) {

                let money = parseFloat(this.state.jish) * ( parseFloat(this.state.amount) / (this.state.totalShare) ); 
                money = Math.round(money * 100) / 100
                let jishnu_temp_amount = this.state.jish_amount;
                jishnu_temp_amount.push(money);
                this.setState({

                    jish_amount : jishnu_temp_amount

                })

            }

            if (this.state.vj != 0) {

                let money = parseFloat(this.state.vj) * ( parseFloat(this.state.amount) / (this.state.totalShare) ); 
                money = Math.round(money * 100) / 100
                let vj_temp_amount =  this.state.vj_amount;
                vj_temp_amount.push(money);
                this.setState({

                    vj_amount : vj_temp_amount

                })

            }
            else if (this.state.vj == 0) {

                let money = parseFloat(this.state.vj) * ( parseFloat(this.state.amount) / (this.state.totalShare) ); 
                money = Math.round(money * 100) / 100
                let vj_temp_amount =  this.state.vj_amount;
                vj_temp_amount.push(money);
                this.setState({

                    vj_amount : vj_temp_amount

                })

            }
            if (this.state.srk != 0) {

                let money = parseFloat(this.state.srk) * ( parseFloat(this.state.amount) / (this.state.totalShare) ); 
                money = Math.round(money * 100) / 100
                let srk_temp_amount = this.state.srk_amount;
                srk_temp_amount.push(money);
                this.setState({

                    srk_amount : srk_temp_amount

                })

            }
            else if (this.state.srk == 0) {

                let money = parseFloat(this.state.srk) * ( parseFloat(this.state.amount) / (this.state.totalShare) ); 
                money = Math.round(money * 100) / 100
                let srk_temp_amount =  this.state.srk_amount;
                srk_temp_amount.push(money);
                this.setState({

                    srk_amount : srk_temp_amount

                })

            }
        
            if (this.state.jo != 0) {

                let money = parseFloat(this.state.jo) * ( parseFloat(this.state.amount) / (this.state.totalShare) ); 
                money = Math.round(money * 100) / 100
                let jo_temp_amount =  this.state.jo_amount;
                jo_temp_amount.push(money);
                this.setState({

                    jo_amount : jo_temp_amount

                })

            }
            else if (this.state.jo == 0) {

                let money = parseFloat(this.state.jo) * ( parseFloat(this.state.amount) / (this.state.totalShare) ); 
                money = Math.round(money * 100) / 100
                let jo_temp_amount = this.state.jo_amount;
                jo_temp_amount.push(money);
                this.setState({

                    jo_amount : jo_temp_amount

                })

            }
            if (this.state.sasi != 0) {

                let money = parseFloat(this.state.sasi) * ( parseFloat(this.state.amount) / (this.state.totalShare) ); 
                money = Math.round(money * 100) / 100
                let sasi_temp_amount =  this.state.sasi_amount;
                sasi_temp_amount.push(money);
                this.setState({

                    sasi_amount : sasi_temp_amount

                })

            }
            else if (this.state.sasi == 0) {

                let money = parseFloat(this.state.sasi) * ( parseFloat(this.state.amount) / (this.state.totalShare) );
                money = Math.round(money * 100) / 100
                let sasi_temp_amount =  this.state.sasi_amount;
                sasi_temp_amount.push(money);
                this.setState({

                    sasi_amount : sasi_temp_amount

                })

            }
        




          this.setState({


            jish : 0,
            vj : 0,
            srk : 0,
            jo : 0,
            sasi : 0,
            isValueAdded : false,
            amount : "",
            errorMessage:null,
            totalShare : 0,
            total_amount : total,
            product_name :''
        

          })


              
          }


         
         


      }



    render() {

        let pictures;

        const test = this.state.jish_amount.map((number) => <p key={this.state.jish_amount.indexOf(number)}> {number}</p>);

        if (this.state.isValueAdded === true) {

           pictures =          <div>

                                    <div className=" p-2 mx-auto" style={{width : "85%", paddingBottom: 0 +"px"}}>

                                    <h5> Select whom you want to split the bills with </h5>

                                    </div>

                                    <div className="form-row p-3 text-center mx-auto" style={{width : "95%"}} >


                                            

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
                       <input type="text" onChange={this.saveProductName} value={this.state.product_name} className="form-control" id="product"
                       name="product_name" placeholder="ProductName"  required />
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

            {this.state.total_amount > 0 ? (
                
                <div className="mt-2"> 

                 
                <Bill jish_amount={this.state.jish_amount} 
                vj_amount={this.state.vj_amount}
                srk_amount={this.state.srk_amount}
                jo_amount={this.state.jo_amount}
                sasi_amount={this.state.sasi_amount} total_amount={this.state.total_amount}/>
                
            </div>
            
            ): null }


            
            
            {this.state.total_amount > 0 ? (

                <div className="mt-2"> 
               {test}
                </div>


            ) : null}
            
             
                </div>
            
            
            
            
            
            
            
            
            
            
           














        )














    }











}

export default ProductForm;