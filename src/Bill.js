import React, { Component } from 'react';
import ImageComponent from './ImageComponent';

import jish from './images/jish.jpg';
import vj from './images/vj.jpg';
import srk from './images/srk.jpg';
import jo from './images/jo.jpg';
import sasi from './images/sasi.jpg';
import emptyImage from './images/empty.jpg';


class Bill extends Component {


    render() {


        return (

            <div className="mx-auto">

               

            <div className="row text-center">

            <div className="col-12 text-center">
            

            <h4 className="text-center"> Bill Split </h4>

            <hr></hr> 
            </div>
            
           
            
            </div>


            <div className="row mx-auto">



            <div className="col-md-2 text-center p-3">

            <img className="img-fluid rounded-circle bill-image" 
            src={jish} alt="jish" />
            <div className="mt-2">
            <span className="text-center"> $ { Math.round(this.props.jish_amount.reduce( (a,b) => a+b, 0 )*100)/100 } </span>
            </div>
            
            </div>


            <div className="col-md-2 text-center p-3">

            <img className="img-fluid rounded-circle bill-image" 
            src={vj} alt="vj" />
            <div className="mt-2">
            <span className="text-center"> $ {  Math.round(this.props.vj_amount.reduce( (a,b) => a+b, 0 )*100)/100 } </span>
            </div>

            </div>


            <div className="col-md-2 text-center p-3">

            <img className="img-fluid rounded-circle bill-image" 
            src={srk} alt="srk" />
            <div className="mt-2">
            <span className="text-center"> $ { Math.round(this.props.srk_amount.reduce( (a,b) => a+b, 0 )*100)/100 } </span>
            </div>

            </div>


            <div className="col-md-2 text-center p-3">

            <img className="img-fluid rounded-circle bill-image" 
            src={jo} alt="jo" />
            <div className="mt-2">
            <span className="text-center"> $ { Math.round(this.props.jo_amount.reduce( (a,b) => a+b, 0 )*100)/100 } </span>
            </div>

            </div>


            <div className="col-md-2 text-center p-3">

            <img className="img-fluid rounded-circle bill-image" 
            src={sasi} alt="sasi" />
            <div className="mt-2">
            <span className="text-center"> $ { Math.round(this.props.sasi_amount.reduce( (a,b) => a+b, 0 )*100)/100 } </span>
            </div>
            </div>



            </div>

            </div>



        )




        
        }







}

export default Bill;