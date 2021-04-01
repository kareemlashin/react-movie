import React, { PureComponent } from 'react'
import { getMovie } from '../../core/action/action'
// import { Test } from './Footer.styles';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'
class Footer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }


  componentDidMount = () => {
    this.props.getGetMovie(1);
  }


  render() {
    const { t, i18n } = this.props

    return (
      <div className="FooterWrapper">
        
        <div>
          <div>
            <div className="container  my-5">

              <div className="border-bottom mb-3 pb-3 px-2 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <i className="fas fa-film movie-i"></i>
                  <a className="text-capitalize font-weight-bold px-2 mb-0 text-white f_20">
                    {t("listMovie")}
                  </a>
                </div>
                <NavLink to="/loadMore" className="text-white">
                  {t('seeMore')}
                </NavLink>
              </div>

              <div className="row">
              {this.props.trend.slice(3,6).map((item) => (
              <div
                className="col-md-4 p-3"
                key={
                  item.original_name === null
                    ? item.original_name
                    : item.original_title +'-'+item.vote_count +'--'+'shared'
                }
              >
                <div
                  className="position-relative img_card"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
                  }}
                >
                  <a className="position-absolute px-3 py-2 style_card">
                    <small>{item.media_type}</small>
                  </a>
                  <div className="position-absolute p-3 d-flex flex-column justify-content-end card_fix">
                    <h3 className="h6">
                      <a className="text-white sty_brn">
                        {item.original_name
                          ? item.original_name
                          : item.original_title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}

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
    trend:state.reducers.trend
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getGetMovie: (page) => {
      dispatch(getMovie(page))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Footer))
