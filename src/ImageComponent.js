import React, { Component } from 'react';



class ImageComponent extends Component {


    constructor() {


        super();
        this.state = {


            selected : false,
            share : 0,


        }


        this.handleClick = this.handleClick.bind(this);

    }



    handleClick(e) {

        console.log("test");
        e.preventDefault();

        if (this.state.selected == false) {


            this.setState({

                selected : true,
                share : 1
    
            })

        }
        else {


            this.setState({

                selected : false,
                share : 0
    
            })



        }


        


    }
    


    render() {


        


        return (



            <div className="form-group col-sm-2 text-center p-3"  >

            <img className="img-fluid rounded-circle secondary-image" src={this.props.image} alt={this.props.alt} onClick={this.handleClick} />
            <input type="number" className="form-control mt-2" id={this.props.id} placeholder="0"  required/>

            </div>






        )




    }




}

export default ImageComponent;