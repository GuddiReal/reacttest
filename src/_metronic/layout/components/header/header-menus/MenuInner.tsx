import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'Main'})} to='/dashboard' />
      <MenuItem title='Layout Builder' to='/builder' />
      <MenuItem title='Live Events' to='/#' />
      <MenuItem title='Shots' to='/#' />
      <MenuItem title='Live Casino' to='/#' />
      <MenuItem title='Aviator' to='/#' />
      <MenuItem title='Instant Game' to='/#' />
      <MenuItem title='TV Game' to='/#' />
      <MenuItem title='Bet Game' to='/#' />
    </>
  )
}
