import {SidebarMenuMain} from './SidebarMenuMain'

const SidebarMenu = () => {
  return (
    <div className='app-sidebar-menu overflow-hidden flex-column-fluid'>
      <div
        id='kt_app_sidebar_menu_wrapper'
        className='app-sidebar-wrapper hover-scroll-overlay-y my-5'
        data-kt-scroll='true'
        data-kt-scroll-activate='true'
        data-kt-scroll-height='auto'
        data-kt-scroll-dependencies='#kt_app_sidebar_logo, #kt_app_sidebar_footer'
        data-kt-scroll-wrappers='#kt_app_sidebar_menu'
        data-kt-scroll-offset='5px'
        data-kt-scroll-save-state='true'
      >
          <div
              className='menu menu-column menu-rounded menu-sub-indention px-3'
              id='#kt_app_sidebar_menu'
              data-kt-menu='true'
              data-kt-menu-expand='false'
          >


              <div className="menu-item" style={{backgroundColor: "#1A2C38", borderRadius: "8px",marginBottom:"30px"}}>
                  <div className="menu-link without-sub">

                  <div className="cursor-pointer symbol  gfg" data-kt-menu-trigger="{default: 'click'}"
                       data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                      <img style={{width:"100%"}}
                          src="https://s3-alpha-sig.figma.com/img/72b3/a056/be22c6c4d061876e56a1c07de3a2bac4?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gmQc5vNd-05XW5BrmyrersiHLJj1knpRUbozOV3sa7NAUmRHDvSZ0ZKoWp6FJyEZFxicjadJ3NHhu7G-R0nA~UZpvKXEvmb2opvSxPrVYgYp7fxBVpu5Lx0B6UfiIeNmtOyBAIUoAK6ZoZbLLMzij3PckipBvGRjBy60qDkLNb17behyMHSbb4023wmI2QvmJn4j3DL8nCQi97G4um8mBW6kRwrm7BQuW9aAlRiTF4JVO61rcJzPK1O~lJl0-oi~2qsDlAaNBNZu64qiW4ltcNYQCNo17DH4OAjSYA7ukeVJeMif2QQqpA-GQVQWcZIwQgUQCMVixumbfTfm6bM4mQ__"
                          alt=""/>
                      <div className="text-container">
                            <h4 className={"ki-text-bold"}>CASINO</h4>
                        </div>
                      </div>

                  <div className="cursor-pointer symbol  gfg" data-kt-menu-trigger="{default: 'click'}"
                       data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" style={{paddingLeft:"10px"}}>
                      <img  style={{width:"100%"}}
                          src="https://s3-alpha-sig.figma.com/img/ccf5/82d7/d989a59500cba403b799cb1ea9ed3317?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CncCR8o8osQe6-fWODCJ04Bu1Oj~T2beK0GNElvMAajanJroG72y0XY7pJeBfIIcUDqdrUgIVn5l-UpLfE3T9xbnIfC4g9ePFV3VhP1o19B8uDzCyYg50ImVUxVF0RkFjj3LTnaHENEsrGa8kG1CeG~EMzTBNa1mAgxSf7VmVcBPNHgNUNA3hQkl2Q6s-11bYiOkgLIcXZazn3jbhgh9rpnZQ3P~KvWiFuhSBAxTpD6NbcnpYcLEzPGiBBojHtIiErZB-81ISFHrQgGhSnlkKGevU2nmJgWSnhc74MX6TDRMTWHva-4oBritDvM8yf3ot0JEXPDThi4gH8HrPX-jug__"
                          alt=""/>
                      <div className="text-container">
                            <h4 className={"ki-text-bold"}>SPORTS</h4>
                        </div>
                      </div>
                  </div>

              </div>
              <SidebarMenuMain/>
          </div>
      </div>
    </div>
  )
}

export {SidebarMenu}
