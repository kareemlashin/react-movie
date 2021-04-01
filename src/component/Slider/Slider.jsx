import React, { PureComponent } from 'react'
import Carousel from 'react-elastic-carousel'
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getSlider } from './../../core/action/action';
import { NavLink } from 'react-router-dom';

class Slider extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      items: 0,
      page:3
    }
  }
  componentDidMount = () => {
    let items = 0
    if (window.innerWidth == 768 || window.innerWidth == 767) {
      items = 2
    } else if (window.innerWidth <= 767 && window.innerWidth >= 500) {
      items = 2
    } else if (window.innerWidth <= 500) {
      items = 1
    } else if (
      window.innerWidth <= 1024 ||
      (window.innerWidth >= 769 && window.innerWidth <= 1300)
    ) {
      items = 4
    } else if (window.innerWidth == 1366 || window.innerWidth <= 1366) {
      items = 3
    } else if (window.innerWidth >= 1370) {
      items = 6
    }
    this.setState({
      items: items,
    });this.props.sliderData(this.state.page)
  }

  render() {
    const {t}=this.props;

    return (
      <div className="SliderWrapper">
        <div>
            <div className="container  my-5">
              <div className="border-bottom mb-3 pb-3 px-2 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <i className="fas fa-film movie-i"></i>
                  <a className="text-capitalize font-weight-bold px-2 mb-0 text-white f_20">
                    {t("movieNews")}
                  </a>
                </div>
                <NavLink to="/pagination" className="text-white">
                  {t('seeMore')}
                </NavLink>
              </div>

          <Carousel itemsToShow={this.state.items} isRTL={this.props.dir=='rtl'?true:false}>
          {this.props.slider.slice(0,10).map((item) => (
              <div
                className="slider__item position-relative img_card w-100 mx-2"
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
          </Carousel>
        </div>          </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    slider:state.reducers.slider,
    dir:state.reducers.dir,
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sliderData:(page)=>{
      dispatch(getSlider(page))
    }
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Slider))

