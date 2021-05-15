/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const ProgressCounter = ({text, counter, color}) => (
    <div        
    sx={{
      border: '1px solid black',
      backgroundColor: `${color}`,
      borderRadius: '100em',
      color: 'foreground',
      display: 'inline-block',
      fontFamily: 'heading',
      fontSize: [0, 1],
      fontWeight: 'bold',
      marginBottom: 1,
      px: 3, // shorthand for defining padding-left and padding-right
      py: 2, // shorthand for defining padding-top and padding-bottom
      textDecoration: 'none',
      textTransform: 'uppercase',         
    }}
  > {text}: {counter}
  </div>   
);

export default ProgressCounter;


    