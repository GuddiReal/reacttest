import {useEffect} from 'react'
import {ILayout, useLayout} from '../../core'
import {toAbsoluteUrl} from "../../../helpers";

const Footer = () => {
  const {config} = useLayout()
  useEffect(() => {
    updateDOM(config)
  }, [config])
  return (
      <>

          <div className='text-gray-900 order-2 order-md-1'>
        <span className='text-muted fw-semibold me-1'>
          {new Date().getFullYear().toString()}&copy;
        </span>
              <a
                  href='https://keenthemes.com/'
                  target='_blank'
                  className='text-gray-800 text-hover-primary'
              >
                  Keenthemes
              </a>
          </div>

          <ul className='menu menu-gray-600 menu-hover-primary fw-semibold order-1'>
              <li className='menu-item'>
                  <a href='https://keenthemes.com/' target='_blank' className='menu-link px-2'>
                      About
                  </a>
              </li>

              <li className='menu-item'>
                  <a href='https://devs.keenthemes.com/' target='_blank' className='menu-link px-2'>
                      Support
                  </a>
              </li>

              <li className='menu-item'>
                  <a
                      href='https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469'
                      target='_blank'
                      className='menu-link px-2'
                  >
                      Purchase
                  </a>
              </li>
          </ul>

          <div>

          </div>




          {/*<div className='text-gray-900 order-2 order-md-1 d-flex'>*/}
          {/*<span className='text-muted fw-semibold me-1'>*/}
          {/*{new Date().getFullYear().toString()}&copy;*/}
          {/*</span>*/}
          {/*<a*/}
          {/*  href='https://keenthemes.com/'*/}
          {/*  target='_blank'*/}
          {/*  className='text-gray-800 text-hover-primary'*/}
          {/*>*/}
          {/*  Keenthemes*/}
          {/*</a>*/}

          {/*<p style={{*/}
          {/*  background: "linear-gradient(45deg, red, blue)",*/}
          {/*  paddingLeft: "15px",*/}
          {/*  width: "100%",*/}
          {/*  height: "1px",*/}
          {/*  marginTop: "14px"*/}
          {/*}}></p>*/}


          {/*</div>*/}

          {/*<div className="container text-gray-900 order-2 order-md-1" style={{marginLeft:"0px",display:"block"}}>*/}
          {/*  <p className="liner">*/}
          {/*    <img*/}
          {/*      alt='Logo'*/}
          {/*      src={toAbsoluteUrl('media/logos/casino/mainlogo1.svg')}*/}
          {/*      className='h-30px app-sidebar-logo-default'*/}
          {/*  />*/}
          {/*  </p>*/}
          {/*</div>*/}


          {/*    <div className={'separator border-warning'}>*/}
          {/*        <ul className='menu menu-gray-600 menu-hover-primary fw-semibold order-1 d-flex'>*/}
          {/*          <li className='menu-item'>*/}
          {/*            <a href='#' target='_blank' className='menu-link px-2'>*/}
          {/*              About*/}
          {/*            </a>*/}
          {/*          </li>*/}

          {/*          <li className='menu-item'>*/}
          {/*            <a href='#' target='_blank' className='menu-link px-2'>*/}
          {/*              Support*/}
          {/*            </a>*/}
          {/*          </li>*/}

          {/*          <li className='menu-item'>*/}
          {/*            <a*/}
          {/*                href='#'*/}
          {/*                target='_blank'*/}
          {/*                className='menu-link px-2'*/}
          {/*            >*/}
          {/*              Contact Us*/}
          {/*            </a>*/}
          {/*          </li>*/}
          {/*        </ul>*/}
          {/*</div>*/}
      </>
  )
}

const updateDOM = (config: ILayout) => {
    if (config.app?.footer?.fixed?.desktop) {
        document.body.classList.add('data-kt-app-footer-fixed', 'true')
    }

    if (config.app?.footer?.fixed?.mobile) {
        document.body.classList.add('data-kt-app-footer-fixed-mobile', 'true')
    }
}

export {Footer}
