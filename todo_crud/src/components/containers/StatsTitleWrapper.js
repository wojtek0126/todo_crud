/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { taskBackground } from '../../styles/gradients';


const StatsTitleWrapper = ({contentArea}) => (    
<div sx={{
        display: 'flex',
        flexDirection: 'column',           
        // backgroundColor: 'boxBackground',
        background: `${taskBackground}`,
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


export default StatsTitleWrapper;


    