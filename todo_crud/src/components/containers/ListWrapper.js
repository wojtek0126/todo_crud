/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { taskBackground } from '../../styles/gradients'
import { generalBorderRadius } from '../../styles/themes/settings'

const ListWrapper = ({ contentArea }) => (
  <div
    sx={{
      display: 'flex',
      backgroundColor: 'boxBackground',
      // background: `${taskBackground}`,
      color: 'text',
      border: '2px solid',
      borderColor: 'boxBorder',
      borderRadius: generalBorderRadius,
      fontSize: 4,
      margin: 3,
      padding: 3,
      flexDirection: 'column',
    }}
  >
    {contentArea}
  </div>
)

export default ListWrapper
