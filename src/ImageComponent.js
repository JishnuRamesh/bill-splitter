import React, { Component } from 'react';



class ImageComponent extends Component {


    constructor(props) {


        super(props);
        this.state = {


            selected : false,
            share : 0,
            currentClass : " secondary-image",
            nameId : this.props.elementName


        }


        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }



    handleClick(e) {

     
       
        let targetName =this.state.nameId

        if (this.state.selected == false) {


            this.setState({

                selected : true,
                share : 1,
                currentClass : " main-image"
    
            } , () => this.props.shareFunction(targetName, this.state.share))

        }
        else {


            this.setState({

                selected : false,
                share : 0,
                currentClass : " secondary-image"
    
            } , () => this.props.shareFunction(targetName,  this.state.share))


          

        }

        

        


    }



    handleChange(e) {

       // e.preventDefault();
        const item = e.target.name;
        const value = e.target.value;
        const id = this.state.nameId

       
            this.setState({

                [item] : value
            },  () => this.props.shareFunction(id, this.state.share) )
       
        
           
           
    }
    


    render() {


        


        return (



            <div className="form-group col-md-2 text-center p-3" >

            <img className={"img-fluid rounded-circle" + this.state.currentClass }
            src={this.props.image} alt={this.props.alt} onClick={this.handleClick}  />
            
            {this.state.selected && 
            
            <input type="number" className="form-control mt-2" id={this.props.id} placeholder="0"
            name="share"  value={this.state.share} onChange={this.handleChange} required/>

            
            }

         
            </div>






        )




    }




}

export default ImageComponent;