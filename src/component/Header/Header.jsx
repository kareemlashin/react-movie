import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      height: '',
    }
  }

  componentWillMount = () => {
    let height =
      100 - this.props.nav * (100 / document.documentElement.clientHeight)

    if (window.innerWidth == 768 || window.innerWidth == 767) {
      height = 47;
    }else

    if (
      window.innerWidth <= 1024 &&
      (window.innerWidth >= 769 && window.innerWidth <= 1300)
    ) {
      height = 46;

    }else

    if (window.innerWidth <= 767) {
      height = 46;    


    }else

    if (window.innerWidth == 1366 || window.innerWidth <= 1366) {
      height = height
    }
    else if (window.innerWidth >= 1370 ) {
      height = 50
    }
    
    this.setState({
      height: height,
    })
  }
  seeMore=()=>{

  }
  render() {
    const { t } = this.props
    return (
      <div className="HeaderWrapper" dir={this.props.dir}>
     <div>
   <div className="header__home">
    <div className="overly">
        <div className="container h-100">
            <div className={'d-flex align-items-center  h-100 case-2'}>
                <div className="justify-content-start">

                    <h2> {t("title")}</h2>
                    <NavLink to="/Scrolling" className="header-button rounded-pill px-4 py-2 mt-2" onClick={this.seeMore()}>{t("seeMore")} </NavLink>
                </div>
            </div>

        </div>
    </div>
</div>
  </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.reducers.nav,
    dir: state.reducers.dir,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Header))
