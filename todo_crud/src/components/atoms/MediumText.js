/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const MediumText = ({text, color, marginBottom}) => (
    <div
    sx={{
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: [1, 2],
      color: `${color}`,
      marginBottom: `${marginBottom}`,
    }}
  >
    {text}
  </div> 
);

export default MediumText;


    