import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { Test } from './LoadMore.styles';
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { loadMore } from '../../core/action/action'
import { reset } from './../../core/action/action';
import i18next from 'i18next'

class LoadMore extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
    }
  }

  componentDidMount = () => {
    document.title = this.props.t('listMovie');
    document.title = i18next.t('listMovie');

    this.props.getReset();
    this.props.getLoadMore(this.state.page)
  }

  load = () => {
    let pages =  1+this.state.page ;
    this.setState({
      page: pages,
    })
    this.props.getLoadMore(pages)
  }

  render() {
    const { t, i18n } = this.props

    return (
      <div className="LoadMoreWrapper">
        <div className="container  mt-3 mb-5">
          <div className="row">

            {this.props.loadMore.map((item) => (
              <div
                className="col-md-4 p-3"
                key={
                  item.original_name === null
                    ? item.original_name
                    : item.original_title +'-'+item.vote_count
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

            {this.props.spinners ? (
              <div className="col-md-12 text-center mb-2" v-if="spinner">
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only">{t('Loading')}...</span>
                </div>
              </div>
            ) : (
              ''
            )}
            
          </div>
          <div className="text-center">
            <button
              className="button py-2 rounded-pill px-5"
              onClick={() => {
                this.load()
              }}
            >
              {t('loadMore')}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loadMore: state.reducers.loadMore,
    spinners: state.reducers.spinners,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getLoadMore: (page) => {
      dispatch(loadMore(page))
    },
    getReset: () => {
      dispatch(reset())
    },
    
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(LoadMore))
