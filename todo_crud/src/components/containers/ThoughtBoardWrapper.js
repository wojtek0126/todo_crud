/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';


const ThoughtBoardWrapper = ({contentArea}) => (    
    <div
    sx={{ 
      display: 'flex',      
      maxWidth: '100vw',               
      flexDirection: 'column',
      background: 'box',     
      backgroundColor: 'boxBackground',
      color: 'text',
      border: '2px solid',
      borderColor: 'boxBorder',
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
      marginBottom: 0
    }}
  >
    {contentArea}
  </div> 
);


export default ThoughtBoardWrapper;


    