import React, { PureComponent } from 'react';
//import { Test } from './Main.styles';
import SubHeader from './../../component/SubHeader/index';

class Main extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }


  componentDidMount = () => {
  }


  render () {
    
    return (
      <div className="MainWrapper">
        <SubHeader></SubHeader>
          {this.props.children}
      </div>
    );
  }
}


export default Main;
