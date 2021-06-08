/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import{ taskDetailsBackground } from '../../styles/gradients';


const TaskDetailsWrapper = ({contentArea, displayIt}) => (  
    <div
    sx={{
      display: `${displayIt}`,
      alignItems: 'center', 
      justifyContent: 'center',
      alignSelf: 'center',        
      background: `${taskDetailsBackground}`,
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
  <Flex sx={{flexDirection: 'column'}}>  
    {contentArea}
  </Flex>
</div> 
);


export default TaskDetailsWrapper;


    