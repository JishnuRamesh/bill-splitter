import React, { Component } from 'react';



class ProductList extends React.Component {


    constructor(props){

        super(props);

    }



    render(){


        const productNames = this.props.productNames.map(
            (product) => <p key={this.props.productNames.indexOf(product)}> {product} </p>)


        const jishAmount = this.props.jishAmount.map(
            (jish) => <p key={this.props.jishAmount.indexOf(jish)}> {jish} </p> )
            

        const vjAmount = this.props.vjAmount.map(
                (vj) => <p key={this.props.vjAmount.indexOf(vj)}> {vj} </p> )

        const srkAmount = this.props.srkAmount.map(
                    (srk) => <p key={this.props.srkAmount.indexOf(srk)}> {srk} </p> )

        const joAmount = this.props.joAmount.map(
            (jo) => <p key={this.props.joAmount.indexOf(jo)}> {jo} </p> )

         const sasiAmount = this.props.sasiAmount.map(
                (sasi) => <p key={this.props.sasiAmount.indexOf(sasi)}> {sasi} </p> )

        return (





            
            <div className="mx-auto">

            <hr></hr> 

            <div className="row text-center">

            <div className="col-12 text-center">
            

            <h4 className="text-center"> EXTENDED BILL </h4>

            
            </div>
            
           
            
            </div>


            <div className="row mx-auto">


            <div className="col-md-2 text-center p-2 mt-lg-5">

            <h6> Product Name </h6>
            <div className="mt-2">
            {productNames}
            </div>
            
            </div>



            <div className="col-md-2 text-center p-2 mt-lg-5">

            <h6> Jishnu </h6>
            <div className="mt-2">
            {jishAmount}
            </div>

            </div>


            <div className="col-md-2 text-center p-2 mt-lg-5">

            <h6> Vijay </h6>
            <div className="mt-2">
            {vjAmount}
            </div>

            </div>



            <div className="col-md-2 text-center p-2 mt-lg-5">

            <h6> Sharuq </h6>
            <div className="mt-2">
            {srkAmount}
            </div>

            </div>


            <div className="col-md-2 text-center p-2 mt-lg-5">

            <h6> Johnnie </h6>
            <div className="mt-2">
            {joAmount}
            </div>

            </div>


             <div className="col-md-2 text-center p-2 mt-lg-5">

            <h6> Sasi </h6>
            <div className="mt-2">
            {sasiAmount}
            </div>

            </div>

            




            </div>

            </div>
















        )








    }







}



export default ProductList