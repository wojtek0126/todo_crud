/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const TaskDetailBtnWrapper = ({ contentArea, displayIt }) => (
  <div
    sx={{
      display: `${displayIt}`,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
    }}
  >
    {contentArea}
  </div>
)

export default TaskDetailBtnWrapper
