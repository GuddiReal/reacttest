import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
// import {ImgSlider} from './ImgSlider'
// import {Providers} from './Providers'
import {
  ListsWidget2,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  MixedWidget8,
  EngageWidget10,
} from '../../../_metronic/partials/widgets'
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar'
import { Content } from '../../../_metronic/layout/components/content'

const DashboardPage: FC = () => (

  <>
      <Content>
          {/* begin::Row */}
          <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
              <div className='col-xxl-12'>
                  <div
                      className='d-flex flex-column justify-content-between   bgi-no-repeat bgi-size-cover bgi-position-x-center '
                      style={{
                          backgroundPosition: '100% 50%',
                          backgroundImage: `url('${toAbsoluteUrl('media/stock/900x600/42.png')}')`,
                      }}
                  >
                      <img
                          className='h-md-100'
                          src={toAbsoluteUrl('media/mainpage/hero1.png')}
                          alt=''
                      />
                      {/*<EngageWidget10 className='h-md-100'/>*/}
                  </div>
              </div>
          </div>

          <form data-kt-search-element="form" className="w-100 position-relative mb-3 p-1" autoComplete="off"
                style={{backgroundColor: "#0F212E", borderRadius: "12px"}}>
              <i className="ki-duotone ki-magnifier fs-2 text-lg-1 text-gray-500 position-absolute top-50 translate-middle-y ms-3">
                  <span className="path1"></span><span className="path2"></span></i>
              <input type="text" className="form-control form-control-flush ps-10" name="search"
                     placeholder=" Search Your Game.." data-kt-search-element="input"/>

          </form>

          <div className='d-flex flex-wrap flex-stack mb-6'>
              <h1 className='fw-bolder my-2' style={{fontSize: "23px"}}>
                  <i className="bi bi-geo fs-2x"></i>
                  Providers
              </h1>
          </div>

          <div className='col-xxl-12'>

              {/*<Providers> </Providers>*/}

          </div>

          <div className='d-flex flex-wrap flex-stack mb-6'>
              <h1 className='fw-bolder my-2' style={{fontSize: "23px"}}>
                  <i className="bi bi-dice-6 fs-2" style={{marginRight:"7px"}}></i>
                  Live Casino
              </h1>
          </div>


          <div className='col-xxl-12'>

              {/*<ImgSlider> </ImgSlider>*/}

          </div>

          <div className='row gy-5 g-xl-8'>
              <div className='col-xl-4'>
                  <ListsWidget2 className='card-xl-stretch mb-xl-8'/>
              </div>
              <div className='col-xl-4'>
                  <ListsWidget6 className='card-xl-stretch mb-xl-8'/>
              </div>
              <div className='col-xl-4'>
                  <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5}/>
                  {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
              </div>
          </div>
          {/* end::Row */}

          <div className='row g-5 gx-xxl-8'>
              <div className='col-xxl-4'>
                  <MixedWidget8
                      className='card-xxl-stretch mb-xl-3'
                      chartColor='success'
                      chartHeight='150px'
                  />
              </div>
              <div className='col-xxl-8'>
                  <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8'/>
              </div>
          </div>
      </Content>
  </>
)

const DashboardWrapper: FC = () => {
    const intl = useIntl()

    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
            <DashboardPage/>
        </>
    )
}

export {DashboardWrapper}
