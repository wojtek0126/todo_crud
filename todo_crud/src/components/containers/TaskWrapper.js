/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { taskBackground } from '../../styles/styles/gradients'
import { generalBorderRadius, borders } from '../../styles/themes/settings'

const TaskWrapper = ({ contentArea }) => (
  <div
    sx={{
      background: 'box',
      backgroundColor: 'boxBackground',
      // background: `${taskBackground}`,
      color: 'text',
      border: `${borders}`,
      borderColor: 'boxBorder',
      borderRadius: generalBorderRadius,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >
    {contentArea}
  </div>
)

export default TaskWrapper
