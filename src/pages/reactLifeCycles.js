/* eslint-disable no-unused-vars */
import React,{Component} from 'react';

class Example extends Component {
    componentDidMount() {
      console.log('componentDidMount...!!');
    };
    
    componentDidUpdate() {
        console.log('ComponentDidUpdate...!!');
    };

    componentWillUnmount() {
        console.log('will unmount...!!');
    }

    
    render() {
      return(
          this.componentDidMount,
          this.componentDidUpdate,
          this.componentWillUnmount
          
        ) ;
    }
  }


 export default Example; 