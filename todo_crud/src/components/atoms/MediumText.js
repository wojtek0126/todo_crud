/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';


const MediumText = ({text, color, marginBottom, id, display, alignSelf}) => (
    <div id={id}
    sx={{
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: [1, 2],
      color: `${color}`,
      marginBottom: `${marginBottom}`,
      display: `${display}`,
      alignSelf: `${alignSelf}`
    }}
  >
    {text}
  </div> 
);


export default MediumText;


    