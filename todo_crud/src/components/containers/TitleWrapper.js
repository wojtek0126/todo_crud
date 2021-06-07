/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { taskBackground } from '../../styles/gradients';


const TitleWrapper = ({contentArea}) => (    
    <Flex sx={{    
        // backgroundColor: 'boxBackground',                    
        background: `${taskBackground}`,
        color: 'text',
        border: '2px solid',  
        borderColor: 'boxBorder', 
        borderRadius: 4,
        fontSize: 4,
        margin: 3,       
        padding: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
    {contentArea}
  </Flex> 
);


export default TitleWrapper;


    