import React, { Component } from 'react';



class ImageComponent extends Component {


    


    render() {


        


        return (



            <div className="form-group col-md-2 text-center p-3">

            <img className="img-fluid rounded-circle secondary-image" src={this.props.image} alt="jish" />
            <input type="number" className="form-control mt-2" id="jish-amount" placeholder="0"  required/>

            </div>






        )




    }




}

export default ImageComponent;