/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';


const ItemFilteredWrapper = ({contentArea}) => (    
    <Flex sx={{ flexWrap: 'wrap' }}>  
    {contentArea}
    </Flex>
);


export default ItemFilteredWrapper;


    