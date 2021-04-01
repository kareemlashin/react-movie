import React, { PureComponent } from 'react'
//import { Test } from './Base.styles';
import Footer from './../../component/Footer/Footer'
import NavbarMovie from './../../component/NavbarMovie/NavbarMovie'
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

class Base extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <div className="BaseWrapper" dir={this.props.dir}>
        <NavbarMovie></NavbarMovie>
        {this.props.children}
        <Footer></Footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dir:state.reducers.dir
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Base))
