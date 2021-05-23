/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';


const SmallText = ({text, color}) => (
    <div
    sx={{
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: [0.8, 1.6],
      color: `${color}`,
      marginBottom: 2,
    }}
  >
    {text}
  </div> 
);


export default SmallText;


    