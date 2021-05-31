/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import{ itemDetailsBackground } from '../../styles/themes/theme';


const TaskDetailsWrapper = ({contentArea, displayIt}) => (  
    <div
    sx={{
      display: `${displayIt}`,
      alignItems: 'center', 
      justifyContent: 'center',
      alignSelf: 'center',        
      background: `${itemDetailsBackground}`,
      color: 'text',
      border: '2px solid', 
      borderColor: 'boxBorder',  
      borderRadius: 4,
      fontFamily: 'body',
      fontSize: 4,
      margin: 3,
      padding: 3,          
    }}
  >  
    {contentArea}
</div> 
);


export default TaskDetailsWrapper;


    