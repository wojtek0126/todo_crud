/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'


const TitleText = ({text, color}) => (
    <h1
    sx={{
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: `${color}`,
      fontSize: [3, 4, 5],
      margin: 0,
      textTransform: 'uppercase',
      display: 'flex',
      alignSelf: 'center',
      paddingBottom: '10px'
    }}
  >
    {text}
  </h1> 
);


export default TitleText;


    