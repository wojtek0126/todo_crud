/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';


const ButtonsWrapper = ({contentArea, displayStyle}) => (    
<div sx={{display: `${displayStyle}`, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
    {contentArea}
</div> 
);


export default ButtonsWrapper;


    