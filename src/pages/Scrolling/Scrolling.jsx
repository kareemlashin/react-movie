import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { Test } from './Scrolling.styles';
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { scrollingMovie } from '../../core/action/action'
import { reset } from './../../core/action/action';
import i18next from 'i18next'

class Scrolling extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
    }
  }

  componentDidMount = () => {
    document.title = this.props.t('movieLinks');
    this.props.getReset();
    this.props.getScrolling(this.state.page)
  }
  onMousewheel = () => {
    var layout = document.getElementById('scroll')
    var pannel2 = document.getElementById('all')
    let allH = layout.scrollTop
    let allH3 = pannel2.scrollHeight
    if (allH >= allH3 - 700) {
      let pages = 1 + this.state.page;
      this.setState({
        page:pages
      })

      this.props.getScrolling(pages)

    }
  }
  render() {
    const { t, i18n } = this.props
    return (
      <div className="ScrollingWrapper">
        <div
          class="search-results box-scrol container mb-5 mt-3"
          id="scroll"
          onScroll={() => {
            this.onMousewheel()
          }}
        >
          <div class="row" id="all">

          {this.props.scrolling.map((item) => (
              <div
                className="col-md-4 p-3"
                key={
                  item.original_name === undefined || null
                  ? item.original_title
                  : item.original_name + '-' + item.vote_count
             
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

            <div class="col-md-12 text-center mb-2" v-if="spinner">
              <div class="spinner-border text-light" role="status">
                <span class="sr-only">{t('Loading')}...</span>
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
    scrolling:state.reducers.scrolling
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getScrolling: (page) => {
      dispatch(scrollingMovie(page))
    },
    
    getReset: () => {
      dispatch(reset())
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Scrolling))