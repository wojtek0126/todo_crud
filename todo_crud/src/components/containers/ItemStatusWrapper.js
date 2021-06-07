/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';


const ItemStatusWrapper = ({contentArea}) => (    
<div sx={{        
    display: 'flex',
    flexDirection: 'row',
                   marginBottom: 2,
                   '@media screen and (max-width: 700px)': {                   
                    alignItems: 'center',
                    justifyContent: 'center'}}} >  
    {contentArea}
  </div> 
);


export default ItemStatusWrapper;


    