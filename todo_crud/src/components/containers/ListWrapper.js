/* eslint-disable */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { taskBackground } from '../../styles/gradients'
import { generalBorderRadius, borders } from '../../styles/themes/settings'
import background3 from "../../assets/silver.jpg";
 
const ListWrapper = ({ contentArea }) => (
  <div
    sx={{
      display: 'flex',
      backgroundImage: `url(${background3})`,
      backgroundSize: 'cover',
      // backgroundColor: 'boxBackground',
      // background: `${taskBackground}`,
      color: 'text',
      border: `${borders}`,
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
