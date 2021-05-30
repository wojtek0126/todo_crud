/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';


const TaskDetailsWrapper = ({contentArea, displayIt}) => (  
    <div
    sx={{
      display: `${displayIt}`,
      alignItems: 'center', 
      justifyContent: 'center',
      alignSelf: 'center',
      background: 'box',     
      backgroundColor: 'boxBackground',
      color: 'text',
      border: '2px solid', 
      borderColor: 'boxBorder',  
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}
  >  
    {contentArea}
</div> 
);


export default TaskDetailsWrapper;


    