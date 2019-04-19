import React, {Component} from 'react';
import './style.css'

class Loader extends Component {
    render(){
      return(
          <div className='loader'>
              <h1 className='loader__title'>...LOADER</h1>
          </div>

      );  
    };
}

export default Loader;