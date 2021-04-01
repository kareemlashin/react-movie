import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Loading extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='LoadingWrapper'>
        {this.props.loadingPage ?(

<div className="loading">
     
     <div className="loader ">
         <div className="loader__filmstrip">
         </div>
 
     </div>
 </div>
        ) : ''}

      </div>
    )
  }
}

const mapStateToProps = state => ({
  loadingPage: state.reducers.loadingPage
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
