/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';


const CreateButtonsWrapper = ({contentArea}) => (    
<Flex  sx={{flexDirection: 'row',
                 justifyContent: 'flex-start',
                 flexWrap: 'wrap',
                 '@media screen and (max-width: 700px)': {
                  flexDirection: 'column',
                  alignItems: 'baseline',
                  justifyContent: 'baseline'                  
                } }}>
    {contentArea}
</Flex> 
);


export default CreateButtonsWrapper;


    