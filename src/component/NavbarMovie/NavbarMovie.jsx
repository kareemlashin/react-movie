import React, { PureComponent } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink  } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { setDir } from './../../core/action/action'
class NavbarMovie extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = () => {
    let dir = localStorage.getItem('dir')
    if (dir == 'rtl') {
      this.props.i18n.changeLanguage('ar')
      this.props.setDir('rtl')

    } else {
      this.props.i18n.changeLanguage('en')
      this.props.setDir('ltr')

    }
  }

  languageChange = (lang) => {
    this.props.i18n.changeLanguage(lang)

    if (lang == 'ar') {
      this.props.setDir('rtl')
      localStorage.setItem('dir', 'rtl')
    } else {
      this.props.setDir('ltr')
      localStorage.setItem('dir', 'ltr')
    }
  }

  render() {
    const { t, i18n } = this.props

    return (
      <div className="NavbarMovieWrapper">
        <Navbar
          expand="lg"
          className={'fixed-top navbar-movie shadow py-3 pxNav-5'}
        >
          <NavLink  to="/any" className="brand-logo">{t('logo')}</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=" ">
            <Nav.Item>
              <NavLink  to="/home" className="link" activeClassName="active" >{t('home')}</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink  to="/loadMore" className="link" activeClassName="active">{t('movieLinks')} </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink  to="/pagination" className="link" activeClassName="active"> {t('listMovie')}</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink  to="/Scrolling" className="link" activeClassName="active"> {t('movieNews')}</NavLink>
            </Nav.Item>
          </Navbar.Collapse>

          {i18n.language === 'en' ? (
            <button
              onClick={() => {
                this.languageChange('ar')
              }}
              className="btn-lang"
            >
              العربيه
            </button>
          ) : (
            <button
              onClick={() => {
                this.languageChange('en')
              }}
              className="btn-lang"
            >
              English
            </button>
          )}
        </Navbar>

        <div className="fix-top"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    setDir: (dir) => {
      dispatch(setDir(dir))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation()(NavbarMovie))
