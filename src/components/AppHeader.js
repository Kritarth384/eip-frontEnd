/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibDiscord, cibGithub, cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import logo from 'src/assets/logo2.gif'
import leftIcon from 'src/assets/left.png'
import rightIcon from 'src/assets/right.png'
import { ReactComponent as left } from 'src/assets/brand/left.svg'
import './AppHeader.styles.css'
import { useUserAuth } from 'src/Context/AuthContext'

const AppHeader = () => {
  const [changeIcon, setChangeIcon] = useState(0)
  const { imageOpen } = useUserAuth()
  console.log(imageOpen)

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const changeIconSet = () => {
    if (changeIcon === 0) {
      setChangeIcon(1)
    } else {
      setChangeIcon(0)
    }
  }

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => {
            dispatch({ type: 'set', sidebarShow: !sidebarShow })
            changeIconSet()
          }}
        >
          <img src={changeIcon ? rightIcon : leftIcon} alt="" onClick={() => changeIconSet()} />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none">
          <img src={logo} height={48} alt="Logo" style={{ width: '87px', height: '100%' }} />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="#" component={NavLink}>
              <Link to="/typeAll" style={{ textDecoration: 'none', color: 'inherit' }}>
                Type
              </Link>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <Link to="/statusAll" style={{ textDecoration: 'none', color: 'inherit' }}>
                Status
              </Link>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <Link to="/juneCharts" style={{ textDecoration: 'none', color: 'inherit' }}>
                Insight
              </Link>
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CTooltip content="Github source" placement="bottom">
                <a
                  href="https://github.com/ethereum/EIPs"
                  target="_blank"
                  rel="noreferrer"
                  className="githubIcon"
                >
                  <CIcon icon={cibGithub} size="lg" />
                </a>
              </CTooltip>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CTooltip content="Join our Discord server" placement="bottom">
                <a
                  href="https://discord.com/channels/916850601919393832/975355006322606130/986317048068051035"
                  target="_blank"
                  rel="noreferrer"
                  className="discordIcon"
                >
                  <CIcon icon={cibDiscord} size="lg" />
                </a>
              </CTooltip>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CTooltip content="Share your feedback with us" placement="bottom">
                <Link to="/contactUs" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CIcon
                    icon={cilEnvelopeOpen}
                    size="lg"
                    onClick={() =>
                      dispatch({
                        type: 'set',
                        sidebarShow: sidebarShow ? !sidebarShow : sidebarShow,
                      })
                    }
                  />
                </Link>
              </CTooltip>
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          {imageOpen === 'enable' ? (
            <AppHeaderDropdown />
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <div className="loginButton1 github1">Login</div>
            </Link>
          )}
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
