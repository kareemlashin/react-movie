import React, { PureComponent } from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import Header from './../../component/Header/Header'
import Slider from './../../component/Slider/Slider'
import TopRate from './../../component/TopRate/TopRate'
import i18next from 'i18next'

class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'light',
      dir: 'ltr',
    }
  }
  addPage() {
    this.props.history.push('/Add')
  }
  componentDidMount = () => {
    document.title = this.props.t('home');
    document.title = i18next.t('home');

    let modeStorage = localStorage.getItem('mode') || 'light'
    let direction = localStorage.getItem('dir') || 'ltr'
    this.setState({
      ...this.state,
      mode: modeStorage,
      dir: direction,
    })
  }

  directionPage = (dir) => {
    this.setState({
      ...this.state,
      dir: dir,
    })
  }

  modePage = (mode) => {
    let checked = false
    if (mode == 'dark') {
      checked = true
    }
    this.setState({
      ...this.state,
      mode: mode,
      checked: checked,
    })
  }
  render() {
    const { t, i18n } = this.props

    return (
      <div
        dir={this.state.dir}
        className={('IndexWrapper', this.state.mode, this.props.mode)}
      >
        <Header margin={this.state.marginNav}></Header>
        <TopRate></TopRate>

        <Slider></Slider>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.reducers.mode,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(Home))
