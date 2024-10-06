import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
        <>
      {/*<SidebarMenuItem*/}
      {/*  to='/dashboard'*/}
      {/*  icon='element-11'*/}
      {/*  title={intl.formatMessage({id: 'MENU.DASHBOARD'})}*/}
      {/*  fontIcon='bi-app-indicator'*/}
      {/*/>*/}
      <SidebarMenuItem to='/builder' icon='bi bi-star' title='Favourites' fontIcon='bi-star'/>

      <SidebarMenuItem to='/builder2' icon='bi bi-arrow-clockwise' title='Recent' fontIcon='bi-layers' />

      <SidebarMenuItem to='/builder2' icon='bi bi-crosshair2' title='Challenges' fontIcon='bi-layers' />

      <SidebarMenuItem to='/builder2' icon='bi bi-journal-bookmark' title='My Bets' fontIcon='bi-layers' />
        </>

    </>
  )
}

export {SidebarMenuMain}
