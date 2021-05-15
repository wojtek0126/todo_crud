/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const MediumText = ({text, color}) => (
    <div
    sx={{
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: [1, 2],
      color: `${color}`,
      marginBottom: 2,
    }}
  >
    {text}
  </div> 
);

export default MediumText;


    