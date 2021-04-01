import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { dataPagination, reset } from '../../core/action/action'
import i18next from 'i18next'

class Pagination extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      pag: [1, 2, 3, 4, 5, 6],
    }
  }

  componentDidMount = () => {
    
    document.title = this.props.t('movieNews');
    document.title = i18next.t('movieNews');
    this.props.getReset()
    this.props.getPagination(this.state.page)
  }

  load = (item) => {

    this.setState({
      ...this.state,
      page:item
    })
    this.props.getPagination(this.state.page);

  }

  next = () => {
    let item = 1+this.state.page;
    this.setState({
      ...this.state,
      page:item
    })
    this.props.getPagination(this.state.page);

  }

  prev = () => {
    let item = this.state.page;
 if(item==1){
       item =1;
    }else{
      item =item-1;

    }
    this.setState({
      ...this.state,
      page:item
    })
    this.props.getPagination(this.state.page);

  }
  render() {
    const { t, i18n } = this.props

    return (
      <div className="PaginationWrapper">
        <div className="container mb-5">
          <div className="row  mt-3 ">
            {this.props.pagination.map((item) => (
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
          <nav
            aria-label="Page navigation example"
            className="mx-auto  text-center"
          >
            <ul className="pagination mx-auto text-center">
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    this.prev()
                  }}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              {this.state.pag.map((pag) => (
                <li
                  onClick={() => {
                    this.load(pag)
                  }}
                  className={  pag == this.state.page ? 'active page-item' : 'page-item' }
                >
                  <a className={"page-link"} > {pag}  </a>
                </li>
              ))}

              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    this.next()
                  }}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pagination: state.reducers.pagination,
    spinners: state.reducers.spinners,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPagination: (page) => {
      dispatch(dataPagination(page))
    },
    getReset: () => {
      dispatch(reset())
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Pagination))
