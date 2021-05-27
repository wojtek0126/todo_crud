/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';


const TaskWrapper = ({contentArea}) => (    
    <div
    sx={{
      background: 'box',     
      backgroundColor: 'boxBackground',
      color: 'text',
      border: '2px solid', 
      borderColor: 'boxBorder',  
      borderRadius: 4,
      fontSize: 4,
      margin: 3,
      padding: 3,
    }}>
      {contentArea}
    </div>
);


export default TaskWrapper;


    