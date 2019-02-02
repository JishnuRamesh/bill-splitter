import React, { Component } from 'react';


class Error extends Component {


  
  


    render() {


        if (this.props.errorMessage) {

            window.scrollTo(0,0);
        }



        return (

            <div>

            { this.props.errorMessage && (

                <div className="text-danger text-center p-2">
            
                 {this.props.errorMessage}
            
                 </div>

            )}

        </div>

           



        )



    }


    

}

export default Error;