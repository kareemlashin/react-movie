import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

class SubHeader extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('SubHeader will mount');
  }

  componentDidMount = () => {
    console.log('SubHeader mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('SubHeader will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('SubHeader will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('SubHeader did update');
  }

  componentWillUnmount = () => {
    console.log('SubHeader will unmount');
  }

  render () {
    const {t}=this.props;
    return (
      <div className="SubHeaderWrapper">
<div className="cont-header mt-5">
      <div className="overly h-100 d-flex align-items-center text-center">
        <h2 className="text-center w-100">{t("Movies")}</h2>
      </div>
    </div>
          </div> 
    );
  }
}



const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(SubHeader))

