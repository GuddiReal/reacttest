
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../helpers'

type Props = {
  className: string
}

const EngageWidget10 = ({className}: Props) => (
  <div className={`card card-flush ${className}`}>
    <div
      className='  d-flex flex-column justify-content-between mt-9 bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0'
      style={{
        backgroundPosition: '100% 50%',
        backgroundImage: `url('${toAbsoluteUrl('media/stock/900x600/42.png')}')`,
      }}
    >

      <img
        className='mx-auto h-150px h-lg-200px  theme-light-show'
        src={toAbsoluteUrl('media/illustrations/misc/photo_2024-10-01_16-35-37.jpg')}
        alt=''
      />
      <img
        className=''
        src={toAbsoluteUrl('media/illustrations/misc/photo_2024-10-01_16-35-37.jpg')}
        alt=''
      />
    </div>
  </div>
)
export {EngageWidget10}
